import ItemCount from "./ItemCount"
import Rate from "rc-rate"
import 'rc-rate/assets/index.css';
import Item from "./Item";

const ItemDetail = ({producto}) => {
    return (
        <article key={producto.id} className="cont">
          <img  className="imageItem" src={producto.image}></img>
          <div className="titleItem">{producto.title}</div>
          <div>Precio: ${producto.price}</div>
          <div>Stock: {producto.rating.count}</div>
          <ItemCount stock={producto.rating.count} initial={1} onAdd={()=>{}}/>
          <Rate count={5} value={producto.rating.rate}/>
        </article>
                  
    )
  }
export default ItemDetail