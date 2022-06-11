import StoreContext from "./storeContext";
import { useState } from 'react';

const GlobalStoreProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "admin", id: 42 })

    const addProdToCart = (prod) => {
        console.log("Global Add Prod", prod);
        
        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    };

    const removeProdFromCart = () => {
        console.log('Global Remove Prod');
    };

    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
        }}>
            {props.children}
        </StoreContext.Provider>
    )

};

export default GlobalStoreProvider;