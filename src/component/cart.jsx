import './cart.css'
import { useContext } from 'react';
import StoreContext from '../context/storeContext';
import Product from './product';


const Cart = () =>{
    let cart = useContext(StoreContext).cart
    const removeProdFromCart = useContext(StoreContext).removeProdFromCart;
    
    const deleteProd = (props) => {
        removeProdFromCart(props._id)
    }

    const getNumItems = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++){
          let prod = cart[i];
          total += prod.quantity;
        }
        return total;
      }

    const getTotal = () =>{
        let total = 0;
        for(let i=0; i < cart.length; i++){
            let prod = cart[i];
            total += prod.price * prod.quantity;
        }
        return total.toFixed(2);
    }

    const CalculateTotal = (x) => {
        let total = x.price * x.quantity;
        return total.toFixed(2);
    };
    
    return (
        <div className="cart">
        <h3>Your Cart currently contains {getNumItems()} items.</h3>
        <div className="cart-main">
            <ul>
                {cart.map((prod) => (
                    <li key={prod._id}>
                    
                        <img className='cart-image' src={'/images/' + prod.image} alt="Missing URL" />
                        <h4>{prod.title}</h4>
                        <h5>{prod.category}</h5>
                        <label>Price: {prod.price}S</label>
                        <label> Quantity: {prod.quantity}</label>
                        <label>Total: {CalculateTotal(prod)}$</label>
                        <button onClick={() => deleteProd(prod)} className='remove'>Remove Item</button>
                    
                    </li>
                ))}
            </ul>
            <div className="add-on">
                <h3>Your total:</h3>
                <h2>{getTotal()}</h2>
            </div>
        </div>
        <h6>Continue to Checkout</h6>
        <button className='btn btn-secondary'></button>
        </div>
    )
}

export default Cart;