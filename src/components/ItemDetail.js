import ItemCount from "./ItemCount"
import Rate from "rc-rate";
import 'rc-rate/assets/index.css';
import React from "react"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import {contexto} from "../context/CartContext"


const ItemDetail = ({producto}) => {

  const[cantidad, setCantidad] = useState(0)
  const {addItem} = useContext(contexto)
  
  const onAdd = (cantidadSeleccionada)=>{
    setCantidad(cantidad + cantidadSeleccionada)
    addItem(producto, cantidadSeleccionada)
    
  }

  
  return (
    <div key={producto.id} id="detail">
      <img  className="imageItemDetail" src={producto.image}></img>
      <div className="estiloDetail">  
        <div className="titleItem paddingLeft"><h2>{producto.title}</h2></div>
        <Rate count={5} value={producto.rating.rate}/>
        <div className="paddingTop paddingLeft">{producto.description}</div>
        <div className="paddingTop"><h2>Precio: ${producto.price}</h2></div>
        <div className="imgPagos"><img src="https://fpagnutt.github.io/Js/Clase%202/img/pagos.png"></img></div>
        <div className="finalizarCompra">{cantidad === 0 ? <ItemCount stock={producto.rating.count} initial={1} onAdd={onAdd}/> : <NavLink to="/cart"><div className="linkTo">Ir al carrito</div></NavLink>}</div>
      </div>  
    </div>
  )
}
export default ItemDetail