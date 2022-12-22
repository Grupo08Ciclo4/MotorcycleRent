import React from 'react';

import "./ClientesPanel.css"

function DatosClientes(props) {

    const { data } = props

    const { idCliente, nombre,email, edad } = data

   
        return (
            <div className='transaction grid card'>
                <p className='idCliente'>{idCliente}</p>
                <p className='nombre'>{nombre}</p>                
                <p className='email'>{email}</p>
                <p className='edad'>{edad}</p>              
            </div>
        );
    
}

export default DatosClientes;