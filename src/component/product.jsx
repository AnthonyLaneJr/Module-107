import "./product.css";
import QuantityPicker from "./quantitypicker";
import { useState, useContext } from "react";
import StoreContext from "../context/storeContext";

// this notation is better that nomal js function designation-this will prevent constructor issues in pages.
// console.log(`the parameter value is: ${props.title}`);
const Product = (props) => {
  let [quantity, setQuantity] = useState(1);
  let addProdToCart = useContext(StoreContext).addProdToCart;

  let onQuantityChange = (value) => {
    setQuantity(value);
  };

  const CalculateTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  const addToCart = () => {
    let prodForCart = {...props.data, quantity: quantity};
    console.log(quantity, props.data.title, prodForCart);
    addProdToCart(prodForCart);

  };

  return (
    <div className="product">
      <img
        className="product-img"
        src={"/images/" + props.data.image}
        alt="Product Image"
      ></img>
      <h1>{props.data.title}</h1>
      <h4>${props.data.price} USD</h4>
      <p>
        Sample Product Description. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Fugiat illo eligendi quae, dicta ipsa dolorum ab
        cupiditate facere nemo expedita magnam, pariatur perspiciatis corrupti!
        Delectus numquam suscipit necessitatibus iusto aut.
      </p>
      <label>Total: ${CalculateTotal()}</label>
      <br></br>
      <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
      <br></br>
      <button onClick={addToCart} className="btn btn-secondary btn-sm add-total"> Add </button>
    </div>
  );
};

export default Product;
