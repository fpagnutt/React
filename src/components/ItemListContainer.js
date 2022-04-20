import {useEffect} from "react"
import {useState} from "react"
import {toast} from "react-toastify"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"
import {db} from "./firebase"
import {collection, getDocs, query, where} from "firebase/firestore"

const ItemListContainer = () => {
  const[loading, setLoading] = useState(true)  
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()
  const productosCollection = collection(db, "products")
  
  useEffect(() => {
    const getProductos = (produc) => {
    
      const productos = getDocs(produc)
      productos
      .then(resultado=>{
        const arrayResultados = resultado.docs.map((doc)=>{
          return doc.data()
        })
        setProductos(arrayResultados)
      })
      .catch(error=>{
        toast.error("No se pudo cargar la lista de productos")
      })
      .finally(()=>{
        setLoading(false)
      })
    }
    
    if(!categoryId){
      getProductos(productosCollection)
    }else{
      const filtro = query(productosCollection, where("category", "==", categoryId))
      getProductos(filtro)
    } 
  },[categoryId]) 

  return(
    <>
     { loading ? <div id="cartMain"><div className="textCart">Cargando los productos... Aguarde</div></div> : <div id="main"><ItemList productos={productos}/></div> }
    </>
  )
  
  }
 

export default ItemListContainer;