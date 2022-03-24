import ItemCount from "./ItemCount"
import Rate from "rc-rate"
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
      <div key={producto.id} id="main">
        <img  className="imageItemDetail" src={producto.image}></img>
        <div className="titleItem"><h2>{producto.title}</h2></div>
        <h5>{producto.description}</h5>
        <div className="paddingTop"><h4>Precio: ${producto.price}</h4></div>
        <div>Stock: {producto.rating.count}</div>
        <div className="paddingTop"></div>
        {cantidad === 0 ? <ItemCount stock={producto.rating.count} initial={1} onAdd={onAdd}/> : <NavLink to="/cart" >Terminar compra</NavLink>}
        
      </div>
                  
    )
  }
export default ItemDetail