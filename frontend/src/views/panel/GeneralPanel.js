import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
//import Input from '../../components/forms/Input';
import Button from '../../components/forms/Button';


import "./GeneralPanel.css"



function GeneralPanel() {
    return (
        <section className='login'>
            <div className="container">
                <Link to="/"><Logo showText={false} size="80px" /></Link>
                <h1 className='title'>Consultas Generales</h1>
                 <form className='flex card form'>
                    <Link to="/motoPanel"><Button style="fill">Motos</Button></Link>
                    <Link to="/categoryPanel"><Button style="fill">Categorias</Button></Link>
                    <Link to="/clientesPanel"><Button style="fill">Clientes</Button></Link>
                    <Link to="/mensajesPanel"><Button style="fill">Mensajes</Button></Link>
                    <Link to="/reservacionesPanel"><Button style="fill">Reservaciones</Button></Link>
                </form>                
            </div>
        </section>
    );
}

    
    

export default GeneralPanel;