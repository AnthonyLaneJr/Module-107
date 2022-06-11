import { createContext } from "react";

// context: dsecribes the gloabl data
// describes teh data structure
//promise
//does not haev any implementation- only holds data

let StoreContext = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {},
});

export default StoreContext;