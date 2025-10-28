

import React, {useState} from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form'

const SignUpPage=()=>{

    /* **********  SOLO PARA PRUEBAS ********* */
    //Validación antigua
    /* const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('') */
    /* **********  SOLO PARA PRUEBAS ********* */

    //Validación de formularios (nueva)
    const { register, handleSubmit, reset, formState:{errors} } = useForm(); //watch
    const [show, setShow]=useState(true)
    const [serverResponse, setServerResponse]=useState('')

    const submitForm=(data)=>{

        /* **********  SOLO PARA PRUEBAS ********* */
        //Solo para verificar output json en navegador (F12)
        //console.log(data)

        /* ########## SIGNUP
            Proceso para datos ingresados por formulario de registro, 
            sean almacenados en la BD
        */
       /* console.log(data.username)
       console.log(data.email)
       console.log(data.password)
       console.log(data.confirmPassword) */
       /* **********  SOLO PARA PRUEBAS ********* */

       if(data.password === data.confirmPassword){

            const body={
                username:data.username,
                email:data.email,
                password:data.password
            }

            const requestOptions={
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(body)
            }

            fetch('/auth/signup', requestOptions)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    setServerResponse(data.message)
                    console.log(serverResponse)

                    setShow(true)
                })
                //.then(data=>{console.log(data)})
                .then(err=>console.log(err))

            reset()

            /* **********  SOLO PARA PRUEBAS ********* */
            //Validación antigua
            /* console.log("Datos registrados")
            console.log(username)
            console.log(email)
            console.log(password)
            console.log(confirmPassword)

            setUsername('')
            setEmail('')
            setPassword('')
            setConfirmPassword('') */
            /* **********  SOLO PARA PRUEBAS ********* */
       }else{
            alert("Las contraseñas no coinciden. Verifique por favor!")
       }
    }

    /* **********  SOLO PARA PRUEBAS ********* */
    //Solo para verificar output json en navegador (F12)
    /* console.log(watch("username"));
    console.log(watch("email"));
    console.log(watch("password"));
    console.log(watch("confirmPassword")); */
    /* **********  SOLO PARA PRUEBAS ********* */

    return(
        <div className="container">
            <div className="form">
                <h1>Regístrese</h1>
                {show?
                <>
                    <Alert variant="success" onClose={() => setShow(false)} dismissible>                        
                        <p>{serverResponse}</p>
                    </Alert>
                </>
                :
                <h1></h1>
                }
                
                <form>
                    <Form.Group>
                        <Form.Label>Nombre de usuario:</Form.Label>
                        <Form.Control type="text" 
                        placeholder="Escriba su nombre"
                        //Validación nueva (con react-hook-form)
                        {...register("username", {required:true, maxLength:50})}

                        //Validación antigua (sin react-hook-form)
                        /*value={username} 
                        name="username" 
                        onChange={(e)=>{setUsername(e.target.value)}}*/
                        />
                        {errors.username && <p style={{color:"red"}}><small>El nombre es requerido</small></p>}
                        {errors.username?.type === "maxLength" && <p style={{color:"red"}}><small>Supera 50 caracteres</small></p>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" 
                        placeholder="Ingrese su email"
                        {...register("email", {required:true, maxLength:50})}

                        /* value={email} 
                        name="email"
                        onChange={(e)=>{setEmail(e.target.value)}} */
                        />
                        {errors.email && <p style={{color:"red"}}><small>El email es requerido</small></p>}
                        {errors.email?.type === "maxLength" && <p style={{color:"red"}}><small>Supera 50 caracteres</small></p>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" 
                        placeholder="Escriba una contraseña"
                        {...register("password", {required:true, minLength:8})}

                        /* value={password} 
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}} */
                        />
                        {errors.password && <p style={{color:"red"}}><small>La contraseña es requerida</small></p>}
                        {errors.password?.type === "minLength" && <p style={{color:"red"}}><small>Mínimo 8 caracteres</small></p>}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirmar contraseña:</Form.Label>
                        <Form.Control type="password" 
                        placeholder="Repita contraseña"
                        {...register("confirmPassword", {required:true, minLength:8})}

                        /* value={confirmPassword} 
                        name="confirmPassword"
                        onChange={(e)=>{setConfirmPassword(e.target.value)}} */
                        />
                        {errors.confirmPassword && <p style={{color:"red"}}><small>Confirmación es requerida</small></p>}
                        {errors.confirmPassword?.type === "minLength" && <p style={{color:"red"}}><small>Mínimo 8 caracteres</small></p>}
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)}>Finalizar</Button>
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