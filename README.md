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
Código de estado 400 en caso de error
Tipo de contenido: text

- **Otras Rutas**
Cualquier ruta que no sea / o /products devuelve un mensaje de error.

- **Ejecución del Servidor**
El servidor se inicia escuchando en el puerto configurado. Por favor antes de montar el servidor, configure el archivo .env antes de montar el servidor

