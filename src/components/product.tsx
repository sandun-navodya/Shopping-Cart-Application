import React from "react";
import type { Iproductprops } from "../types/products";
import { addtocart } from "../store/cartSlice";
import { useDispatch } from "react-redux";



const product:React.FC<Iproductprops> = ({product}) => {

  const dispatch = useDispatch();

  const handleaddtocart = () => {

    dispatch(addtocart(product));

  }

  return (

    

      <div
        className={"border rounded-lg border-gray-400 shadow p-4"}
        key={product.id}
      >
        <h1>{product.name}</h1>
        <h1 className={"font-medium text-red-400"}>${product.price}</h1>
        <h1 className={"font-medium text-green-700"}>Quantity: {product.qty}</h1>
        <button onClick={handleaddtocart} type="button"
          className={
            "bg-blue-300 px-4 rounded-3xl font-medium hover:shadow-lg"
          }
        >
          Add to cart
        </button>
      </div>

  );
};

export default product;