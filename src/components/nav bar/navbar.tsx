import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import type { RootState } from "../../store/store.ts"; // Adjust the path based on where your store is defined


const navbar: React.FC = () => {
    const cartitems = useSelector((state: RootState) => state.cart.Products);
    return (
        <nav className='bg-gray-600 font-light text-white flex justify-between p-4'>
            <div>

                <Link to="/">Home</Link>

            </div>
            <div>
                <Link to="/cart">Cart</Link>
                <span className='ml-2 bg-red-500 rounded-full px-2 py-1 text-xs font-bold'>{cartitems.length}</span>
            </div>

        </nav>

    );
};
export default navbar;