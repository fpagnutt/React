import { Link } from "react-router-dom"
import { contexto } from "../context/CartContext"
import { useContext } from "react"


const CartWidget = () => {
  const {calcCantidad} = useContext(contexto)
  
  return (
    <>
    <Link to="/cart" className="material-icons shopCart">
        shopping_cart 
    </Link>
    {calcCantidad() == 0 ? null : <div className="colorPink">{calcCantidad()}</div>}
        
    </>
  )
}

export default CartWidget