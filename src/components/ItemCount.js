import { useState } from "react"


const ItemCount = ({stock, initial, onAdd, cantidad}) => {
    
    const [contador, setContador] = useState(initial)
    const handleRestar = () =>{
      if(contador > initial){
        setContador(contador - 1)
      }
    }
    const handleSumar = () => {
      if(contador < stock){
        setContador(contador + 1)
      }
    }
    const agregarCarrito = () =>{
        if(contador <= stock){
            onAdd(contador)
        }     
    }

    if(cantidad === 0){
      return (
        <div>
            <h4>CONTADOR: {contador}</h4>
            <button onClick={handleRestar}>-</button> <button onClick={handleSumar}>+</button>
            <div><button onClick={agregarCarrito}>Agregar al carrito</button></div>
        </div>
      )
    }else{
      return (
        <div className="noMuestra">
            <h4>CONTADOR: {contador}</h4>
            <button onClick={handleRestar}>-</button> <button onClick={handleSumar}>+</button>
            <div><button onClick={agregarCarrito}>Agregar al carrito</button></div>
        </div>
      )
    }
  
}

export default ItemCount