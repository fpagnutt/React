import {useEffect} from "react"
import {useState} from "react"
import ItemList from "./ItemList"

let productosIniciales = [
  {
    id:1,
    nombre: "Producto1",
    precio: 15,
    stock: 20
  },
  {
    id:2,
    nombre: "Producto2",
    precio: 10,
    stock: 8   
  },
  {
    id:3,
    nombre: "Producto3",
    precio: 20,
    stock: 14   
  }
]

const ItemListContainer = () => {
  const[loading, setLoading] = useState(true)  
  const [productos, setProductos] = useState([])

  useEffect(() => {
    const pedido = new Promise((res,rej) => {
      setTimeout(()=>{
        res(productosIniciales)
      },2000)
  
    })

    pedido
    .then((resultado)=>{
      setProductos(resultado)
    })
    .catch((error) => {
    
    })
    .finally(()=>{
      setLoading(false)
    })
  },[])

  
  if(loading){
    return <h1>Cargando los productos... Aguarde</h1>
  }else{
    return (
      <div>          
          <ItemList productos={productos}/>
      </div>
      )
  }
  
  }
 

  export default ItemListContainer