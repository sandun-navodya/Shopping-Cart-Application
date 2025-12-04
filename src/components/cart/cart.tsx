import React from 'react'
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { useDispatch } from 'react-redux';
import { removefromcart } from '../../store/cartSlice';


export const cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartitems = useSelector((state: RootState) => state.cart.Products);
  console.log(cartitems);

  const removeitem = (selecteditem: number) => {
    dispatch(removefromcart({ id: selecteditem }));
  }
  
  return (
    <div className='max-w-7xl max-auto px-5 py-8'>
      <h1 className='text-3xl font-bold'>Cart Items</h1>
      {cartitems.length === 0 ? (
        <p className='text-xl mt-4'>Your cart is empty.</p>
      ) : (
        <div className='flex-1'>
          {cartitems.map((item) => (
            <div key={item.id} className='border p-4 my-4 rounded-lg shadow-md'>
              <h1 className='border-b border-gray-300 py-4'>
                {item.name}
              </h1>
              <p >
                {`Price: $${item.price}`}
                <br />
                {`quantity: ${item.new_qty}`}
              </p>


              <button type='button' onClick={() => removeitem(item.id)} className='mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
                Remove from Cart
              </button>
            </div>



          ))}
        </div>
      )}
    </div>
  );
};

export default cart;