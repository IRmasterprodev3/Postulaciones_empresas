
import React from "react";
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { data } from "react-router-dom";

const CreateRecipePage=()=>{

    const {register, handleSubmit, reset, formState:{errors}}=useForm()

    const createRecipe=(data)=>{
        console.log(data)

        const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY')
        console.log(token)

        const requestOptions={
            method: 'POST',
            headers: {
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token)}`
            },
            body:JSON.stringify(data)
        }

        fetch('/recipe/recipes', requestOptions)
        .then(res=>res.json())
        .then(data=>
            reset()
        )
        .catch(err=>console.log(err))
    }

    return(
        <div className="container">
            <h1>Crear nueva receta</h1>
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
                    <Button variant="primary" onClick={handleSubmit(createRecipe)}>Crear</Button>
                </Form.Group>
            </form>
        </div>
    )
}

export default CreateRecipePage