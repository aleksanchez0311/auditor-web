---
description: Información General del Repositorio
alwaysApply: true
---

# Información de la Aplicación Web Auditor

## Resumen
Una aplicación web para un restaurante de hamburguesas ("Hamburguesas La Cumbre") con un backend en Flask y un frontend alojado en Firebase. La aplicación permite a los clientes ver productos y realizar pedidos en línea.

## Estructura
- **src/**: Directorio principal del código fuente
  - **backend/**: Servidor API Flask
  - **frontend/**: Interfaz de cliente web
- **.github/**: Flujos de trabajo CI/CD para despliegue en Firebase
- **.firebase/**: Caché de despliegue de Firebase
- **.zencoder/**: Reglas y configuración del proyecto

## Lenguaje y Entorno de Ejecución
**Lenguaje Backend**: Python
**Versión**: Compatible con Python 3.x
**Lenguaje Frontend**: JavaScript (Navegador)
**Sistema de Construcción**: npm (configuración mínima)
**Gestor de Paquetes**: pip (Python), npm (JavaScript)

## Dependencias
**Dependencias Backend**:
- Flask 2.3.3: Framework web
- firebase-admin 6.2.0: SDK de Firebase para servidor

**Dependencias Frontend**:
- Firebase SDK 12.1.0: Integración de Firebase del lado del cliente
  - firebase-app-compat
  - firebase-auth-compat
  - firebase-firestore-compat
  - firebase-functions-compat
  - firebase-messaging-compat
  - firebase-storage-compat
  - firebase-analytics-compat

## Construcción e Instalación
**Configuración Backend**:
```bash
pip install -r requirements.txt
```

**Construcción Frontend**:
```bash
cd src/frontend
npm run build
```

## Configuración de Firebase
**ID del Proyecto**: auditor-4907c
**Alojamiento**: Frontend desplegado en Firebase Hosting
**Base de Datos**: Firestore utilizado para almacenamiento de datos
**Archivos de Configuración**:
- firebase.json: Configuración principal
- firestore.rules: Reglas de seguridad de la base de datos
- firestore.indexes.json: Índices de la base de datos

## Archivos Principales
**Punto de Entrada Backend**: src/backend/app.py
**Punto de Entrada Frontend**: src/frontend/index.html
**Endpoints API**:
- GET /productos: Obtener lista de productos
- POST /pedido: Enviar nuevo pedido

## CI/CD
**Proveedor**: GitHub Actions
**Flujo de Trabajo**: Despliegue en Firebase Hosting en pull requests
**Configuración**: .github/workflows/firebase-hosting-pull-request.yml