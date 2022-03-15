const ItemDetail = ({producto}) => {
    return (
        <div key={producto.id} className="cont">
            <img src="https://picsum.photos/200/300"></img>
            <h3>{producto.nombre}</h3>
            <div>Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Accusamus, rem deleniti maiores, ut aspernatur accusantium ex placeat at autem, explicabo eos nisi atque in. Necessitatibus illo cum cumque aut perspiciatis.</div>
            <div>Precio: ${producto.precio}</div>
            <h4>Aprovecha las ultimas {producto.stock} unidades</h4>
            
        </div>
            
    )
  }
export default ItemDetail