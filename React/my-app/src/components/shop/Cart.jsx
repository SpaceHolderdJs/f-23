import React, { useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/cart.context";
import { Item } from "./Item";

export const Cart = (props) => {
  console.log(props, "PROPS OF CART");
  const { children } = props;

  const [itemsToBuy, setItemsToBuy] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const onToggleModal = () => setIsCartOpen(!isCartOpen);

  const changeItemQuantity = (item, quantity) => {
    const clearedItems = itemsToBuy.filter(
      (itemToRemove) => itemToRemove.id !== item.id
    );

    for (let i = 0; i < quantity; i++) {
      clearedItems.push(item);
    }

    setItemsToBuy(clearedItems);
  };

  const recalculateTotalPrice = (items) => {
    const totalCalculatedPrice = items.reduce(
      (acc, item) => (acc += item.price),
      0
    );
    setTotalPrice(totalCalculatedPrice);
    return totalCalculatedPrice;
  };

  const generateCartItems = (items) => {
    // [{item: {...item}, quantity: 2}, {{item: {...item}, quantity: 1}}]

    const mappedItems = items.reduce((acc, item) => {
      // acc[item.id] = {
      //   item,
      //   quantity: items.filter((findingItem) => item.id === findingItem.id)
      //     .length,
      // };

      if (!acc[item.id]) {
        acc[item.id] = {
          item,
          quantity: 1,
        };
      } else {
        acc[item.id].quantity++;
      }

      return acc;
    }, {});

    console.log(mappedItems, "mappedItems");

    return Object.values(mappedItems);
  };

  const resultOfGroppedItems = generateCartItems(itemsToBuy);

  console.log(resultOfGroppedItems, "resultOfGroppedItems");

  return (
    <CartContext.Provider
      value={{
        itemsToBuy,
        totalPrice,
        setItemsToBuy,
        setTotalPrice,
        recalculateTotalPrice,
        changeItemQuantity,
      }}
    >
      <Modal
        className="cart"
        appElement={document.getElementById("App")}
        isOpen={isCartOpen}
        shouldCloseOnOverlayClick={true}
      >
        <div className="cart-header">
          <h1>Cart</h1>
          <button onClick={onToggleModal}>Close</button>
        </div>
        {
          // render here
          resultOfGroppedItems.map(({ item, quantity }) => (
            <Item item={item} isCartItem={true} cartQuantity={quantity} />
          ))
        }
        <div className="cart-footer">
          <h4>Total: {totalPrice} $</h4>
          <button className="purchase">Purchase</button>
        </div>
      </Modal>
      <button onClick={onToggleModal}>OPEN MODAL</button>

      {children}
    </CartContext.Provider>
  );
};
