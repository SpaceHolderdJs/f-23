import React, { useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../contexts/cart.context";

export const Cart = (props) => {
  console.log(props, "PROPS OF CART");
  const {children} = props;

  const [itemsToBuy, setItemsToBuy] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{ itemsToBuy, totalPrice, setItemsToBuy, setTotalPrice }}
    >
        <Modal isOpen={isCartOpen} shouldCloseOnOverlayClick={true} >
            <h1>Modal</h1>
            {
            // render here
            }
        </Modal>
        <button onClick={() => setIsCartOpen(!isCartOpen)}>OPEN MODAL</button>

      {children}
    </CartContext.Provider>
  );
};
