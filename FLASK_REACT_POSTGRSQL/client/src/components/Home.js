
import React from "react";
import { Link } from "react-router-dom";

const HomePage=()=>{
    return(
        <div className="home container">
            <h1 className="heading">Bienvenidos a la APP de Recetas</h1>
            <Link to='/signup' className="btn btn-primary btn-lg">Regístrese</Link>
        </div>
    )
}

export default HomePage