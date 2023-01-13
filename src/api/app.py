from flask_cors import CORS
import json
from flask import Flask, jsonify, request


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*", "headers": "content-type"}})

todos = [

    {'id': 1, 'nombre': 'prueba', 'tarea': 'prueba 1', 'email': 'correo@correo',
        'fecha': '23/01/2023', 'comentario': 'prueba texto', }
]


@app.route('/items', methods=['GET'])
def hello_world():
    return jsonify(todos)


@app.route('/items', methods=['POST'])
def add_new_todo():
    request_body = request.get_json(force=True)
    todos.append(request_body)
    return jsonify(todos)


@app.route('/items/<int:position>', methods=['DELETE'])
def delete_todo(position):
    del todos[position]
    return jsonify(todos)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)
