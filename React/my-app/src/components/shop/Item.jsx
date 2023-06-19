import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

//Props

export const Item = (props) => {
  const { title, price, image, description } = props.item;
  const [quantity, setQuantity] = useState(1);

  const { itemsToBuy, totalPrice, setItemsToBuy, setTotalPrice } =
    useContext(CartContext);

  const onAddToCartClick = (item) => {
    const newItems = [];

    for (let i = 0; i < quantity; i++) {
      newItems.push(item);
    }

    setItemsToBuy([...itemsToBuy, ...newItems]);
  };

  console.log(itemsToBuy, "!!!");

  return (
    <div className="item">
      <h4>{title}</h4>
      <h5>{price}$</h5>
      <p>{description.split(" ").slice(0, 40).join(" ")} ...</p>
      <img src={image} alt={title} />
      <div className="item-footer">
        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />
        <button onClick={() => onAddToCartClick(props.item)}>
          Add to cart for: <span>{price * quantity}</span>$
        </button>
      </div>
    </div>
  );
};
