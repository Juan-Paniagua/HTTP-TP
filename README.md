# HTTP Server Documentation
This code implements a basic HTTP server using Node.js. The server responds to different routes and HTTP methods to provide information about the application and handle product-related operations.

## Config
- **Dependencies:**

- `node:crypto`: Node.js module for cryptographic operations.
- `node:http`: Node.js module for creating HTTP servers.
- `dotenv`: Module for loading environment variables from a .env file.
- `node:fs`: Node.js module for file system operations.
- `../logic/readDb.js`: Custom module for reading the database.

**Environment Variables Configuration:**

The .env file is used to configure the server port. An example of the required fields is provided in the .env.example file.

## Supported Routes and Methods
- **Default Route:**
  HTTP Method: GET
  Description: Provides basic information about the application and its routes.
  Response:
  Status Code 200
  Content Type: application/json

- **Route: /products**
  HTTP Method: GET
  Description: Retrieves the list of products from the database.
  Response:
  Status Code 200
  Content Type: application/json

- **Route: /products**
  HTTP Method: POST
  Description: Adds a product to the database.
  Input Data: JSON in the request body.
  Response:
    Status Code 200 if successfully added
    Status Code 400 in case of error.
    This error may be caused by the following cases:
      - The object already exists in the DB ("Error: Product with the same name already exists")
      - Missing fields in the provided object ("Error: Missing fields")
  Content Type: text

**Other Routes**
Any route other than / or /products returns an error message.

## **Server Execution**
The server is started listening on the configured port. Before starting the server, please configure the .env file. The server is already set up to watch for code updates. To take advantage of this feature, use the "npm run dev" command.

---------------------

# Documentación del Servidor HTTP

Este código implementa un servidor HTTP básico utilizando Node.js. El servidor responde a diferentes rutas y métodos HTTP para proporcionar información sobre la aplicación y manejar operaciones relacionadas con productos.

## Configuración

- **Dependencias:**
  - `node:crypto`: Módulo de Node.js para operaciones criptográficas.
  - `node:http`: Módulo de Node.js para la creación de servidores HTTP.
  - `dotenv`: Módulo para cargar variables de entorno desde un archivo `.env`.
  - `node:fs`: Módulo de Node.js para realizar operaciones de sistema de archivos.
  - `../logic/readDb.js`: Módulo personalizado para leer la base de datos.

- **Configuración de Variables de Entorno:**
  - Se utiliza el archivo `.env` para configurar el puerto del servidor. Un ejemplo de los campos necesarios se encuentra en el archivo .env.example

## Rutas y Métodos Soportados

- **Ruta default:**
    Método HTTP: GET
    Descripción: Proporciona información básica sobre la aplicación y sus rutas.
    Respuesta:
    Código de estado 200
    Tipo de contenido: application/json

- **Ruta: /products**
  Método HTTP: GET
  Descripción: Obtiene la lista de productos desde la base de datos.
  Respuesta:
  Código de estado 200
  Tipo de contenido: application/json

- **Ruta: /products**
  Método HTTP: POST
  Descripción: Agrega un producto a la base de datos.
  Datos de Entrada: JSON en el cuerpo de la solicitud.
  Respuesta:
    Código de estado 200 si se agrega con éxito
    Código de estado 400 en caso de error. 
    Este error puede ser causado por los siguientes casos:
      - El objeto ya existe en la DB("Error: Product with the same name already exists")
      - Faltan campos en el objeto proporcionado ("Error: Missing fields")
  Tipo de contenido: text

- **Otras Rutas**
Cualquier ruta que no sea / o /products devuelve un mensaje de error.

## **Ejecución del Servidor**
El servidor se inicia escuchando en el puerto configurado. Por favor antes de montar el servidor, configure el archivo .env antes de montar el servidor. El servidor ya viene configurado para estar atento a updates de codigo. Para aprovechar esta funcion, usar el comando "NPM run dev"