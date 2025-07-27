# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Para ejecutar el sitio se debe descargar el código relacionado y a continuación ejecutar:

npm install

## Una vez ejecutado se procede a ejecutar el comando: 

npm run dev

## La aplicación debería mostrarse en la siguiente dirección:

http://localhost:5173/

## Una vez iniciada la aplicación se deben de cargar los primeros 10 pokemones de la lista que vienen en pokeApi
Si se sigue desplazando hacia abajo se podrán ir cargando los adicionales a modo de scroll infinito.

Cada pokemon de la lista vendrá con su nombre, una leyenda, una foto (en caso de no obtener foto aparecerá un no-image.png) y un botón para ir a una pantalla descriptiva para obtener más detalles.

## En la pantalla descriptiva vendrá la foto, el nombre e información adicional del pokemon entre las cuales se incluyen los tipos, peso, etc.
Para regresar a la pantalla principal solo se tendrá que dar click en el botón de navegación izquierda como se hace normalmente navegando en la web.

## La pantalla principal tambien dispone de un buscador el cual recibirá el text para buscar el pokemon cuyo nombre contenga los caracteres del cuadro de texto
Durante la carga deberá aparecer una animación que indica al usuario que se está realizando la búsqueda pertinente.
En caso de encontrar coincidencias se mostrarán la serie de tarjetas con las coincidencias encontradas, en caso contrario un texto que indique que no se encontraron resultados.

Paquetes y versiones empleados

"@reduxjs/toolkit": "^2.8.2", <br/>
"@tailwindcss/vite": "^4.1.11", <br/>
"axios": "^1.11.0", <br/>
"bootstrap": "^5.3.7", <br/>
"react": "^19.1.0", <br/>
"react-dom": "^19.1.0", <br/>
"react-redux": "^9.2.0", <br/>
"react-router": "^7.7.1", <br/>
"redux-thunk": "^3.1.0", <br/>
"tailwindcss": "^4.1.11"