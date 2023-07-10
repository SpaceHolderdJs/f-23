import React, { useMemo, useRef, useState } from "react";
import { Item } from "./Item";
import { Cart } from "./Cart";
import { useFetchData } from "../../hooks/useFetchData";
import { CirclesWithBar } from "react-loader-spinner";

const options = { method: "GET" };

export const Shop = () => {
  const optionsRef = useRef({ method: "GET" });
  const options = useMemo(() => ({method: 'GET'}), []);

  const [fetchedData, isLoading] = useFetchData(
    "https://fakestoreapi.com/products",
    options,
    []
  );
  const { data: items } = fetchedData;

  console.log(items, "ITEMS");

  const [inputValue, setInputValue] = useState("");

  const seachResults = useMemo(
    () =>
      inputValue
        ? items.filter(
            (item) =>
              item.title.toLowerCase().includes(inputValue.toLowerCase()) ||
              item.price === +inputValue
          )
        : [],
    [inputValue, items]
  );

  const onClick = () => {
    optionsRef.current.method = "POST";
    console.log(optionsRef, "REF")
  }

  return (
    <div className="wrapper">
      <Cart>
        <header>
          <h1 onClick={onClick}>Shop</h1>
          <div className="form">
            <input
              type="text"
              placeholder="Search for items"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </div>
        </header>
        <main>
          {isLoading && (
            <div className="loader-wrapper">
              <CirclesWithBar
                height="100"
                width="100"
                color="grey"
                visible={true}
                ariaLabel="circles-with-bar-loading"
              />
            </div>
          )}
          {(inputValue ? seachResults : items).map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </main>
        <footer></footer>
      </Cart>
    </div>
  );
};
