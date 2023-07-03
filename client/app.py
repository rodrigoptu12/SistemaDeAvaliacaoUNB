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
        print(request.form)
        estudante = {
            'nome': request.form['nome'],
            'email': request.form['email'],
            'matricula': request.form['matricula'],
            'curso': request.form['curso'],
            'senha': request.form['senha']
        }
        try:
            result = connection.execute(
                "INSERT INTO estudantes (nome, email, matricula, curso, senha) VALUES ('teste', 'teste@unb.br', '12321312', '32423', '432423423');")
        except Exception as e:
            print(e)

        connection.close()

        # if result.rowcount > 0:
        #     mensagem = "Estudante criado com sucesso!"
        # else:
        mensagem = "Falha ao criar o estudante."

        return render_template('estudantes.html', mensagem=mensagem)

    @app.route('/delete/<int:id>', methods=['DELETE'])
    def delete_student(id):
        if request.method == 'DELETE':
            mensagem = "Falha ao remover o estudante."

            try:
                # Construir a consulta parametrizada
                sql = text('DELETE FROM estudantes WHERE id = :id')

                # Conectar ao banco de dados
                connection = db.engine.connect()

                # Executar a consulta
                result = connection.execute(sql, {'id': id})

                # Verificar se a exclusão foi bem-sucedida
                if result.rowcount > 0:
                    mensagem = "Estudante removido com sucesso!"

                # Fechar a conexão com o banco de dados
                connection.close()

            except Exception as e:
                # Lidar com erros
                print("Erro:", str(e))
                mensagem = "Ocorreu um erro ao remover o estudante."

        return render_template('estudantes.html', mensagem=mensagem)


if __name__ == '__main__':
    app.run()
