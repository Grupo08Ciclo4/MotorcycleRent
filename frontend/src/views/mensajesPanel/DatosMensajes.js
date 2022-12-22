import React from 'react';

import "./MensajesPanel.css"

function DatosMensajes(props) {

    const { data } = props

    const { idMensaje, mensaje, idCliente } = data

   
        return (
            <div className='transaction grid card'>
                <p className='idMensaje'>{idMensaje}</p>
                <p className='mensaje'>{mensaje}</p>
                <p className='idCliente'>{idCliente}</p>              
            </div>
        );
    
}

export default DatosMensajes;