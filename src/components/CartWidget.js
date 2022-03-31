import { Link } from "react-router-dom"
import { contexto } from "../context/CartContext"
import { useContext } from "react"


const CartWidget = () => {
  const {calcCantidad, carrito} = useContext(contexto)
  
  return (
    <>
    <Link to="/cart" className="material-icons shopCart">
        shopping_cart 
    </Link>
    {calcCantidad() == 0 ? <div></div> : <div>{calcCantidad()}</div>}
        
    </>
  )
}

export default CartWidget