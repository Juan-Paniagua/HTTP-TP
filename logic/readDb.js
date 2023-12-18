import fs from "node:fs";

export const readDb = () => {
  const productsBuffer = fs.readFileSync("./database/db.json");
  const productsParsed = JSON.parse(productsBuffer.toString());
  return productsParsed;
};