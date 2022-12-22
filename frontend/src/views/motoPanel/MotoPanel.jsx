import React, { useEffect, useState } from 'react';
import DatosMoto from './DatosMotos';

import "./MotoPanel.css"



function MotoPanel() {
    
    async function fetchDatosMotos() {

        //const res = await fetch("http://jsonplaceholder.typicode.com/todos")
        const res = await fetch("http://localhost:8080/moto/") 
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
                    <h2>Inventario de Motos</h2>                    
                </div>

                <div className='movements card'>
                    <h2 >Motos</h2>
                    <div className='transactions flex card'>
                        {documents.map((datos) => <DatosMoto data={datos}  />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MotoPanel;