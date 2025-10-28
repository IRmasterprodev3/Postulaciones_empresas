

import React, {useState} from "react"
import { Form, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { login } from "../auth"

const LoginPage=()=>{

    //Con esto se logra capturar el form del login y tener un control sobre el acceso del usuario
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    //Agregar "watch" cuando sea necesario

    const history=useNavigate()

    /* console.log(watch('username'))
    console.log(watch('password')) */

    //Dando paso a eliminar todo lo siguiente **
    //const [username,setUsername]=useState('')
    //const [email,setEmail]=useState('')
    //const [password,setPassword]=useState('')

    const loginUser=(data)=>{
        console.log(data)

        const requestOptions={
            method: "POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }

        fetch('/auth/login', requestOptions)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.access_token)
            login(data.access_token)

            history('/')
        })

        reset()


        /* console.log("Accediendo...")
        console.log(username)
        //console.log(email)
        console.log(password)
        setUsername('')
        //setEmail('')
        setPassword('') */
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
                        {...register('username', { required:true, maxLength:25 })}
                        /* value={username} 
                        name="username" 
                        onChange={(e)=>{setUsername(e.target.value)}} */
                        />
                    </Form.Group>
                    {errors.username && <p style={{color: 'red'}}><small>El nombre de usuario es requerido</small></p>}
                    {errors.username?.type === "maxLength" && <p style={{color:'red'}}><small>Supera 25 caracteres</small></p>}
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
                        {...register('password', { required:true, minLength:8 })}
                        /* value={password} 
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}} */
                        />
                    </Form.Group>
                    {errors.password && <p style={{color: 'red'}}><small>La contraseña es requerida</small></p>}
                    {errors.password?.type === "minLength" && <p style={{color:'red'}}><small>Mínimo 8 caracteres</small></p>}
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={handleSubmit(loginUser)}>Login</Button>
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