import db from '../Firebase/config';


// delete form usuarios where id='xxx'
export const eliminarProducto = id =>{

    db.collection("productos")
        .doc(id)
        .delete()
        .then(() => {
        // console.log("Document successfully deleted!");
        }).catch((error) => {
        // console.error("Error removing document: ", error);
        });

}

// insert into usuarios
export const agregarProducto = producto =>{
    
    db.collection('productos')
        .add (producto)

}

// update usuarios set precio=....
export const editarPrecio = (id, nuevoPrecio) =>{

    db.collection('productos')
        .doc(id)
        .update({
            precio: nuevoPrecio
        })

}


