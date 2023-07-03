import React, { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: ""
  });

  const fields = [
    {name: "name" ,placeholder: "name", type: "text" },
    {name: "email" ,placeholder: "email", type: "text" },
    {name: "password" ,placeholder: "password", type: "password" },
    {name: "city" ,placeholder: "city", type: "text" },
  ];

  const { email, name, password } = formData;

  console.log(formData, "form data");

  const onInputChange = (key, value) => {
    setFormData((formData) => ({ ...formData, [key]: value }));
  };


  let a = 10;
  let b = 11;

  const fn = (key) => key.toUpperCase();

  //generic keys
  const obj = {
    name: "Igor",
    age: a + b,
    [fn("hello")]: "world"
  }

  console.log(obj, "OBJ");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {fields.map(({ name, type, placeholder }) => (
        <input
          value={formData[name]}
          type={type}
          placeholder={placeholder}
          onChange={(e) => onInputChange(name, e.target.value)}
        />
      ))}

      <button>Submit</button>
    </div>
  );
};
