import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) => {
    
    const [estado, setEstado] = useState(initial)
    const handleRestar = () =>{
      if(estado > initial){
        setEstado(estado - 1)
      }
    }
    const handleSumar = () => {
      if(estado < stock){
        setEstado(estado + 1)
      }
    }
    const agregarCarrito = () =>{
        if(estado <= stock){
            onAdd(estado)
        }     
    }

    
  return (
    <>
        <h1>CONTADOR: {estado}</h1>
        <button onClick={handleRestar}>-</button> <button onClick={handleSumar}>+</button>
        <div><button onClick={agregarCarrito}>Agregar al carrito</button></div>
    </>
  )
}

export default ItemCount