##### Proyecto pagina web con Flask #####

##### forma básica de crear, iniciar y acceder a una web ####

# desde Framework importa librería de Flask con el renderizado de la plantilla a usar
from flask import Flask, render_template

#variable con la cual se trabaja el acceso
app = Flask(__name__)

#ruta para acceder a la plantilla
@app.route('/')

#definición que contiene la plantilla html
def index():
    #retorna el valor esperado
    return render_template('index.html')

# en caso de que coincida con el main principal
if __name__ == '__main__':
    app.run(debug=True)