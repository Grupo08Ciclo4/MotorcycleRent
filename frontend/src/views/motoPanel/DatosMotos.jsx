import React from 'react';

import "./MotoPanel.css"

function DatosMoto(props) {

    const { data } = props

    const { idMoto, nombre, marca, modelo, descripcion, idCategoria } = data

   
        return (
            <div className='transaction grid card'>
                <p className='idMoto'>{idMoto}</p>
                <p className='nombre'>{nombre}</p>
                <p className='modelo'>{modelo}</p>
                <p className='marca'>{marca}</p>
                <p className='descripcion'>{descripcion}</p>
                <p className='idCategoria'>{idCategoria}</p>
               
            </div>
        );
    
}

export default DatosMoto;