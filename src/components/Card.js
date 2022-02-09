import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { useCounter } from "../Hooks/useCounter";
import addcarrito from "../imagen/carrito-de-compras.png";
import { editarPrecio, eliminarProducto } from "../helpers/ABMProductos";
import { CardContent } from "@material-ui/core";
import CarritoComprasContext from "../context/carritoCompras/carritoComprasContext";

// const Distancia = styled.div`
//   padding: 5px;
// `;

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
    height: 250,
    display: "flex",
    flexWrap: "wrap",
  },
  media: {
    height: 200,
  },
  colorEliminar: {
    color: "white",
    background: "red",
    marginLeft: 5
  },
  colorEditar: {
    background: "#eeff41",
    color: "black",
  }
});

export const Card = ({
  urlImagen,
  nombre,
  precio,
  id,
  crearCarrito,
  usuario,
}) => {

   
  const carritoComprasContext = useContext(CarritoComprasContext);
  const { agregarAlCarrito, productosCarrito } = carritoComprasContext;

  const [nuevoPrecio, setNuevoPrecio] = useState("");

  const { counter, increment, decrement } = useCounter(1);

  const actualizarState = (e) => {
    setNuevoPrecio(e.target.value);
  };

  const actualizarPrecio = () => {
    editarPrecio(id, nuevoPrecio);
  };

  const addProducto = (nombre, precio, counter) => {
    
    const keygen = require('keygen'); 
    const clave = keygen.hex( keygen.pequeño )

    const totalProducto = precio * counter

    agregarAlCarrito(clave, nombre, precio, counter, totalProducto)

    

    // crearCarrito({
    //   id: id,
    //   descripcion: nombre,
    //   cantidad: counter,
    //   precio: precio,
    //   importe: precio * counter,
    // });
    //crearCarrito({descripcion: nombre});
  };

  const classes = useStyles();
 
  return (
    <>
      <div className="card-deck m-2">
        <div className="card " style={{ width: 268, height: "auto" }}>
          <img className="card-img-top" src={urlImagen} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text"> Precio: $ {precio}</p>
          </div>
          <div className="card-footer">
            <CardActions>
              <Button variant="contained" name="quitar" onClick={decrement}>
                -
              </Button>

              <h2>{counter}</h2>

              <Button
                name="precio"
                variant="contained"
                color="primary"
                onClick={increment}
              >
                +
              </Button>
              <Button name="add" onClick={() => addProducto(nombre, precio, counter)}>
                <img src={addcarrito} alt="" />
              </Button>
            </CardActions>

            <CardActions>
              <form>
                
                  <div  className="d-flex justify-content-between">
                   

                    <Button
                      className={classes.colorEditar}
                      startIcon={<ion-icon name="pencil-outline"></ion-icon>}
                      onClick={actualizarPrecio}
                    >  <input
                      className="form-control"
                      placeholder="edit precio"
                      type="text"
                      value={nuevoPrecio}
                      onChange={actualizarState}
                    /></Button>

                    <Button
                      type="button"
                      variant="contained"
                      className={classes.colorEliminar}
                      startIcon={<ion-icon name="trash-outline"></ion-icon>}
                      onClick={() => eliminarProducto(id)}
                    ></Button>
                  </div>
                
              </form>
            </CardActions>

            <CardContent></CardContent>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <Distancia>
<Cards className={classes.root}>
  <CardActionArea>
    <CardMedia
      className={classes.media}
      image={urlImagen}
      title={nombre}
    />

    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {nombre}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        name="precio"
      >
        Precio: $ {precio}
      </Typography>
    </CardContent>
  </CardActionArea>

  <CardActions>
    <Button variant="contained" name="quitar" onClick={decrement}>
      -
    </Button>

    <h2>{counter}</h2>

    <Button
      name="precio"
      variant="contained"
      color="primary"
      onClick={increment}
    >
      +
    </Button>
    <Button name="add" onClick={() => addProducto(nombre)}>
      <img src={addcarrito} alt="" />
    </Button>
  </CardActions>

  {usuario.email === "pepe@pepe.com" ? (
    <>
      <CardActions>
        <form>
          
          <CardActions>
            <TextField
              label="Nuevo Precio"
              type="text"
              value={nuevoPrecio}
              onChange={actualizarState}
            />

            <Button
              className={classes.colorEditar}
              startIcon={<EditIcon />}
              onClick={actualizarPrecio}
            >
              Edit
            </Button>
          </CardActions>
        </form>
      </CardActions>

      <CardContent>
        <Button
          type="button"
          variant="contained"
          className={classes.colorEliminar}
          startIcon={<DeleteIcon />}
          onClick={() => eliminarProducto(id)}
        >
          Delete
        </Button>
      </CardContent>
    </>
  ) : (
    <p></p>
  )}
</Cards>
</Distancia> 

*/
}
