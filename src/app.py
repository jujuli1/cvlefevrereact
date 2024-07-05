from flask import Flask, render_template, request, jsonify, redirect, url_for

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')



@app.route('/command', methods=['POST'])
def command():
    input_command = request.json.get('command')
    response = ""
    if input_command.lower() == "clear":
        response = "clear"
    if input_command.lower() == "hello":
        response = "hey"
    
    else:
        response = f"Commande inconnue: {input_command}"
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)