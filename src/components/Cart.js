import { useContext } from "react"
import { contexto } from "../context/CartContext"


const Cart = () => {
  
  const {carrito, calcTotal, removeItem} = useContext(contexto)
  

  console.log(carrito)
 
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
                  <button onClick={removeItem}>ELIMINAR</button>
                </article>  
               )
        })}
      
      </div> 
      <div className="paddingTop"><h1>TOTAL: $ {calcTotal()}</h1></div> 
    </div>
  )
}

export default Cart