# api-movies-express-js
## Despliegue de la API

### Requisitos previos
1. Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema.
2. Instala [Postman](https://www.postman.com/) o cualquier cliente similar para realizar solicitudes HTTP.

### Pasos para desplegar la API
1. Clona este repositorio:
    ```bash
    git clone https://github.com/tu-usuario/api-movies-express-js.git
    cd api-movies-express-js
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia el servidor:
    ```bash
    npm run dev
    ```

5. La API estará disponible en `http://localhost:3000/api/movies`.

### Uso con Postman
1. Abre Postman y crea una nueva colección.
2. Agrega solicitudes HTTP apuntando a los endpoints de la API, por ejemplo:
    - `GET http://localhost:3000/api/movies` para obtener todas las películas.
    - `POST http://localhost:3000/api/movies` para agregar una nueva película (asegúrate de enviar un cuerpo JSON válido).
3. Personaliza las solicitudes según los endpoints disponibles en la API.
