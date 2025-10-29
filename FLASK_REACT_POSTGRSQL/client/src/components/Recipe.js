
import React from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

//Función para traer todo el listado inicial de contenidos creados previamente
const Recipe=({title, description, onClick, onDelete})=>{

    return(
        <Card className='recipe'>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <p>{description}</p>
                <Button variant='primary' onClick={onClick}>Actualizar</Button>
                {' '}
                <Button variant='danger' onClick={onDelete}>Eliminar</Button>
            </Card.Body>
        </Card>
    )
}

export default Recipe;