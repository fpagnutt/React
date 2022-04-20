import { useContext } from "react"
import { contexto } from "../context/CartContext"
import { Link } from "react-router-dom"



const Cart = () => {
  
  const {carrito, calcTotal, removeItem, vaciar} = useContext(contexto)
  
  if(carrito.length > 0){
    return (
      <div id="cartMain">
        <div className="carritoMain">
        {carrito.map((cart) => {
              return (
                  <article key={cart.id} className="cont">
                    <img className="imageItem" src={cart.image}></img>
                    <div className="titleItem">{cart.title}</div>
                    <div>Precio: ${cart.price}</div>
                    <h5>Cantidad: {cart.cantidad}</h5>
                    <button onClick={()=>removeItem(cart.id)} className="btn btn-dark">eliminar</button>
                  </article>  
                 )
          })}
        
        </div> 
        <div className="textoTotal"><div className="contTotal">TOTAL: $ {calcTotal()}</div></div> 
        <div className="paddingTop"></div>
        <div className="botonesFin">
          <Link to="/form" className="btn btn-dark">CONFIRMAR COMPRA</Link>
        </div> 
        <button onClick={vaciar} className="btn btn-dark">VACIAR CARRO</button>
        
      </div>
    )
  }else{
    return (
      <div id="cartMain">
        <div className="textCart">No se ha añadido ningun producto</div>
        <Link to="/" className="linkTo"><button className="btn btn-dark">Volver a la tienda</button></Link>   
      </div>
    )
  }      
    
  }
  

   
export default Cart