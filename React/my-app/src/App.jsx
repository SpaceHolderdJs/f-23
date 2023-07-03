import "./App.css";
import { useCallback, useMemo, useState } from "react";
import { Counter } from "./components/Counter";
import { Shop } from "./components/shop/Shop";
import { Form } from "./components/shop/Form";

function App() {
  // light operation
  const [a, setA] = useState(10);
  const [b, setB] = useState(5);
  //complicated operation
  // const data = useMemo(
  //   () => new Array(3000).fill("hello").filter((val) => {
  //     console.log("Filter worked");
  //     return val.includes("val")
  //   }),
  //   []
  // );
  const data = new Array(3000).fill("hello").filter((val) => {
      console.log("Filter worked");
      return val.includes("val")
    })

  console.log(a, "A");
  console.log(b, "B");
  console.log(data, "DATA");
  return (
    <div id="App" className="App">
      <button onClick={() => setA(Math.floor(Math.random() * 15))}>change a </button>
      <button onClick={() => setB(Math.floor(Math.random() * 15))}>change b </button>
      {/* <Counter />  */}
      <Shop />
      {/* <Form /> */}
    </div>
  );
}

export default App;
