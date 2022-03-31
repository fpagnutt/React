import {useEffect} from "react"
import {useState} from "react"
import ItemDetail from "./ItemDetail"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"
import {db} from "./firebase"
import {collection, getDoc, doc, query, where, getDocs} from "firebase/firestore"

const ItemDetailContainer = () => {
    const[loading, setLoading] = useState(true)  
    const [producto, setProducto] = useState({})
    const {itemId} = useParams()

    
    
    useEffect(() => {
     // toast.info("Cargando los detalles del producto")
      
      
      const productosCollection = collection(db, "products")
      const filtro = query(productosCollection, where("id", "==", Number(itemId)))
      const pedido = getDocs(filtro)

      pedido
      .then((resultado)=>{ setProducto(resultado.docs.map(doc => doc.data())[0])})
            
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