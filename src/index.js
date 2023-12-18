
import http from "node:http";
import dotenv from "dotenv";
import fs from "node:fs";
import { readDb } from "../logic/readDb.js";
dotenv.config();

const port = process.env.PORT;

console.log(port);

const serverHttp = http.createServer((request, response) => {

if(request.method === "GET" && request.url === "/") {
    const responseServer = {
    status: 200,
    app: "http-server-utn",
    routes: {
        index: "/",
        getProducts : "/products",
        addProducts: "/products",
    }
}
    response.writeHead(200, {"content-type": "application/json"})
    response.end(JSON.stringify(responseServer));
} 

else if (request.method === "GET" && request.url === "/products"){
    const list = readDb()
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(list));
} 

else if (request.method === "POST" && request.url === "/products") {
    let body = "";

    request.on("data", (chunk) => {
        body += chunk;
    });

    request.on("end", () => {
        try {
            const products = readDb();
            const productToAdd = JSON.parse(body);

            const existingProduct = products.find(
                existingProduct => existingProduct.name.toLowerCase() === productToAdd.name.toLowerCase()
            );

            if (existingProduct) {
                response.statusCode = 400; 
                response.end("Error: Product with the same name already exists");
                return;
            }

            const latestId = products.length > 0 ? Math.max(...products.map(product => product.id)) : 0;
            productToAdd.id = latestId + 1;

            const requiredFields = ["name", "class", "price", "prepTime", "delivery", "daysSpecial"];
            const missingFields = requiredFields.filter(field => !(field in productToAdd));

            if (missingFields.length > 0) {
                response.statusCode = 400; 
                response.end(`Error: Missing fields - ${missingFields.join(", ")}`);
                return;
            }

            products.push(productToAdd);

            fs.writeFileSync("./database/db.json", JSON.stringify(products));

            response.end("Product added successfully");
        } catch (error) {
            console.error("Error", error);
            response.statusCode = 400; 
            response.end("Error adding the new product");
        }
    });
}

else if (request.url !== "/" || request.url !== "products") {
    response.writeHead(200, {"content-type": "text"})
    response.end("petition error");
}});

serverHttp.listen(port, () => {
console.log(`Server listening on http://localhost:${port}/`);
});
