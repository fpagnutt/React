

const Item = ({producto}) => {
  return (
      <div key={producto.id} className="cont">
          <img src="https://picsum.photos/200/300"></img>
          <div>{producto.nombre}</div>
          <div>Precio: ${producto.precio}</div>
          <div>Stock: {producto.stock}</div>
          <button>detalles</button>
      </div>
          
  )
}

export default Item