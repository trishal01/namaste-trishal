import { useSelector, useDispatch } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-bold">Cart Page</h1>
            <div className='w-1/2 mx-auto p-4 border border-gray'>

                <button className='p-2 m-2 bg-black text-white  rounded-lg' onClick={handleClearCart()}>Clear Cart</button>
                {cartItems.length === 0 && <h1> CART IS EMPTY !</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;