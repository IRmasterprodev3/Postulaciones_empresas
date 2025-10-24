

import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUpPage=()=>{

    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    const submitForm=()=>{
        console.log("Datos registrados")
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return(
        <div className="container">
            <div className="form">
                <h1>Regístrese</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Nombre de usuario:</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Escriba su nombre" 
                        value={username} name="username" 
                        onChange={(e)=>{setUsername(e.target.value)}}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" 
                        placeholder="Ingrese su email" 
                        value={email} name="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" 
                        placeholder="Escriba una contraseña" 
                        value={password} name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Confirmar contraseña:</Form.Label>
                        <Form.Control type="password" 
                        placeholder="Repita contraseña" 
                        value={confirmPassword} name="confirmPassword"
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={submitForm}>Finalizar</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Ya tiene una cuenta? <Link to="/signup">Login</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage