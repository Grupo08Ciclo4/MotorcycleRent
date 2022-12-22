import React, { useEffect, useState } from 'react';
import DatosClientes from './DatosClientes';

import "./ClientesPanel.css"



function ClientesPanel() {
    
    async function fetchDatosClientes() {

        //const res = await fetch("http://jsonplaceholder.typicode.com/todos")
        const res = await fetch("http://localhost:8080/client/") 
        const documents = await res.json()
        setDocuments(documents)
    }

    const [documents, setDocuments] = useState([]);
    console.log(documents)

    useEffect(() => {
        fetchDatosClientes()
    }, []);

    return (
        <section className='panel'>
            <div className='container'>
                <div className='balance card flex'>
                    <h2>Registro de Clientes</h2>                    
                </div>

                <div className='movements card'>
                    <h2 >Clientes</h2>
                    <div className='transactions flex card'>
                        {documents.map((datos) => <DatosClientes data={datos}  />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientesPanel;