import {Route, Routes} from "react-router";

import ProductList from "./components/ProductList.tsx";


const App=()=> {

  return (

    <Routes>
    <Route path="/about" element={<ProductList/>}></Route>
    </Routes>

  )
}

export default App
