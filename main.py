from flask import Flask
import psycopg2

from config import db_config
app = Flask(__name__)


# Caminho para o arquivo .sql contendo o script de criação das tabelas
sql_file_path = './assessment.sql'
# sql_file_path = './procedure.sql'
# sql_file_path = './view.sql'
# sql_file_path = './basedata.sql'

# Lê o conteúdo do arquivo .sql
with open(sql_file_path, 'r') as file:
    create_tables_sql = file.read()


def get_current_database():
    # Conexão com o banco de dados
    result = "Sucedido"
    conn = psycopg2.connect(**db_config)
    cur = conn.cursor()

    # Executa o script SQL para criação das tabelas
    cur.execute(create_tables_sql)
    # Recupera o resultado da consulta
    # if cur.rowcount > 0:
    #     result = cur.fetchone()[0]
    conn.commit()

    # Fecha a conexão com o banco de dados
    cur.close()
    conn.close()

    return result


@app.route('/')
def index():
    # Chama a função para obter o nome do banco de dados atual
    current_db = get_current_database()
    return f"Nome do banco de dados atual: {current_db}"


if __name__ == '__main__':
    app.run()
