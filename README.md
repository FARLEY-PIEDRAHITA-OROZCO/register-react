# Login and Registration Form in React

## Descripción

Esta es una aplicación básica de React que permite a los usuarios registrarse como paciente, médico o administrador, y luego iniciar sesión en la aplicación. El proyecto se centra en el frontend, mostrando un formulario de registro y login con validación básica.

## Estructura del Proyecto

La estructura de carpetas del proyecto es la siguiente:

```
login-register-form/
│
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Register.js
│   ├── styles/
│   │   ├── App.css
│   └── App.js
│   └── index.js
│
└── README.md
```

- **`public/`**: Contiene archivos públicos que se sirven directamente, como el archivo `index.html`.
- **`src/`**: Contiene todos los archivos de código fuente de la aplicación.
  - **`assets/`**: Directorio donde se almacenan las imágenes y otros activos.
  - **`components/`**: Contiene los componentes de React `Login.js` y `Register.js`.
  - **`styles/`**: Contiene los archivos CSS para los estilos.
  - **`App.js`**: Componente principal que maneja la lógica de alternancia entre los formularios de login y registro.
  - **`index.js`**: Punto de entrada de la aplicación donde se monta el componente `App` en el DOM.

## Requisitos Previos

Para ejecutar esta aplicación, necesitas tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (incluye npm, que es el gestor de paquetes de Node.js)
- [Git](https://git-scm.com/) (opcional, si quieres clonar el repositorio desde GitHub)

## Configuración del Proyecto

### 1. Clonar el Repositorio

Si tienes Git instalado, puedes clonar el repositorio. Si no, puedes descargar el código directamente desde GitHub.

```bash
git clone https://github.com/tu-usuario/login-register-form.git
cd login-register-form
```

### 2. Instalar Dependencias

Una vez en la carpeta del proyecto, instala las dependencias necesarias:

```bash
npm install
```

Este comando descargará todos los paquetes de Node.js que la aplicación necesita para ejecutarse.

### 3. Ejecutar la Aplicación

Para iniciar la aplicación, usa el siguiente comando:

```bash
npm start
```

Esto abrirá la aplicación en tu navegador web en `http://localhost:3000`.

### 4. Alternar Entre Formularios

Cuando la aplicación se carga, verás el formulario de login. Si no tienes una cuenta, puedes hacer clic en "Register here" para cambiar al formulario de registro. En el formulario de registro, puedes elegir si deseas registrarte como paciente, médico o administrador.

### 5. Registrar un Usuario

Para registrar un usuario:

1. Ingresa tu nombre en el campo "Name".
2. Ingresa tu dirección de correo electrónico en el campo "Email".
3. Crea una contraseña en el campo "Password".
4. Selecciona tu rol (Paciente, Médico, Administrador) en el menú desplegable.
5. Haz clic en "Register" para enviar el formulario.

> **Nota**: Este es solo el frontend, por lo que no se guarda ninguna información. Un backend sería necesario para almacenar los datos de los usuarios.

### 6. Iniciar Sesión

Para iniciar sesión:

1. Ingresa tu dirección de correo electrónico en el campo "Email".
2. Ingresa tu contraseña en el campo "Password".
3. Haz clic en "Login" para iniciar sesión.

### 7. Alternar Entre Roles

Puedes regresar al formulario de registro en cualquier momento desde el formulario de login para registrar otro tipo de usuario (paciente, médico o administrador).

## Funcionalidades

- **Registro de Usuarios**: Permite a los usuarios registrarse con diferentes roles.
- **Iniciar Sesión**: Permite a los usuarios registrados iniciar sesión.
- **Alternancia de Formularios**: Puedes cambiar entre los formularios de login y registro con un clic.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **CSS**: Utilizado para estilizar los componentes.

## Personalización

Puedes personalizar esta aplicación de las siguientes maneras:

- **Estilos**: Edita el archivo `App.css` para cambiar la apariencia de los formularios.
- **Validaciones Adicionales**: Agrega validaciones adicionales en los formularios si es necesario.
- **Conectar con un Backend**: Integra un backend (por ejemplo, con Node.js y Express) para manejar la autenticación y el almacenamiento de datos de los usuarios.

## Contribuciones

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes hacer un fork del repositorio, crear una nueva rama, hacer tus cambios y luego enviar un pull request.

## Licencia

Este proyecto está bajo la [MIT License](LICENSE).
