import React from "react";


import { products } from "../Data/Products.ts";
import Product from "./product.tsx";
import type { Iproduct } from "../types/products";
const ProductList: React.FC = () => {
  return (
    <div className={"max-w-7xl max-auto px-5 py-8"}>
      <h1 className={"font-6xl font-bold text-center"}>Products</h1>
      <div className={"grid grid-cols-3 gap-6"}>
        {products.map((product:Iproduct) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
