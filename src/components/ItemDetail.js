import ItemCount from "./ItemCount"
import Rate from "rc-rate"
import 'rc-rate/assets/index.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";


const ItemDetail = ({producto}) => {

  const[cantidad, setCantidad] = useState(0)

  const onAdd = (cantidadSeleccionada)=>{
    console.log(cantidadSeleccionada)
    setCantidad(cantidadSeleccionada)
    
  }

  
    return (
      <div key={producto.id} id="main">
        <img  className="imageItemDetail" src={producto.image}></img>
        <div className="titleItem"><h2>{producto.title}</h2></div>
        <h5>{producto.description}</h5>
        <Rate count={5} value={producto.rating.rate}/>
        <div className="paddingTop"><h4>Precio: ${producto.price}</h4></div>
        <div>Stock: {producto.rating.count}</div>
        <div className="paddingTop"></div>
        <ItemCount stock={producto.rating.count} initial={1} onAdd={onAdd} cantidad={cantidad}/>
        <NavLink to="/carrito">Terminar compra</NavLink>
      </div>
                  
    )
  }
export default ItemDetail