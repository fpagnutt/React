import {useEffect} from "react"
import {useState} from "react"
import ItemDetail from "./ItemDetail"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const[loading, setLoading] = useState(true)  
    const [producto, setProducto] = useState({})
    const {itemId} = useParams()

    useEffect(() => {
      toast.info("Cargando los detalles del producto")
         
      fetch(`https://fakestoreapi.com/products/${itemId}`)
      .then((response)=>{
        toast.dismiss()
        return response.json()
      })
      .then((resultado)=>{
        setProducto(resultado)
      })
  
      .catch((error) => {
        toast.error("Los productos no pudieron cargarse correctamente")
      })
      .finally(()=>{
        setLoading(false)
      })
    },[itemId])
  
    
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