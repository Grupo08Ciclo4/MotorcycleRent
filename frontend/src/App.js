import React from 'react';
import { Route, Routes } from 'react-router-dom';

import "./assets/global.css"
import Navbar from './components/ui/Navbar';
import Home from './views/home/Home';
import Login from './views/login/Login';
import MotoPanel from './views/motoPanel/MotoPanel';
import GeneralPanel from './views/panel/GeneralPanel';
import CategoryPanel from './views/categoryPanel/CategoryPanel';
import About from './components/about/About';
import Services from './components/services/Services';
import Mision from './components/mision/Mision';
import Vision from './components/vision/Vision';


function App() {
    return (
        <Routes>
            <Route element={<Navbar />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/mision' element={<Mision />} />
                <Route path='/vision' element={<Vision  />} />
            </Route>

            <Route path='/login' element={<Login />} />
            <Route path='/panel' element={<GeneralPanel />} />
            <Route path='/motoPanel' element={<MotoPanel />} />
            <Route path='/categoryPanel' element={<CategoryPanel />} />
        </Routes>
    )
}

export default App;