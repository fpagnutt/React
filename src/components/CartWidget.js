import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to="/carrito" className="material-icons shopCart">
        shopping_cart
    </Link>
  )
}

export default CartWidget