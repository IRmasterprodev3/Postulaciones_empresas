
from flask import Flask, request, make_response, jsonify
from flask_restx import Api, Namespace, Resource, fields
from flask_jwt_extended import jwt_required
from models import Recipe


recipe_ns=Namespace('recipe', description="Espacio para registros")


#model (serie)
recipe_model=recipe_ns.model(
    "Recipe",
    {
        "id":fields.Integer(),
        "title":fields.String(),
        "description":fields.String()
    }
)


#Acceso enlace principal (prueba)
@recipe_ns.route('/hello')
class HelloResource(Resource):
    def get(self):
        return {"message": "Bienvenido"}
    

#Ruta de los recursos
@recipe_ns.route('/recipes')
class RecipesResource(Resource):

    @recipe_ns.marshal_list_with(recipe_model)
    def get(self):
        """Obtener todos los registros"""

        recipes=Recipe.query.all()
        
        return recipes
    
    #Endpoint Crear nuevo registro
    @recipe_ns.marshal_with(recipe_model)
    @recipe_ns.expect(recipe_model)
    @jwt_required() #protege acceso
    def post(self):
        """Crear un nuevo registro"""

        data=request.get_json()
        new_recipe=Recipe(
            title=data.get('title'),
            description=data.get('description')
        )

        new_recipe.save()

        return new_recipe, 201
        #return make_response(jsonify({"message": "Usuario registrado con éxito"}), 201)
        
#Endpoint acciones para registro
@recipe_ns.route('/recipe/<int:id>')
class RecipeResource(Resource):

    @recipe_ns.marshal_with(recipe_model)
    def get(self, id):
        """Obtener un registro por ID"""
        recipe=Recipe.query.get_or_404(id)

        return recipe
    
    @recipe_ns.marshal_with(recipe_model)
    @jwt_required() #protege acceso
    def put(self, id):
        """Actualizar registro por ID"""
        recipe_to_update=Recipe.query.get_or_404(id)

        data=request.get_json()

        recipe_to_update.update(data.get('title'), data.get('description'))

        return recipe_to_update, 201
        #return make_response(jsonify({"message": "Usuario registrado con éxito"}), 201)
    
    @recipe_ns.marshal_with(recipe_model)
    @jwt_required() #protege acceso
    def delete(self, id):
        """Eliminar por ID"""
        recipe_to_delete=Recipe.query.get_or_404(id)

        recipe_to_delete.delete()

        return recipe_to_delete, 201