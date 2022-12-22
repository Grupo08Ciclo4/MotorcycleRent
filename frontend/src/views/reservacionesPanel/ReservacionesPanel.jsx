import React, { useEffect, useState } from 'react';
import DatosReservaciones from './DatosReservaciones';
import { API_URL } from '../rutaApi/api';

import "./ReservacionesPanel.css"



function ReservacionesPanel() {
    
    async function fetchDatosReservaciones() {

        //const res = await fetch("http://jsonplaceholder.typicode.com/todos")
        const res = await fetch(API_URL + "/reservation/") 
        const documents = await res.json()
        setDocuments(documents)
    }

    const [documents, setDocuments] = useState([]);
    console.log(documents)

    useEffect(() => {
        fetchDatosReservaciones()
    }, []);

    return (
        <section className='panel'>
            <div className='container'>
                <div className='balance card flex'>
                    <h2>Agenda de Reservaciones</h2>                    
                </div>

                <div className='movements card'>
                    <h2>Reservaciones</h2>
                    <div className='transactions flex card'>
                        {documents.map((datos) => <DatosReservaciones data={datos}  />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReservacionesPanel;