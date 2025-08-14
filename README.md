# Hamburguesas La Cumbre - Sistema de Pedidos en Línea

Una aplicación web para un restaurante de hamburguesas que permite a los clientes navegar por el menú y realizar pedidos en línea.

## 🍔 Descripción General del Proyecto

Esta aplicación consiste en:
- Un **backend en Flask** que sirve datos de productos y procesa pedidos
- Un **frontend alojado en Firebase** que proporciona una interfaz amigable para los clientes
- **Base de datos Firestore** para almacenar información de productos y pedidos de clientes

## 🚀 Características

- Navegar por el menú del restaurante y listados de productos
- Añadir artículos al carrito
- Enviar pedidos a través de una interfaz sencilla
- Sincronización de datos en tiempo real con Firebase

## 🛠️ Stack Tecnológico

### Backend
- Python 3.x
- Flask 2.3.3
- Firebase Admin SDK 6.2.0

### Frontend
- HTML/CSS/JavaScript
- Firebase SDK 12.1.0 (Autenticación, Firestore, Hosting)

### Infraestructura
- Firebase Hosting
- Base de datos Firestore
- GitHub Actions para CI/CD

## 📋 Requisitos Previos

- Python 3.x
- Node.js y npm
- Firebase CLI (para despliegue)
- Proyecto Firebase con Firestore habilitado

## 🔧 Instalación y Configuración

### Configuración del Backend

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tunombre/auditor-web.git
   cd auditor-web
   ```

2. Instalar dependencias de Python:
   ```bash
   pip install -r requirements.txt
   ```

3. Configurar credenciales de Firebase:
   - Crear una clave de cuenta de servicio en la consola de Firebase
   - Actualizar la ruta en `src/backend/app.py` para que apunte a tu clave de cuenta de servicio

4. Ejecutar el servidor Flask:
   ```bash
   python src/backend/app.py
   ```

### Configuración del Frontend

1. Navegar al directorio frontend:
   ```bash
   cd src/frontend
   ```

2. Instalar dependencias (si es necesario):
   ```bash
   npm install
   ```

3. Construir el frontend:
   ```bash
   npm run build
   ```

## 🚀 Despliegue

### Despliegue en Firebase

1. Instalar Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Iniciar sesión en Firebase:
   ```bash
   firebase login
   ```

3. Desplegar en Firebase:
   ```bash
   firebase deploy
   ```

## 🔄 CI/CD

Este proyecto utiliza GitHub Actions para despliegue continuo:
- Las pull requests activan vistas previas de despliegue automáticas
- La configuración está en `.github/workflows/firebase-hosting-pull-request.yml`

## 📝 Endpoints de la API

- `GET /productos`: Obtener la lista de productos disponibles
- `POST /pedido`: Enviar un nuevo pedido

## 👥 Contribuir

1. Haz un fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/caracteristica-increible`)
3. Haz commit de tus cambios (`git commit -m 'Añadir alguna característica increíble'`)
4. Haz push a la rama (`git push origin feature/caracteristica-increible`)
5. Abre una Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 📞 Contacto

Tu Nombre - tu.email@ejemplo.com

Enlace del Proyecto: [https://github.com/tunombre/auditor-web](https://github.com/tunombre/auditor-web)