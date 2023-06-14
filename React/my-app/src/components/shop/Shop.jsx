import React, { useState, useEffect } from "react";

export const Shop = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  //   const [searchResults, setSearchResults] = useState([]);
  const seachResults = inputValue
    ? items.filter((item) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    : [];

  useEffect(() => {
    console.log("First render");

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
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
          <div>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
};
