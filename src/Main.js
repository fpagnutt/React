import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount"


const Main = () => {
  
  
  return (
    <main>
        <h2>Bienvenidx</h2>
        <h3>Deseamos que nuestro sitio sea de su agrado y tenga una linda experiencia</h3>
        <ItemListContainer greeting={["cliente", "usuario", "vendedor"]}/>
        <ItemCount stock={5} initial={1} onAdd={()=>{}}/>
    </main>
  );
}

export default Main