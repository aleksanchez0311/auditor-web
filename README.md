# Hamburguesas La Cumbre - Online Ordering System

A web application for a hamburger restaurant that allows customers to browse the menu and place orders online.

## 🍔 Project Overview

This application consists of:
- A **Flask backend** that serves product data and processes orders
- A **Firebase-hosted frontend** that provides a user-friendly interface for customers
- **Firestore database** for storing product information and customer orders

## 🚀 Features

- Browse restaurant menu and product listings
- Add items to cart
- Submit orders through a simple interface
- Real-time data synchronization with Firebase

## 🛠️ Technology Stack

### Backend
- Python 3.x
- Flask 2.3.3
- Firebase Admin SDK 6.2.0

### Frontend
- HTML/CSS/JavaScript
- Firebase SDK 12.1.0 (Authentication, Firestore, Hosting)

### Infrastructure
- Firebase Hosting
- Firestore Database
- GitHub Actions for CI/CD

## 📋 Prerequisites

- Python 3.x
- Node.js and npm
- Firebase CLI (for deployment)
- Firebase project with Firestore enabled

## 🔧 Installation & Setup

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/auditor-web.git
   cd auditor-web
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Configure Firebase credentials:
   - Create a service account key in Firebase console
   - Update the path in `src/backend/app.py` to point to your service account key

4. Run the Flask server:
   ```bash
   python src/backend/app.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd src/frontend
   ```

2. Install dependencies (if needed):
   ```bash
   npm install
   ```

3. Build the frontend:
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Firebase Deployment

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## 🔄 CI/CD

This project uses GitHub Actions for continuous deployment:
- Pull requests trigger automatic deployment previews
- Configuration is in `.github/workflows/firebase-hosting-pull-request.yml`

## 📝 API Endpoints

- `GET /productos`: Retrieve the list of available products
- `POST /pedido`: Submit a new order

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/auditor-web](https://github.com/yourusername/auditor-web)