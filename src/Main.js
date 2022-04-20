import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart";
import Form from "./components/Form";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </main>
  );
}

export default Main