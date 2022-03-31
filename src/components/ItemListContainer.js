import {useEffect} from "react"
import {useState} from "react"
import { toast } from "react-toastify"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {db} from "./firebase"
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {
  const[loading, setLoading] = useState(true)  
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()
  
    
  useEffect(() => {
    //toast.info("Cargando productos")
    
        
    if(!categoryId){
      const productosCollection = collection(db, "products")
      const consulta = getDocs(productosCollection) 
      consulta
      .then((resultado)=>{
          const arrayResultados = resultado.docs.map((doc)=>{
            return doc.data()
          })
          setProductos(arrayResultados)
      })
      .catch((error) => {
        toast.error("Los productos no pudieron cargarse correctamente")
      })
      .finally(()=>{
        setLoading(false)
      })

    }else{
      const productosCollection = collection(db, "products")
      const filtro = query(productosCollection, where("category", "==", categoryId))
      const pedido = getDocs(filtro)
      pedido
      .then((resultado)=>{
          const arrayResultados = resultado.docs.map((doc)=>{
            return doc.data()
          })
          setProductos(arrayResultados)
      })
      .catch((error) => {
        toast.error("Los productos no pudieron cargarse correctamente")
      })
      .finally(()=>{
        setLoading(false)
      })

      
    } 
     
    },[categoryId]) 

    
  return(
    <>
     { loading ? <h1 id="main">Cargando los productos... Aguarde</h1> : <div id="main"><ItemList productos={productos}/></div> }
    </>
   )
  
  }
 

  export default ItemListContainer;