import React from 'react';

import "./CategoryPanel.css"

function DatosCategory(props) {

    const { data } = props

    const { idCategoria, nombre, descripcion } = data

   
        return (
            <div className='transaction grid card'>
                <p className='idCategoria'>{idCategoria}</p>
                <p className='nombre'>{nombre}</p>
                <p className='descripcion'>{descripcion}</p>                               
            </div>
        );
    
}

export default DatosCategory;