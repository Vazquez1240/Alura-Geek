import { Link } from "react-router-dom"
import './Cards.css'
import { buscar } from "../../api/api"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import Producto from "../../pages/Producto.jsx";


const Cards = (props) => {

    const {producto} = props

    console.log(producto);
    

    
    return (
        <>
            {
                producto.length > 0 &&
                producto.map(product => {
                    const {image, nombre, precio, id} = product;
                    return(
                        <div className="card">
                            <div className="img">
                                <img id="image" src={image} alt={nombre} />
                            </div>
                            <div className="datos">
                                <p>{nombre}</p>
                                <p>$ {precio}</p>
                                <Link to={`/Producto/${id}`}>ver producto</Link>
                            </div>
                        </div>
                        
                    )
                })
            }
        </>
    )
}
export default Cards;