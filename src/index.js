
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

else if (request.url !== "/" || request.url !== "products") {
    response.writeHead(200, {"content-type": "text"})
    response.end("Error de peticion");
}});

serverHttp.listen(port, () => {
console.log(`Servidor escuchando en http://localhost:${port}/`);
});