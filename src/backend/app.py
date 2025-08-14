from flask import Flask, jsonify, request
import firebase_admin
from firebase_admin import credentials, firestore

# Inicializar Firebase Admin SDK
cred = credentials.Certificate("path/to/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

# Ruta para obtener productos
@app.route('/productos', methods=['GET'])
def get_productos():
    docs = db.collection('productos').stream()
    productos = []
    for doc in docs:
        producto = doc.to_dict()
        producto['id'] = doc.id
        productos.append(producto)
    return jsonify(productos)

# Ruta para agregar pedido
@app.route('/pedido', methods=['POST'])
def crear_pedido():
    data = request.get_json()
    db.collection('pedidos').add(data)
    return jsonify({"status": "Pedido recibido"}), 201

if __name__ == '__main__':
    app.run(debug=True)