import "./quantitypicker.css";
import { useState } from "react";

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    let value = quantity;
    value = value + 1;
    setQuantity(value); //only make changes with internal variable becuase equations inside a function applicator make it slower.
    props.onChange(value);
  };

  const handleDecrease = () => {
    let value = quantity; //we define qunatity ad value to load use state first and make sure function executes at the sanme speed as the rest of the webpage.

    if (value > 1) {
      value = value - 1;
      setQuantity(value);
    }
    props.onChange(value);
  };

  return (
    <div className="quantity-picker">
      <button className="btn btn-primary btn-sm" onClick={handleDecrease}>
        -
      </button>
      <label>{quantity}</label>
      <button className="btn btn-primary btn-sm" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
