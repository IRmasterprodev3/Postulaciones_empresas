

import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage=()=>{

    const [username,setUsername]=useState('')
    //const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const loginUser=()=>{
        console.log("Accediendo...")
        console.log(username)
        //console.log(email)
        console.log(password)

        setUsername('')
        //setEmail('')
        setPassword('')
    }


    return(
        <div className="container">
            <div className="form">
                <h1>Login</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Usuario:</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Ingrese su nombre" 
                        value={username} name="username" 
                        onChange={(e)=>{setUsername(e.target.value)}}
                        />
                    </Form.Group>
                    {/* <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" 
                        placeholder="Ingrese su email" 
                        value={email} name="email"
                        onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </Form.Group> */}
                    <br></br>
                    <Form.Group>
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" 
                        placeholder="Ingrese su contraseña" 
                        value={password} name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={loginUser}>Login</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>No tiene una cuenta? <Link to="/signup">Crear</Link></small>
                    </Form.Group>
                </form>
            </div>
        </div>
    )
}

export default LoginPage