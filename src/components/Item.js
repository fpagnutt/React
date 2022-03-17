import { Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
      <article key={producto.id} className="cont">
        <img  className="imageItem" src={producto.image}></img>
        <div className="titleItem">{producto.title}</div>
        <div>Precio: ${producto.price}</div>
        <div>Stock: {producto.rating.count}</div>
        <Link to={`/item/${producto.id}`}>detalles</Link>
      </article>     
  )
}

export default Item