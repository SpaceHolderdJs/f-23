import fs from "fs";

export function createJSONFile(fileName, json) {
  fs.writeFileSync(`${fileName}.json`, json);
}

export function createTextFile(fileName, content) {
  fs.writeFileSync(`${fileName}.txt`, content, { encoding: "utf-8" });
}

export function removeTextFile(fileName) {
  fs.unlinkSync(`${fileName}.txt`);
}
