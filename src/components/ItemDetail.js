import ItemCount from "./ItemCount"
import Rate from "rc-rate"
import 'rc-rate/assets/index.css';
import Item from "./Item";

const ItemDetail = ({producto}) => {
    return (
        <div key={producto.id} id="main">
          
          <div className="contItemDetail">
            <img  className="imageItemDetail" src={producto.image}></img>
            <div className="titleItem"><h2>{producto.title}</h2></div>
            <h5>{producto.description}</h5>
            <Rate count={5} value={producto.rating.rate}/>
            <div className="paddingTop"><h4>Precio: ${producto.price}</h4></div>
            <div>Stock: {producto.rating.count}</div>
            <div className="paddingTop"></div>
            <ItemCount stock={producto.rating.count} initial={1} onAdd={()=>{}}/>
            
          </div>
          
        </div>
                  
    )
  }
export default ItemDetail