import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


import PaginaInicial from '../PaginaInicial';
import PaginaFrontEnd from '../PaginaBackEnd';
import PaginaBackEnd from '../PaginaBackEnd';


const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<PaginaInicial/>}/>   
            <Route exact path='/front-end' element={<PaginaFrontEnd/>}/>   
            <Route exact path='/back-end' element={<PaginaBackEnd />}/>   
        </Routes>    
    </BrowserRouter>
)


export default Rotas;
