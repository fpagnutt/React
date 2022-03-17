
import ItemListContainer from "./components/ItemListContainer";
import Carrito from "./components/Carrito";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
      </Routes>
    </main>
  );
}

export default Main