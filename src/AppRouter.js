import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import { Bolsas } from './pages/Bolsas.js';
import { AddProducto } from './pages/AddProducto';
import { Papelera } from './pages/Inicio.js';
import { Registrarse } from './pages/Registrarse.js';
import { Login } from './pages/Login.js';
import { Nosotros } from './pages/Nosotros.js';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/nosotros" component={Nosotros}/>
                    <Route exact path="/bolsas" component={Bolsas}/>
                    <Route exact path="/papelera" component={Papelera}/>
                    <Route exact path="/addProducto" component={AddProducto}/>
                    <Route exact path="/registrarse" component={Registrarse}/>
                    <Route exact path="/login" component={Login}/>  
                    <Route exact path="/" component={Bolsas}/>

                    <Redirect to='/'/>
                </Switch>
            </div>
        </Router>
    )
}
