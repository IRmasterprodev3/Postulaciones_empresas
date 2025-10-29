
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../auth'
import Recipe from "./Recipe";
import { Modal, Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

//Lo que mostrará si el usuario está logeado
const LoggedInHome=()=>{
    const [recipes, setRecipes]=useState([])
    const [show, setShow]=useState(false)
    const{register, reset, handleSubmit, setValue, formState:{errors}}=useForm()
    const [recipeId, setRecipeId]=useState(0)

    useEffect(
        ()=>{
            fetch('/recipe/recipes')
            .then(res=>res.json())
            .then(data=>{
                setRecipes(data)
            })
            .catch(err=>console.log(err))
        },[]
    )

    const getAllRecipes=()=>{
        fetch('/recipe/recipes')
        .then(res=>res.json())
        .then(data=>{
            setRecipes(data)
        })
        .catch(err=>console.log(err))
    }

    const closeModal=()=>{
        setShow(false)
    }

    const showModal=(id)=>{
        setShow(true)
        setRecipeId(id)
        //console.log("Hola "+id)

        recipes.map(
            (recipe)=>{
                if(recipe.id==id){
                    setValue('title', recipe.title)
                    setValue('description', recipe.description)
                }
            }
        )
    }

    let token=localStorage.getItem('REACT_TOKEN_AUTH_KEY')

    const updateRecipe=(data)=>{
        console.log(data)

        const requestOptions={
            method:'PUT',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token)}`
            },
            body:JSON.stringify(data)
        }

        fetch(`/recipe/recipe/${recipeId}`, requestOptions)
        .then(res=>res.json())
        .then(data=>{console.log(data)
            const reload = window.location.reload()
            reload()
        })
        .catch(err=>console.log(err))

        //console.log(token)
        //console.log(recipeId)
    }

    const deleteRecipe=(id)=>{
        console.log(id)

        const requestOptions={
            method:'DELETE',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token)}`
            },
            //body:JSON.stringify(data)
        }

        fetch(`/recipe/recipe/${id}`, requestOptions)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            getAllRecipes()
        })
        .catch(err=>console.log(err))
    }

    return (
        
        <div className="recipes container">
            <Modal show={show} size="lg" onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar registro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Form.Group>
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text"
                                {...register('title', {required:true, maxLength:25})}
                            />
                        </Form.Group>
                        {errors.title && <p style={{color: 'red'}}><small>Debe escribir un título</small></p>}
                        {errors.title?.type === "maxLength" && <p style={{color:'red'}}><small>Supera 25 caracteres</small></p>}
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={5}
                                {...register('description', {required:true, maxLength:255})}
                            />
                        </Form.Group>
                        {errors.description && <p style={{color: 'red'}}><small>Debe redactar una descripcion</small></p>}
                        {errors.description?.type === "maxLength" && <p style={{color:'red'}}><small>Supera 255 caracteres</small></p>}
                        <br></br>
                        <Form.Group>
                            <Button variant="primary" onClick={handleSubmit(updateRecipe)}>Crear</Button>
                        </Form.Group>
                    </form>
                </Modal.Body>
            </Modal>
            <h1>Listado de recetas</h1>
            {
                recipes.map(
                    (recipe, index)=>(
                        <Recipe 
                            title={recipe.title}
                            key={index}
                            description={recipe.description}
                            onClick={()=>{showModal(recipe.id)}}

                            onDelete={()=>{deleteRecipe(recipe.id)}}
                        />
                    )
                )
            }
            
        </div>
    )
}


//Lo que mostrará si el usuario NO está logeado 
const LoggedOutHome=()=>{
    return (
        <div className="home container">
            <h1 className="heading">Bienvenidos a la APP de Recetas</h1>
            <Link to='/signup' className="btn btn-primary btn-lg">Regístrese</Link>
        </div>
    )
}

const HomePage=()=>{
    
    const [logged]=useAuth()

    return(
        <div>
            {logged?<LoggedInHome/>:<LoggedOutHome/>}
        </div>
    )
}

export default HomePage