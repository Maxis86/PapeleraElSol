import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import { Productos } from './pages/Productos.js';
import { AddProducto } from './pages/AddProducto';
import { Registrarse } from './pages/Registrarse.js';
import { Login } from './pages/Login.js';
import { Contacto } from './pages/Contacto';
import { Inicio } from './pages/Inicio';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/contacto" component={Contacto}/>
                    <Route exact path="/productos" component={Productos}/>
                    <Route exact path="/addProducto" component={AddProducto}/>
                    <Route exact path="/registrarse" component={Registrarse}/>
                    <Route exact path="/login" component={Login}/>  
                    <Route exact path="/" component={Inicio}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Router>
    )
}
