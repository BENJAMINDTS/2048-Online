# 2048 Online - Full Stack BenjaminDTS 🚀

![Version](https://img.shields.io/badge/version-1.0-blue)
![Laravel](https://img.shields.io/badge/Backend-Laravel_11-red)
![Vue](https://img.shields.io/badge/Frontend-Vue.js_3-green)
![DB](https://img.shields.io/badge/Database-MySQL_XAMPP-orange)

**2048 Online** es una implementación completa del famoso juego de puzzles numéricos, construida con una arquitectura Full Stack. Este proyecto demuestra el uso de una API RESTful con Laravel para la persistencia de datos y una interfaz reactiva con Vue.js optimizada con animaciones CSS.

**Desarrollado por:** BenjaminDTS  
**Estado:** Finalizado / Portafolio

---

## 🕹️ Características Principales

* **Game Engine:** Lógica de movimiento completa (Up, Down, Left, Right) con algoritmos de fusión de baldosas.
* **Interfaz Fluida:** Animaciones "Pop" de entrada y transiciones de color suaves mediante CSS3.
* **Sistema de Ranking:** Persistencia real de datos que muestra el **Top 20** de las mejores puntuaciones.
* **Diseño Moderno:** Modal de "Game Over" con efecto de desenfoque de fondo (Glassmorphism).
* **Arquitectura Limpia:** Separación total entre la lógica del servidor (API) y la interfaz de usuario.

---

## 🛠️ Stack Tecnológico

* **Backend:** PHP 8.2+ con **Laravel 11**.
* **Frontend:** **Vue.js 3** (Modo CDN) + CSS3 (Flexbox/Grid/Keyframes).
* **Comunicación:** **Axios** para peticiones asíncronas.
* **Servidor Local:** **XAMPP** (Apache + MySQL).

---

## 🚀 Instalación y Configuración

Sigue estos pasos detallados para ejecutar el proyecto en tu entorno local:

### 1. Clonar el proyecto
Primero, clona el repositorio en tu carpeta de proyectos:
```
git clone [https://github.com/TU_USUARIO/2048-online.git](https://github.com/TU_USUARIO/2048-online.git)
cd 2048-online
```
### 2. Configuración del Servidor (XAMPP)
Abre el XAMPP Control Panel.
Inicia los módulos Apache y MySQL.
Accede a phpMyAdmin y crea una nueva base de datos llamada laravel_2048.
### 3. Configuración del Backend (Laravel)Instala las dependencias necesarias de PHP:
```
composer install
```
Configura tu archivo de entorno:Crea una copia del archivo .env:Bashcp .env.example .env
Abre el archivo .env y asegúrate de que la configuración de la base de datos coincida con XAMPP:
```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_2048
DB_USERNAME=root
DB_PASSWORD=
```
Genera la clave de la aplicación y ejecuta las migraciones:
```
php artisan key:generate
php artisan migrate
```
### 4. Ejecución de la aplicaciónInicia el servidor de desarrollo de Laravel:
```
php artisan serve
```
Ahora puedes jugar entrando en la siguiente URL desde tu navegador:👉 http://127.0.0.1:8000/game/index.html
## 📡API Endpoints
El frontend se comunica con el backend mediante los siguientes endpoints:
| Método | Endpoint | Descripción |
| --------- | --------- | --------- |
| GET| /api/scores | Obtiene el Top 20 de puntuaciones ordenadas de mayor a menor |
| POST |/api/scores | Registra una nueva puntuación (player_name, score) |


## 📁 Estructura de Archivos 
- app/Http/Controllers/ScoreController.php: Lógica de la API y filtrado del Top 20.
- public/game/index.html: Estructura HTML y montaje de la App de Vue 3.
- public/game/style.css: Animaciones @keyframes y diseño visual.
- public/game/app.js: Motor del juego (algoritmos de movimiento y llamadas a la API).
## 📝 Autoría y Créditos
- Lógica y Desarrollo: BenjaminDTS
- Inspiración: Concepto original de Gabriele Cirulli.

# 2048 Online - Full Stack BenjaminDTS 🚀

![Version](https://img.shields.io/badge/version-1.0-blue)
![Laravel](https://img.shields.io/badge/Backend-Laravel_11-red)
![Vue](https://img.shields.io/badge/Frontend-Vue.js_3-green)
![DB](https://img.shields.io/badge/Database-MySQL_XAMPP-orange)

**2048 Online** is a complete implementation of the popular number puzzle game, built with a full-stack architecture. This project demonstrates the use of a RESTful API with Laravel for data persistence and a reactive interface with Vue.js optimized with CSS animations.

**Developed by:** BenjaminDTS
**Status:** Completed / Portfolio

---

## 🕹️ Main Features

* **Game Engine:** Complete movement logic (Up, Down, Left, Right) with tile blending algorithms.

* **Smooth Interface:** Entrance "Pop" animations and smooth color transitions using CSS3.

* **Ranking System:** True data persistence displaying the **Top 20** highest scores.

* **Modern Design:** "Game Over" modal with background blur effect (Glassmorphism).

* **Clean Architecture:** Complete separation between server logic (API) and user interface.

---

## 🛠️ Technology Stack

* **Backend:** PHP 8.2+ with **Laravel 11**.

* **Frontend:** **Vue.js 3** (CDN Mode) + CSS3 (Flexbox/Grid/Keyframes).

* **Communication:** **Axios** for asynchronous requests.

* **Local Server:** **XAMPP** (Apache + MySQL).

---

## 🚀 Installation and Configuration

Follow these detailed steps to run the project in your local environment:

### 1. Clone the project
First, clone the repository to your project folder:
```
git clone [https://github.com/YOUR_USERNAME/2048-online.git](https://github.com/YOUR_USERNAME/2048-online.git)
cd 2048-online
```
### 2. Server Configuration (XAMPP)
Open the XAMPP Control Panel.

Start the Apache and MySQL modules.

Access phpMyAdmin and create a new database called laravel_2048.

### 3. Backend Configuration (Laravel) Install the necessary PHP dependencies: 
```
composer install
```
Configure your environment file: Create a copy of the .env file: 
```
cp .env.example .env
```
Open the .env file and ensure the database configuration matches XAMPP: 
```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_2048
DB_USERNAME=root
DB_PASSWORD=
```
Generate the application key and run the migrations:
```
php artisan key:generate
php artisan migrate
```
### 4. Running the Application Start the Laravel development server:
```
php artisan serve
```
Now you can play by entering the following URL in your browser: 👉 http://127.0.0.1:8000/game/index.html
## 📡 API Endpoints
The frontend communicates with the backend using the following endpoints:
| Method | Endpoint | Description |
| --------- | --------- | --------- |
| GET | /api/scores | Gets the Top 20 scores sorted from highest to lowest |
| POST | /api/scores | Registers a new score (player_name, score) |

## 📁 File Structure
- app/Http/Controllers/ScoreController.php: API logic and filtering of the Top 20.
- public/game/index.html: HTML structure and Vue 3 app setup.
- public/game/style.css: @keyframe animations and visual design.

- public/game/app.js: Game engine (movement algorithms and API calls).

## 📝 Authorship and Credits
- Logic and Development: BenjaminDTS
- Inspiration: Original concept by Gabriele Cirulli.
