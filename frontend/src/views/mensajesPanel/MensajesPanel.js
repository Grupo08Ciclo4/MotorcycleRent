import React, { useEffect, useState } from 'react';
import DatosMensajes from './DatosMensajes';

import "./MensajesPanel.css"



function MensajesPanel() {
    
    async function fetchDatosMotos() {

        //const res = await fetch("http://jsonplaceholder.typicode.com/todos")
        const res = await fetch("http://localhost:8080/message/") 
        const documents = await res.json()
        setDocuments(documents)
    }

    const [documents, setDocuments] = useState([]);
    console.log(documents)

    useEffect(() => {
        fetchDatosMotos()
    }, []);

    return (
        <section className='panel'>
            <div className='container'>
                <div className='balance card flex'>
                    <h2>Mensajes Recibidos</h2>                    
                </div>

                <div className='movements card'>
                    <h2>Mensajes</h2>
                    <div className='transactions flex card'>
                        {documents.map((datos) => <DatosMensajes data={datos}  />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MensajesPanel;