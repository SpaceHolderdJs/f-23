import React, { useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/cart.context";
import { Item } from "./Item";
import { BsCart4 } from "react-icons/bs";
import { SlClose } from "react-icons/sl";
import { useLocalStorageData } from "../../hooks/useLocalStorageData";

export const Cart = (props) => {
  const { children } = props;

  const [cartData, setCartData] = useLocalStorageData("cartData", {
    itemsToBuy: [],
    totalPrice: 0,
  });
  
  const { itemsToBuy, totalPrice } = cartData;

  const [isCartOpen, setIsCartOpen] = useState(false);

  const onToggleModal = () => setIsCartOpen(!isCartOpen);

  const changeItemQuantityAndPrice = (item, quantity) => {
    const clearedItems = itemsToBuy.filter(
      (itemToRemove) => itemToRemove.id !== item.id
    );

    for (let i = 0; i < quantity; i++) {
      clearedItems.push(item);
    }

    const totalCalculatedPrice = clearedItems.reduce(
      (acc, item) => (acc += item.price),
      0
    );

    setCartData({
      itemsToBuy: clearedItems,
      totalPrice: totalCalculatedPrice,
    });
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

  const performPurchase = async () => {
    const data = await new Promise((res) => {
      setTimeout(() => res(cartData), 1500);
    });

    console.log(data, "PURCHASE");
    return data;
  };

  const resultOfGroppedItems = generateCartItems(itemsToBuy);

  return (
    <CartContext.Provider
      value={{
        itemsToBuy,
        totalPrice,
        setCartData,
        changeItemQuantityAndPrice,
      }}
    >
      <h1>{cartData.name}</h1>
      <Modal
        className="cart"
        appElement={document.getElementById("App")}
        isOpen={isCartOpen}
        shouldCloseOnOverlayClick={true}
      >
        <div className="cart-header">
          <h1>Cart</h1>
          <SlClose className="btn" size={20} onClick={onToggleModal} />
        </div>
        {!resultOfGroppedItems.length && (
          <h3 style={{ textAlign: "center" }}>Cart is empty</h3>
        )}
        {
          // render here
          resultOfGroppedItems.map(({ item, quantity }) => (
            <Item
              key={item.id}
              item={item}
              isCartItem={true}
              cartQuantity={quantity}
            />
          ))
        }
        <div className="cart-footer">
          <h4>Total: {totalPrice.toFixed(2)} $</h4>
          <button className="purchase" onClick={performPurchase}>
            Purchase
          </button>
        </div>
      </Modal>
      <button className="cart-button btn" onClick={onToggleModal}>
        <BsCart4 size={20} />
      </button>

      {children}
    </CartContext.Provider>
  );
};
