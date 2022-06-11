import './cart.css'
import { useContext } from 'react';
import StoreContext from '../context/storeContext';
import Product from './product';


const Cart = () =>{
    let cart = useContext(StoreContext).cart

    return (
        <div className="cart">
        <h3>Your Cart currently contains {cart.length} items.</h3>
            <ul>
            {cart.map((prod) => <li key={prod._id}>{'$'+prod.price+', '+prod.title}</li>)};
            </ul>

        <h6>Continue to Checkout</h6>
        <button className='btn btn-secondary'></button>
        </div>
    )
}

export default Cart;