Este proyecto consiste en una aplicación de formularios con un backend en NestJS, un frontend en Angular y una base de datos MongoDB para el almacenamiento de datos. Utilizamos Docker y Docker Compose para facilitar el levantamiento y la configuración de los servicios.

Para ejecutar este proyecto, necesitas tener instalados en tu sistema:
- Docker

## Servicios y Puertos

Este proyecto incluye los siguientes servicios, cada uno configurado para ejecutarse en un puerto específico:

- **Backend (NestJS)**: Servidor NestJS que maneja la lógica de la API, disponible en el puerto `3000`.
- **Frontend (Angular)**: Aplicación Angular para la interfaz de usuario, disponible en el puerto `4200` (`80` en docker).
- **Base de datos (MongoDB)**: Servidor MongoDB para almacenar los datos de los formularios, disponible en el puerto `27017`.

## Instrucciones para Levantar el Proyecto

1. **Clonar el Repositorio**  
   Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/MichaelBraMer/forms-test.git
   cd forms-test

2. **Levantar los Servicios con Docker Compose**
   Asegúrate de tener Docker en funcionamiento y, desde la carpeta raíz del proyecto, ejecuta:

    docker-compose up

3. **Acceso a los Servicios**

    - Backend: http://localhost:3000
    - Frontend: http://localhost:4200 (http://localhost:80 en docker)
    - Base de datos MongoDB: El servidor MongoDB estará escuchando en localhost:27017 para las operaciones de base de datos.
    
## Interacción con la API a través de Swagger
Para agregar nuevos formularios o gestionar los datos, puedes utilizar Swagger, una herramienta de documentación e interacción con la API. Swagger está disponible en la siguiente URL:

Swagger URL: http://localhost:3000/docs

En Swagger podrás:

- Realizar operaciones CRUD sobre los formularios directamente desde el navegador.
- Ver los detalles de los DTOs (Data Transfer Objects) de las colecciones, los cuales están documentados en la interfaz de Swagger.

Nota: La funcionalidad para agregar formularios no está implementada en el frontend debido al tiempo adicional que requeriría. Sin embargo, Swagger facilita la gestión de estos datos.