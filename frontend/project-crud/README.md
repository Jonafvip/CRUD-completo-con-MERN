# 🚀 CRUD Fullstack App

Una aplicación web moderna y dinámica para la gestión completa de usuarios. Este proyecto implementa todas las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando el stack MERN (**M**ongoDB, **E**xpress, **R**eact, **N**ode.js).

La interfaz ha sido diseñada para ser intuitiva y atractiva, incorporando animaciones suaves y feedback visual instantáneo para una mejor experiencia de usuario.

---

## ✨ Características Principales

- **Gestión de Usuarios:**
  - **Crear:** Formulario intuitivo para registrar nuevos usuarios.
  - **Leer:** Tabla interactiva para visualizar todos los usuarios registrados.
  - **Actualizar:** Edición de datos existentes mediante un formulario precargado.
  - **Eliminar:** Borrado rápido de usuarios con confirmación visual.
- **Diseño Moderno:**
  - Interfaz limpia tipo "tarjeta".
  - Animaciones CSS fluidas (entradas, transiciones, hovers).
  - Estilos personalizados sin depender de frameworks pesados de CSS.
- **Feedback Visual:**
  - Alertas de éxito animadas (Pop-in notifications).
  - Transiciones suaves entre páginas y estados.
  - Mensajes claros de "carga" o "listado vacío".

## 🛠️ Tecnologías Usadas

### Frontend (Cliente)

- **[React](https://react.dev/):** Biblioteca principal para construir la interfaz.
- **[Vite](https://vitejs.dev/):** Herramienta de compilación rápida y entorno de desarrollo.
- **[React Router DOM](https://reactrouter.com/):** Gestión de rutas y navegación (SPA).
- **[Axios](https://axios-http.com/):** Cliente HTTP para conectar con el backend.
- **[Material UI (Componentes)](https://mui.com/):** Usado para componentes específicos como Alertas.
- **CSS3:** Estilos personalizados y animaciones avanzadas (`keyframes`, `transitions`).

### Backend (Servidor)

- **[Node.js](https://nodejs.org/):** Entorno de ejecución para JavaScript en el servidor.
- **[Express](https://expressjs.com/):** Framework web para crear la API REST.
- **[Mongoose](https://mongoosejs.com/):** ODM para modelado de datos en MongoDB.
- **[MongoDB](https://www.mongodb.com/):** Base de datos NoSQL.

---

## 📦 Instalación y Ejecución

Para correr este proyecto localmente, necesitarás tener instalado [Node.js](https://nodejs.org/) y [MongoDB](https://bit.ly/2lWj31p) en tu sistema.

### 1. Clonar el repositorio

```bash
git clone <tu-repositorio-url>
cd CRUD-final-fullstack
```

### 2. Configurar el Backend (Servidor)

El servidor maneja la API y la conexión a la base de datos.

```bash
cd server
npm install        # Instalar dependencias
npm run dev        # Iniciar servidor en modo desarrollo
```

> El servidor correrá por defecto en `http://localhost:8000`. Asegúrate de tener MongoDB corriendo.

### 3. Configurar el Frontend (Cliente)

En una **nueva terminal**, ve a la carpeta del frontend e inicia la aplicación React.

```bash
cd frontend/project-crud
npm install        # Instalar dependencias
npm run dev        # Iniciar aplicación React
```

> La aplicación se abrirá en `http://localhost:5173` (o el puerto que indique Vite).

---

## 📂 Estructura del Proyecto

```
CRUD-final-fullstack/
├── server/                 # Backend (API & DB)
│   ├── controller/         # Lógica de los controladores
│   ├── model/              # Esquemas de Mongoose
│   ├── routes/             # Definición de rutas de la API
│   └── server.js           # Punto de entrada del servidor
│
└── frontend/project-crud/  # Frontend (React App)
    ├── src/
    │   ├── components/     # Componentes: UserTable, FormUser, UpdateUser
    │   ├── App.jsx         # Configuración de rutas
    │   └── ...
    └── ...
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el diseño o agregar nuevas funcionalidades, siéntete libre de hacer un fork y enviar un pull request.

---

Hecho por notJona.
