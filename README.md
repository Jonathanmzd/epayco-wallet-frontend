# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Tecnologías instaladas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Redux Toolkit**: Manejo de estado global de la aplicación.
- **React Redux**: Enlace entre React y Redux.
- **React Router DOM**: Enrutamiento para aplicaciones de React.
- **Material UI (MUI)**: Librería de componentes UI modernos y responsivos.
- **MUI Icons**: Iconos oficiales de Material UI.
- **MUI Data Grid**: Componente de tabla avanzada para mostrar datos.
- **Axios**: Cliente HTTP para consumir APIs.
- **Jest y Testing Library**: Herramientas para pruebas unitarias y de integración.
- **tree-cli**: Utilidad para visualizar la estructura de carpetas.
- **web-vitals**: Medición de métricas de rendimiento web.

---

## Cómo arrancar el proyecto

1. **Instala las dependencias**

   ```bash
   npm install
   ```

2. **Configura las variables de entorno**

   Si es necesario, copia `.env.example` a `.env` y ajusta los valores según tu entorno.

3. **API Secundaria (Services)**

   se levanta por defecto en el puerto `3001`. Si necesitas cambiar el puerto, edítalo en el archivo `.env`.

4. **Arranca la aplicación en modo desarrollo**

   ```bash
   npm start
   ```

   Esto abrirá la app en [http://localhost:3002](http://localhost:3002).

5. **Ejecuta pruebas (opcional)**

   ```bash
   npm test
   ```

6. **Construye la aplicación para producción (opcional)**

   ```bash
   npm run build
   ```

---

**Notas:**
- Asegúrate de tener Node.js y npm actualizados.
- Si tienes problemas con dependencias, elimina la carpeta `node_modules` y ejecuta nuevamente `npm install`.
- El frontend se conecta por defecto al backend configurado en los archivos de entorno o en el código fuente.