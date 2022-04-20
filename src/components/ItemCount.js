import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemCount = ({stock, initial, onAdd}) => {
    
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

  return (
    <div>
        <h4>Cantidad: {contador}</h4>
        <button onClick={handleRestar} className="btn btn-outline-dark">-</button> <button onClick={handleSumar} className="btn btn-outline-dark">+</button>
        <div><button onClick={agregarCarrito} className="btn btn-outline-dark">Confirmar cantidad seleccionada</button></div>
    </div>
    )
 
}

export default ItemCount