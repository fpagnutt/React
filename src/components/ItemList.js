import Item from "./Item"

const ItemList = ({productos}) => {
  return (    
    <div id="probando">
        {productos.map((producto) => {
            return <Item producto={producto}/>
        })}
    </div>
    
  )
}

export default ItemList