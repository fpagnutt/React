import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
      <article key={producto.id} className="cont">
        <img  className="imageItem" src={producto.image}></img>
        <div className="titleItem"><h4>{producto.title}</h4></div>
        <div>Precio: ${producto.price}</div>
        
        <Link to={`/item/${producto.id}`} className="linkTo">detalles</Link>
      </article>     
  )
}

export default Item