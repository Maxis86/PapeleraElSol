import React, {useState} from 'react'
import firebase from 'firebase/app'
import "firebase/storage";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import {agregarProducto} from '../helpers/ABMProductos' 
import { Layout } from '../components/Layout';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    rootUp: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
      input: {
        display: 'none',
      },
    
  }));

export const AddProducto = () => {
    
    const classes = useStyles();

    //Crear State de Productos
    const [imagen, setImagen] = useState("");
    const [producto, setProducto] = useState({urlImagen:'', nombre:'', precio:'' })

    //Funcion que se ejecuta cada vez que un usuario escribe en un input
    const actualizarState = e => {
        setProducto({
        ...producto,
        [e.target.name]:e.target.value
        })
    }

    const subirImagen = async (e) => {
        // Obtener el archivo
        const file = e.target.files[0];
        console.log("file.name")
        console.log(file.name)
        const keyImagen = uuidv4();
        
        // Crear referencia
        //const ref = firebase.storage().ref("images/" + file.name);
        const ref = firebase.storage().ref("images/" + keyImagen);

        // Subir el archivo
        const upload = await ref.put(file);
        const downloadURL = await upload.ref.getDownloadURL();
     
        setProducto({
          ...producto,
          urlImagen: downloadURL
          })
    }
    //Extraer los valores
    const {urlImagen, nombre, precio} = producto;

    const submitProducto = e => {
        e.preventDefault(); // para que no lo mande por el método Get y aparezca en el link
 
        agregarProducto (producto);

        setProducto({urlImagen, nombre:'', precio:''})

    }

    return (
        <>
             <Layout/>
            <h1>Producto Nuevo:</h1>

            <form className={classes.root} noValidate autoComplete="off" onSubmit={submitProducto}>
                
                <TextField 
                        id="nombre" 
                        name="nombre"
                        label="Descripción" 
                        type="text"
                        value={nombre}
                        onChange={actualizarState}
                />
                <TextField 
                        id="precio" 
                        name="precio"
                        label="Precio" 
                        type="text"
                        value={precio}
                        onChange={actualizarState}
                />

                <input 
                        id="imagen" 
                        label="Imagen" 
                        name="imagen"
                        type="file"
                        accept="image/*"
                        value={imagen}
                        onChange={subirImagen}
                        //randomizeFilename

                />   

                <Button
                        variant="contained" color="primary" disableElevation
                        type="submit"
                        className="u-full-width button-primary"
                >Agregar Producto</Button>
            </form>
 
        </>
    )
}

