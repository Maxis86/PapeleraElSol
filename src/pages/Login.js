import React, {useState} from 'react'
import firebase from 'firebase/app'
import "firebase/auth";
import './login.css';
import { Alert } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";

export const Login = () => {

    const history = useHistory();
    
    // State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(false);
    const [usuarioLogeado, setUsuarioLogeado] = useState(false);

    // extraer de usuario
    const { email, password } = usuario;
    

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    // Cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            // mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            setError(true);
            return;
        }

        setError(false);

        // Pasarlo al action
        signInWithEmailPassword();

        guardarUsuario({
            email: '',
            password: ''
        })

        
    }

    const signInWithEmailPassword= () => {

    // [START auth_signin_password]
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        
        setUsuarioLogeado (true);
        
        return history.push("/");
        })
        .catch((error) => {
        // const errorCode = error.code;
        // console.log(errorCode)
        // const errorMessage = error.message;
        // console.log(errorMessage)
        });
    // [END auth_signin_password]
    }

    return (
        <div>

            <div className="form-usuario">
            {/* { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null } */}

            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                {error ? <Alert color="danger"> Todos los campos son obligatorios </Alert> : null}
                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    
                    <NavLink activeClassName="active" className="btn btn-outline-dark" to='./a' >ir a Inicio</NavLink>
                    <NavLink activeClassName="active" className="btn btn-outline-dark" to='./registrarse' >Registrarse</NavLink>                  
                    
                    {usuarioLogeado ? <p>Usuario Registrado</p>:<p>Usuario No Registrado</p>}

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}
