import React from "react";
import "./Services.css";

function Services() {
  return (
    <>
      <section className="about">
        <h1 className="title1">SERVICIOS</h1>

        <div className="container">
          <p className="pa">ALQUILER DE SCOOTERS AUTOMATICAS</p>
          <p className="pe">ALQUILER DE MOTOCICLETAS CIUDAD</p>
          <p className="pi">ALQUILER DE MOTOCICLETAS TURISMO</p>
          <img
            className="image"
            src="https://cdn.motor1.com/images/mgl/exPxN/s3/honda-pcx-150-2020.jpg"
            alt="scooter"
          />
          <img
            className="image1"
            src="https://www.moto1pro.com/sites/default/files/moto-principiantes.jpg"
            alt="ciudad"
          />
          <img
            className="image2"
            src="https://www.formulamoto.es/wp-content/uploads/2021/05/sport-turismo-1200x800.jpg" alt="turismo" />

            <p className="po">ALQUILER DE MOTOCICLETAS DEPORTIVAS</p>
            <img className="image3" src="https://www.moto1pro.com/sites/default/files/yamaha-yzf-r125-apertura_ok.jpg" alt="deportiva" />
        </div>
      </section>
    </>
  );
}

export default Services;
