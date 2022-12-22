import React from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/global.css";
import Navbar from "./components/ui/Navbar";
import Home from "./views/home/Home";
import Login from "./views/login/Login";
import MotoPanel from "./views/motoPanel/MotoPanel";
import GeneralPanel from "./views/panel/GeneralPanel";
import CategoryPanel from "./views/categoryPanel/CategoryPanel";
import About from "./components/about/About";
import Servics from "./components/servics/Servics";
import Mision from "./components/mision/Mision";
import Vision from "./components/vision/Vision";
import ClientesPanel from "./views/clientesPanel/ClientesPanel";
import ReservacionesPanel from "./views/reservacionesPanel/ReservacionesPanel";
import MensajesPanel from "./views/mensajesPanel/MensajesPanel";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servics" element={<Servics />} />
        <Route path="/mision" element={<Mision />} />
        <Route path="/vision" element={<Vision />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/panel" element={<GeneralPanel />} />
      <Route path="/motoPanel" element={<MotoPanel />} />
      <Route path="/categoryPanel" element={<CategoryPanel />} />
      <Route path="/clientesPanel" element={<ClientesPanel />} />
      <Route path="/mensajesPanel" element={<MensajesPanel />} />
      <Route path="/reservacionesPanel" element={<ReservacionesPanel />} />
    </Routes>
  );
}

export default App;
