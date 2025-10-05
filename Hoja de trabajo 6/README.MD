Este proyecto consiste en el desarrollo de una API RESTful implementada con Node.js y el framework Express, cuyo objetivo principal es gestionar información de usuarios dentro de un sistema. La API permite realizar las operaciones básicas de un CRUD: crear, listar, actualizar y eliminar usuarios, implementando validaciones estrictas para garantizar la integridad de los datos.

La API fue diseñada con un enfoque modular y escalable, siguiendo buenas prácticas de desarrollo backend, utilizando controladores, modelos y rutas organizadas para facilitar el mantenimiento y futuras ampliaciones.

Finalmente, el proyecto se despliega en la plataforma Render, proporcionando una URL pública para su acceso y pruebas.

instalacion en local.
git clone https://github.com/tuusuario/api-usuarios.git
cd api-usuarios
npm install
npm run dev

Despliegue en render:
https://api-gestion-usuarios-1ytp.onrender.com/users

metodos:
GET: /users         --lista de usuarios
POST: /users        --Crear usuarios
PUT: /Users/:dpi    --Actualizar usuario
DELETE: /users/:dpi --Eliminar usuario

Ejemplo de peticion:
POST /users
Content-Type: application/json

{
  "name": "Carlos Pérez",
  "dpi": "1234567890124",
  "email": "carlos@test.com",
  "password": "Carlos@123"
}


Anthony Fabian Ramirez Orellana
carnet: 9490-22-958