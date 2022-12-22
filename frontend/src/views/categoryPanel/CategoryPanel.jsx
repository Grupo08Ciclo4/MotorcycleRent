import React, { useEffect, useState } from 'react';
import DatosCategory from './DatosCategory';

import "./CategoryPanel.css"



function CategoryPanel() {
    
    async function fetchDatosCategory() {

        //const res = await fetch("http://jsonplaceholder.typicode.com/todos")
        const res = await fetch("http://localhost:8080/category/") 
        const documents = await res.json()
        setDocuments(documents)
    }

    const [documents, setDocuments] = useState([]);
    console.log(documents)

    useEffect(() => {
        fetchDatosCategory()
    }, []);

    return (
        <section className='panel'>
            <div className='container'>
                <div className='balance card flex'>
                    <h2>Categorias de Motos</h2>                    
                </div>

                <div className='movements card'>
                    <h2 >Categorias</h2>
                    <div className='transactions flex card'>
                        {documents.map((datos) => <DatosCategory data={datos}  />)}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoryPanel;