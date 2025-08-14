from flask import Flask, jsonify
import psycopg2

app = Flask(__name__)

@app.route('/api/estado', methods=['GET'])
def estado():
    return jsonify({"mensaje": "API funcionando correctamente"})

if __name__ == '__main__':
    app.run(debug=True)