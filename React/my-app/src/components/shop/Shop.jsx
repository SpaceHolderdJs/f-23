import React, { useMemo, useState } from "react";
import { Item } from "./Item";
import { Cart } from "./Cart";
import { useFetchData } from "../../hooks/useFetchData";

const options = { method: "GET" };

export const Shop = () => {
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

  return (
    <div className="wrapper">
      {/* loader starts here */}
      {/* {isLoading && <LoaderComponent />} */}
      <Cart>
        <header>
          <h1>Shop</h1>
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
          {(inputValue ? seachResults : items).map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </main>
        <footer></footer>
      </Cart>
    </div>
  );
};
