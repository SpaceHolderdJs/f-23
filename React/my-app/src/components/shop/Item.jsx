import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

//Props

export const Item = (props) => {
  const { title, price, image, description } = props.item;
  const { isCartItem = false, cartQuantity = 1 } = props;

  const [quantity, setQuantity] = useState(cartQuantity);

  const { itemsToBuy, setCartData, changeItemQuantityAndPrice } =
    useContext(CartContext);

  const onInputChange = (event) => {
    setQuantity(event.target.value);

    if (isCartItem) {
      changeItemQuantityAndPrice(props.item, event.target.value);
    }
  };

  const onAddToCartClick = (item) => {
    const newItems = [];

    for (let i = 0; i < quantity; i++) {
      newItems.push(item);
    }

    const updatedItems = [...itemsToBuy, ...newItems];

    // imutable !!!
    setCartData({
      itemsToBuy: updatedItems,
      totalPrice: updatedItems.reduce((acc, item) => acc += item.price, 0),
    });

  };

  return (
    <div className="item">
      <h4>{title}</h4>
      <h5>{price}$</h5>
      <p>{description.split(" ").slice(0, 40).join(" ")} ...</p>
      <img src={image} alt={title} />
      <div className="item-footer">
        <input type="number" value={quantity} onChange={onInputChange} />
        {!isCartItem ? (
          <button onClick={() => onAddToCartClick(props.item)}>
            Add to cart for: <span>{price * quantity}</span>$
          </button>
        ) : (
          <span>{(price * quantity).toFixed(2)} $</span>
        )}
      </div>
    </div>
  );
};
