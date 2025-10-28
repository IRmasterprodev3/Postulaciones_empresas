
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../auth'
import Recipe from "./Recipe";

//Lo que mostrará si el usuario está logeado
const LoggedInHome=()=>{
    const [recipes, setRecipes]=useState([])

    useEffect(
        ()=>{
            fetch('/recipe/recipes')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setRecipes(data)
            })
            .catch(err=>console.log(err))
        },[]
    )
    return (
        <div className="recipes">
            <h1>Listado de recetas</h1>
            {
                recipes.map(
                    (recipe)=>(
                        <Recipe title={recipe.title} description={recipe.description}/>
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