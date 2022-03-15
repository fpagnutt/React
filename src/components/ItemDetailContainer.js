import {useEffect} from "react"
import {useState} from "react"
import ItemDetail from "./ItemDetail"


let item = {id:2,
    nombre: "Producto2",
    precio: 10,
    stock: 8}

const ItemDetailContainer = () => {
    const[loading, setLoading] = useState(true)  
    const [producto, setProducto] = useState({})
  
    useEffect(() => {
      const pedido = new Promise((res,rej) => {
        setTimeout(()=>{
          res(item)
        },2000)
    
      })
  
      pedido
      .then((resultado)=>{
        setProducto(resultado)
      })
      .catch((error) => {
      
      })
      .finally(()=>{
        setLoading(false)
      })
    },[])
  
    
    if(loading){
      return <h1></h1>
    }else{
      return (
        <div id="main">
                   
          <ItemDetail producto={producto}/>
        </div>
        )
    }
}

export default ItemDetailContainer