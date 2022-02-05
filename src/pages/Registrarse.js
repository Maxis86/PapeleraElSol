import React, {useState} from 'react';
import firebase from 'firebase/app'
import "firebase/auth";
import { NavLink } from 'react-router-dom';
import './login.css';
import { Error } from '../components/Error';
import { useHistory } from "react-router-dom";

export const Registrarse = () => {

    const history = useHistory();

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState(false);

    // extraer de usuario
    const { nombre, email, password } = usuario;

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
        if(nombre.trim() === '' || email.trim() === '' || password.trim() === '') {
            // mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            setError(true);
            return;
        }
        
        setError(false);

        // Pasarlo al action
        signUpWithEmailPassword(nombre);

        guardarUsuario({
            nombre: '',
            email: '',
            password: ''
        })

    }

    const signUpWithEmailPassword = (nombre) => {
       

        // [START auth_signup_password]
        firebase.auth().createUserWithEmailAndPassword( email, password)
          .then((userCredential) => {
            // Signed in 
            userCredential.user.updateProfile({
                displayName : nombre
            });
            return history.push("/");
            // ...
          })
          .catch((error) => {

          });
       
      }


    return (
            <div>

                <div className="form-usuario">
                {/* { alerta ? ( <div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div> )  : null } */}

                <div className="contenedor-form sombra-dark">
                    <h1>Registrarse</h1>
                    {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}
                    <form
                        onSubmit={onSubmit}
                    >

                        <div className="campo-form">
                            <label htmlFor="nombre">Nombre</label>
                            <input 
                                type="nombre"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu Nombre"
                                value={nombre}
                                onChange={onChange}
                            />
                        </div>

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
                        <NavLink activeClassName="active" className="btn btn-outline-dark" to='./login' >Login</NavLink>                  

                        <div className="campo-form">
                            <input type="submit" className="btn btn-primario btn-block" value="Crear Cuenta" />
                        </div>
                    </form>
                    {/* <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                        Obtener Cuenta
                    </Link> */}
                </div>
            </div>
        </div>
    )
}
