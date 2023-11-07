import React from "react";
import LogoChampiñon from '../assets/img/imagen-champiñon.jpg';
import '../assets/stylesheet/Home.css';
import { useState, useEffect } from "react";

import Categorias from "../Components/Categorias/index.jsx";
import axios from "axios";




const LogoPrincipal = () => {


    return (
        <section>
        
            <div class="imagen">
                <img src={LogoChampiñon} alt="Imagen de champion"/>
                <div class="textos">
                    <h2 class="img-text titulo">Julio Promocional</h2>
                    <p class="img-text parrafo">Productos seleccionados con 33% de descuento</p>
                    <button>Ver consolas</button>
                </div>
            </div>
            
                {
                    <>
                        <Categorias url={"/Categorias"} />
                    </>
                    

                    
                }
        </section>

    )
}

export default LogoPrincipal;