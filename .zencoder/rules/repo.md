---
description: Repository Information Overview
alwaysApply: true
---

# Auditor Web Application Information

## Summary
A web application for a hamburger restaurant ("Hamburguesas La Cumbre") with a Flask backend and Firebase-hosted frontend. The application allows customers to view products and place orders online.

## Structure
- **src/**: Main source code directory
  - **backend/**: Flask API server
  - **frontend/**: Web client interface
- **.github/**: CI/CD workflows for Firebase deployment
- **.firebase/**: Firebase deployment cache
- **.zencoder/**: Project rules and configuration

## Language & Runtime
**Backend Language**: Python
**Version**: Compatible with Python 3.x
**Frontend Language**: JavaScript (Browser)
**Build System**: npm (minimal configuration)
**Package Manager**: pip (Python), npm (JavaScript)

## Dependencies
**Backend Dependencies**:
- Flask 2.3.3: Web framework
- firebase-admin 6.2.0: Firebase SDK for server

**Frontend Dependencies**:
- Firebase SDK 12.1.0: Client-side Firebase integration
  - firebase-app-compat
  - firebase-auth-compat
  - firebase-firestore-compat
  - firebase-functions-compat
  - firebase-messaging-compat
  - firebase-storage-compat
  - firebase-analytics-compat

## Build & Installation
**Backend Setup**:
```bash
pip install -r requirements.txt
```

**Frontend Build**:
```bash
cd src/frontend
npm run build
```

## Firebase Configuration
**Project ID**: auditor-4907c
**Hosting**: Frontend deployed to Firebase Hosting
**Database**: Firestore used for data storage
**Configuration Files**:
- firebase.json: Main configuration
- firestore.rules: Database security rules
- firestore.indexes.json: Database indexes

## Main Files
**Backend Entry Point**: src/backend/app.py
**Frontend Entry Point**: src/frontend/index.html
**API Endpoints**:
- GET /productos: Retrieve product list
- POST /pedido: Submit new order

## CI/CD
**Provider**: GitHub Actions
**Workflow**: Firebase Hosting deployment on pull requests
**Configuration**: .github/workflows/firebase-hosting-pull-request.yml