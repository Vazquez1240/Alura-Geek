import React, { useState, useEffect } from "react";
import './Categorias.css'
import Cards from "../Cards/index.jsx";
import axios from "axios";
import {buscar} from "../../api/api.jsx"
import { Link } from "react-router-dom";
import { logDOM } from "@testing-library/react";

const Categorias = ({url}) => {

    const [categorias, setCategorias] = useState([])

    const [producto, setProducto] = useState([])
    
    const urlProduct = 'http://localhost:5000/Producto'


    useEffect(()  => {
        buscar(url, setCategorias)
    },[url]);
    
    useEffect(() => {
        buscar(urlProduct, setProducto)
    },[urlProduct])
        

    return (
       <>
            <section >
                {
                    categorias.map( (categoria, index) => {
                        const {id, nombre} = categoria;

                        return (
                            <div className="section">
                                <div className="titulo">
                                    <h2>{nombre.toUpperCase()}</h2>
                                    <a href="#">Ver todo {'->'}</a>
                                </div>
                                <div className="datos">
                                    <Cards
                                    key={index}
                                    producto = {producto.filter(product =>  product.categoria === id)}
                                    />
                                </div>
                            </div>
                                
                            )
                        })
                }
            </section>    
       </>
        
    )
}

export default Categorias;
