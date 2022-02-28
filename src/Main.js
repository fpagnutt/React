import ItemListContainer from "./components/ItemListContainer";

const Main = () => {
  
  return (
    <main>
        <h2>Bienvenidx</h2>
        <h3>Deseamos que nuestro sitio sea de su agrado y tenga una linda experiencia</h3>
        <ItemListContainer greeting={["cliente", "usuario", "vendedor"]}/>
    </main>
  );
}

export default Main;
