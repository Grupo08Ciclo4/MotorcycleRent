import React from 'react';

import "./ReservacionesPanel.css"

function DatosReservaciones(props) {

    const { data } = props

    const { idReservacion, fechaInicio, fechaDevolucion, idMoto,idCliente } = data

   
        return (
            <div className='transaction grid card'>
                <p className='idReservacion'>{idReservacion}</p>
                <p className='fechaInicio'>{fechaInicio}</p>
                <p className='fechaDevolucion'>{fechaDevolucion}</p>
                <p className='idMoto'>{idMoto}</p>
                <p className='idCliente'>{idCliente}</p>

            </div>
        );
    
}

export default DatosReservaciones;