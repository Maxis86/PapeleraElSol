import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Productos } from "./pages/Productos.js";
import { AddProducto } from "./pages/AddProducto";
import { Registrarse } from "./pages/Registrarse.js";
import { Login } from "./pages/Login.js";
import { Contacto } from "./pages/Contacto";
import { Inicio } from "./pages/Inicio";
import CarritoComprasPage from "./pages/CarritoComprasPage";

import AlertaState from "./context/alertas/alertaState";
import ProductosState from "./context/productos/productosState.js";
import CarritoComprasState from "./context/carritoCompras/carritoComprasState.js";
import LoginState from "./context/login/loginState.js";

export const AppRouter = () => {
  return (
    <ProductosState>
      <CarritoComprasState>
        <AlertaState>
          <LoginState>
            <Router>
              <div>
                <Switch>
                  <Route exact path="/contacto" component={Contacto} />
                  <Route exact path="/productos" component={Productos} />
                  <Route exact path="/addProducto" component={AddProducto} />
                  <Route exact path="/registrarse" component={Registrarse} />
                  <Route
                    exact
                    path="/carritoCompras"
                    component={CarritoComprasPage}
                  />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/" component={Inicio} />
                  <Redirect to="/" />
                </Switch>
              </div>
            </Router>
          </LoginState>
        </AlertaState>
      </CarritoComprasState>
    </ProductosState>
  );
};
