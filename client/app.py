from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text

app = Flask(__name__)
# substitute with your postgresql address
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://rodri:rodri@localhost/rodri'
db = SQLAlchemy(app)


@app.route('/estudantes', methods=['GET', 'POST'])
def estudantes():
    if request.method == 'GET':
        sql = text('SELECT * FROM estudantes')
        connection = db.engine.connect()
        result = connection.execute(sql)
        connection.close()
        estudantes = [{'id': r[0], 'nome': r[1], 'email': r[2]}
                      for r in result.fetchall()]
        return render_template('estudantes.html', estudantes=estudantes)
    if request.method == 'POST':
        sql = text(
            'INSERT INTO estudantes (nome, email, matricula, curso, senha) VALUES (:nome, :email, :matricula, :curso, :senha)')
        connection = db.engine.connect()
        connection.execute(
            sql, {'nome': request.form['nome'], 'email': request.form['email'], 'matricula': request.form['matricula'], 'curso': request.form['curso'], 'senha': request.form['senha']})
        connection.close()

        mensagem = "Estudante criado com sucesso!"
        return render_template('estudantes.html', mensagem=mensagem)


if __name__ == '__main__':
    app.run()
