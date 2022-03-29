import { useContext } from "react"
import { contexto } from "../context/CartContext"
import { Link } from "react-router-dom"
import { prettyDOM } from "@testing-library/react"

const Cart = () => {
  
  const {carrito, calcTotal, removeItem, vaciar} = useContext(contexto)
  
  if(carrito.length > 0){
    return (
      <div id="main">
        <div className="carritoMain">
        {carrito.map((cart) => {
              return (
                  <article key={cart.id} className="cont">
                    <img  className="imageItem" src={cart.image}></img>
                    <div className="titleItem">{cart.title}</div>
                    <div>Precio: ${cart.price}</div>
                    <h3>Cantidad: {cart.cantidad}</h3>
                    <button onClick={()=>removeItem(cart.id)}>ELIMINAR</button>
                  </article>  
                 )
          })}
        
        </div> 
        <div className="paddingTop"><h1>TOTAL: $ {calcTotal()}</h1></div> 
        <button onClick={vaciar}>VACIAR CARRO</button>
      </div>
    )
  }else{
    return (
      <div id="main">
        <h1>No hay productos en el carrito</h1> 
        <Link to="/">Volver a la tienda</Link>   
      </div>
    )
  }      
    
  }
  

   
export default Cart