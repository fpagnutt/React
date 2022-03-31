import { useContext } from "react"
import { contexto } from "../context/CartContext"
import { Link } from "react-router-dom"
import { prettyDOM } from "@testing-library/react"
import {db} from "./firebase"
import {collection, addDoc, serverTimestamp} from "firebase/firestore"
import { toast } from "react-toastify"


const Cart = () => {
  
  const {carrito, calcTotal, removeItem, vaciar} = useContext(contexto)
  
  const finalizar = () => {
    const orden = {
      buyer:{
        nombre: "Francisco",
        telefono: "123456789",
        email: "a@a.com"
        },
      items: carrito,
      date: serverTimestamp(),
      total: calcTotal()
    }

    const ordenesCollection = collection(db, "orders")
    const pedido = addDoc(ordenesCollection, orden)

    pedido
    .then((resultado)=>{
      toast.success("Pedido realizado. Su orden de compra es: " + resultado.id)
      
    })
    .catch(error=>{
      toast.error("El pedido no pudo ser realizado")
    })

  }



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
        <button onClick={finalizar}>FINALIZAR COMPRA</button>
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