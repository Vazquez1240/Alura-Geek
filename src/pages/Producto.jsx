import { buscar } from "../api/api";
import { useState, useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/stylesheet/Producto.css'
//import CardSimilares from "../Components/CardSimilares/index.jsx";
import Cards from "../Components/Cards";



const Producto = ( {url} ) => {
    const [producto, setProducto] = useState([]);


    const { id } = useParams();

    const navigate = useNavigate()
    

    useEffect(() => {
        buscar(`/Producto/${id}`,setProducto)
    }, [])



    const [productos, setProductos] = useState([])

    useEffect(() => {
        buscar(`/Producto?categoria=${producto.categoria}`,setProductos)
    }, [])

    let contador = 0;

    return (
        <>
        
            <div className="seccion">
                <div className="producto">
                    <div className="image">
                        <img src={producto.image} alt={producto.nombre} />
                    </div>
                    <div className="producto-info">
                        <h2 className="titulo">{producto.nombre}</h2>
                        <p className="precio">${producto.precio}</p>
                        <p className="descripcion">{producto.descripcion}</p>
                    </div>
                </div>
            </div>
            <div className="productos-similares">
                <h2>Productos similares</h2>
                <div className="div-productos">
                        <Cards key={contador += 1} producto={productos} />
                </div>
            </div>
        </>
    )
}


export default Producto;