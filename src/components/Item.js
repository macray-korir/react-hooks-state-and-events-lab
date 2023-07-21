import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false); // Step 1: Initialize the state for cart status

  const handleButtonClick = () => {
    setInCart((prevStatus) => !prevStatus); // Step 2: Toggle the state when the button is clicked
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleButtonClick}>
        {inCart ? "Remove From Cart" : "Add to Cart"} {}  
      </button>
    </li>
  );
}

export default Item;
