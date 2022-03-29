import { createContext } from "react";
import { useState } from "react";
export const contexto = createContext()

const {Provider} = contexto


const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState(0)
    
    const addItem = (producto, cantidad) => {
        
        const copiaCarrito = [...carrito]
        const itemAlCarrito = {...producto, cantidad: cantidad}
        
        if(isInCart(producto.id)){
            let index = copiaCarrito.findIndex(item => item.id === producto.id)
            copiaCarrito[index].cantidad += cantidad
            setCarrito(copiaCarrito)
            setCantidad(copiaCarrito[index].cantidad)
            
        }else{
            copiaCarrito.push(itemAlCarrito)
            setCarrito(copiaCarrito)
            setCantidad(copiaCarrito.cantidad)
                     
        }
        
    
    }
    const isInCart = (id)=>{
        return carrito.some(item => item.id === id);
    }

    const removeItem = (id)=>{
        setCarrito(carrito.filter(item => item.id !== id))        
           
    }
    
    const vaciar = ()=>{
        
        setCarrito([])
        setCantidad(0)
    } 

    const calcCantidad = ()=> {
        let cantidad = 0
        carrito.forEach(item => cantidad += item.cantidad)
        return cantidad
    }


    const calcTotal = () => {
        let total = 0
        carrito.forEach(item => total += item.cantidad * item.price)
        return total
    }

    
    const valorDelContexto = 
        {
            carrito: carrito,
            addItem: addItem,
            calcCantidad: calcCantidad,
            calcTotal: calcTotal,
            removeItem: removeItem,
            vaciar: vaciar
            
        }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
    
}


export default MiProvider