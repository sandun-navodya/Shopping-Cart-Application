import { Route, Routes } from "react-router";
import Navbar from "./components/nav bar/navbar.tsx";
import ProductList from "./components/ProductList.tsx";
import Cart from "./components/cart/cart.tsx";

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

      </Routes>
    </div>


  )
}

export default App
