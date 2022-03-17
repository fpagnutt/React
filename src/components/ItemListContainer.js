import {useEffect} from "react"
import {useState} from "react"
import { toast } from "react-toastify"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
  const[loading, setLoading] = useState(true)  
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()
  
    
  useEffect(() => {
    toast.info("Cargando productos")
     
    fetch('https://fakestoreapi.com/products')
    .then((response)=>{
      toast.dismiss()
      return response.json()
    })
    .then((respuesta)=>{
      const catalogoId = categoryId ? respuesta.filter((item) => item.category === categoryId) : respuesta
      setProductos(catalogoId)
      console.log(respuesta)  
            
    })
        
    .catch((error) => {
      toast.error("Los productos no pudieron cargarse correctamente")
    })

    .finally(()=>{
      setLoading(false)
    })
  },[categoryId])

    

  if(loading){
    return <h1 id="main">Cargando los productos... Aguarde</h1>
  }else{
    return (
      <div id="main">
        <ItemList productos={productos}/>
      </div>
      )
    }
  }
 

  export default ItemListContainer