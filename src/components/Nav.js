import React from 'react'
import { NavLink } from 'react-router-dom'

 
export const Nav = () => {
    return (
        <>
            <nav className=" navbar navbar-expand-sm navbar-dark bg-dark">
                {/* <NavLink className="navbar-brand" to="/">Productos</NavLink> */}

                <div className=" d-flex justify-content-evenly  navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink activeClassName="active" className="nav-item nav-link" to='./papelera'>Inicio</NavLink>
                        <NavLink activeClassName="active" className="nav-item nav-link" to='./bolsas'>Productos </NavLink>
                        <NavLink activeClassName="active" className="nav-link link-warning" to='./nosotros'> Contacto</NavLink>
                        <NavLink activeClassName="active" className="nav-item nav-link" to='./addProducto'>Agregar Producto</NavLink>
                    </div>
                </div>
            </nav>

        </>
    )
}
