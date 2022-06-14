import StoreContext from "./storeContext";
import { useState } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

const GlobalStoreProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "admin", id: 42 });

  const addProdToCart = (prod) => {
    console.log("Global Add Prod", prod);

    let copy = [...cart];
    let found = false;
    for (let i = 0; i < copy.length; i++) {
      let item = copy[i];
      if (item._id === prod._id)
      {
        found = true;
        item.quantity += prod.quantity;
      }
    }

    if (!found) {
      copy.push(prod);
    }

    setCart(copy);
  };

  const removeProdFromCart = (_id) => {
    console.log("Removing from Cart", _id)

    let copy = [...cart];
    for (let i = 0; i < copy.length; i++){
        if (copy[i]._id === _id) {
           copy.splice(i, 1);
           console.log("removed");
        }
        }

    setCart(copy);
};

  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addProdToCart: addProdToCart,
        removeProdFromCart: removeProdFromCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default GlobalStoreProvider;