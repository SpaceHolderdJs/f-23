import fetch from "node-fetch";

export async function dataOperations(dataType, callback) {
  const jsonData = await fetch(
    `https://jsonplaceholder.typicode.com/${dataType}`
  );
  const data = await jsonData.json();
  console.log(data, "DATA");

  callback(data);
}
