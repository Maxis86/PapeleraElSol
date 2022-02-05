import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import imagen from "../imagen/bolsaRollo.jpg";
import styled from "@emotion/styled";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import { useCounter } from '../Hooks/useCounter'
import addcarrito from '../imagen/carrito-de-compras.png'


import {editarPrecio, eliminarProducto} from '../helpers/ABMProductos'


const Distancia = styled.div`
  padding: 5px;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    height: 500,
    display: "flex",
    flexWrap: "wrap",
  },
  media: {
    height: 200,
  },
  colorEliminar: {
    color: 'white',
    background: 'red',
  },
  colorEditar: {
    background: '#eeff41',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 40,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});

export const Card = ({ urlImagen, nombre, precio, id, crearCarrito, usuario}) => {



  const [nuevoPrecio, setNuevoPrecio] = useState("")

  const { counter, increment, decrement} = useCounter (1);

  const actualizarState = e => {
    setNuevoPrecio(e.target.value)
    
  }

  const actualizarPrecio = () => {
    editarPrecio(id,nuevoPrecio)
  }

  const addProducto = () =>{
    crearCarrito({id: id, descripcion: nombre, cantidad: counter, precio: precio, importe:  (precio*counter)});
    //crearCarrito({descripcion: nombre});
  }
  
  const classes = useStyles();
  console.log("Estoy en card, Hola -----------------------")
  return (
    <>
    
      <Distancia>
      
        <Cards className={classes.root} >
          
          <CardActionArea >

            <CardMedia
              className={classes.media}
              image={urlImagen}
              title={nombre}
            />

            <CardContent >
              <Typography gutterBottom variant="h5" component="h2" >
                {nombre}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" name ="precio">
                Precio: $ {precio}
              </Typography>
            </CardContent>

          </CardActionArea>

          <CardActions>
          
            <Button
              variant="contained"
              name= "quitar"
              onClick={decrement}
            >
              -
            </Button>

            <h2>{counter}</h2>

            <Button 
              name= "precio"
              variant="contained"
              color="primary"
              onClick={increment}
            >
              +
            </Button>


            
            <Button 
                name= "add"
                onClick={() => addProducto(nombre)}
              ><img src={addcarrito} alt=''/>
                
            </Button>

          </CardActions>

           
            { (usuario.email === "pepe@pepe.com") ? (            
                <>
                <CardActions>
                  <form  >
                      {/* onSubmit={ () => editarPrecio(id, nuevoPrecio)} */}
                      <CardActions>
                      <TextField 
                          label="Nuevo Precio" 
                          type="text" 
                          value={nuevoPrecio}  
                          onChange={actualizarState}
                      />
                  
                      <Button
                        className= {classes.colorEditar}
                        startIcon={<EditIcon />}
                        onClick={actualizarPrecio}
                      >Edit
                      </Button>
                      </CardActions>
                      
                  </form>

                  </CardActions>

                  <CardContent >
                    <Button
                        type="button" 
                        variant="contained"
                        className= {classes.colorEliminar}
                        startIcon={<DeleteIcon />}
                        onClick = { () => eliminarProducto(id)}
                    >
                      Delete
                    </Button>
                  </CardContent>
                  </>
            ) : (<p></p>)}

          
        </Cards>
        
      </Distancia>
    </>
  );
};

