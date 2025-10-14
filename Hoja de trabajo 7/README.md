Anthony Fabian Ramirez Orellana
Carne: 9490-22-958

Este proyecto consiste en la implementacion de una API REST con autenticacion JWT (JSON Web Tokens) usando Node.js y Express.js. La API permite inicair sesion, generar un token de acceso con duracion limitada y proteger rutas sensibles para que solo usuarios autenticasdos puedan acceder.

Requerimietos del entorno: 
- Node.js v18 o superior
- npm (gesto de paquetes de node)
- Postman o Tunder Client (para pruebas)

Instalacion:
- Clonar el repositorio:
    https://github.com/tony0001234/Desarrollo-Web/tree/7243593d9bdc903d43a75c0b67a132841c05113a/Hoja%20de%20trabajo%207

- Escribir en consola:
    cd Hoja de trabajo 7
    npm install

- Crear archivo .env en la raiz del proyecto
    PORT=3000
    JWT_SECRET=mi_clave_secreta_super_segura
    JWT_EXPIRES_IN=30s

- Iniciar api en consola:
    npm run dev

Pruebas con postman:
| Método     | Ruta         | Descripción                                  |
| ---------- | ------------ | -------------------------------------------- |
| **POST**   | `/login`     | Autentica usuario y genera token JWT         |
| **GET**    | `/users`     | Devuelve todos los usuarios (requiere token) |
| **PUT**    | `/users/:id` | Actualiza usuario (requiere token)           |
| **DELETE** | `/users/:id` | Elimina usuario (requiere token)             |


**nota** Se deben de incluir los token en los encabezados:
    Authorization: Bearer <tu_token_JWT>

link de Render
https://hoja-de-trabajo-7-i3zi.onrender.com