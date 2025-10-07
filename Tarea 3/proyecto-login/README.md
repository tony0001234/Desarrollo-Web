
Aplicación web fullstack para registro e inicio de sesión de usuarios.  
Frontend desarrollado con **React + Vite + Bootstrap** y backend con **Node.js + Express**.


Funcionalidades
- Registro con validaciones de email, DPI y contraseña
- Inicio de sesión con Context API (sesión persistente)
- Navbar dinámico (usuario logueado / no logueado)
- Rutas protegidas (solo accesibles si hay sesión)

**Instrucciones para ejecución local**
1. Clonar repositorio  
2. Instalar dependencias:
   cd proyecto-login/backend
   npm install

   y

   cd proyecto-login/frontend
   npm install

   esto instala las dependencias necesarias

ejecutar backend:
npm start

ejecutar frontend:
npm run dev

**se tiene que apuntar de forma local en "login.jsx" y "register.jsx"**
await axios.post("http://localhost:3001/login", form);
await axios.post("http://localhost:3001/register", form);

link render para el backend:
https://registro-login-tarea3.onrender.com/

link netlify para el frontend:
https://registro-login-tarea3.netlify.app/



Anthony Fabian Ramirez Orellana
carnet: 9490-22-958