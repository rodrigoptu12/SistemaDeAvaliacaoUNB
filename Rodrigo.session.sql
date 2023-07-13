-- ALTER TABLE Estudantes
-- ADD COLUMN imagem BYTEA;
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
-- -- consulta procedure
-- SELECT routine_name FROM information_schema.routines WHERE routine_schema = 'public';

-- -- consulta view
-- SELECT table_name FROM information_schema.views WHERE table_schema = 'public';

-- visualizar view
-- SELECT * FROM Avaliacoes_Completas; 

-- CREATE TABLE Estudantes (
--     id SERIAL PRIMARY KEY,
--     nome VARCHAR(100),
--     email VARCHAR(100),
--     matricula VARCHAR(20),
--     curso VARCHAR(50),
--     senha VARCHAR(50)
-- );

-- INSERT INTO Estudantes (nome, email, matricula, curso, senha)
-- VALUES 
--   ('João Silva', 'joao.silva@unb.br', '202200001', 'Engenharia de Software', 'senha123');

   -- INSERT INTO estudantes (nome, email, matricula, curso, senha)
   -- VALUES ('teste', 'teste@unb.br', '12321312', '32423', '123456');

-- DELETE FROM Estudantes WHERE id = 17;

-- visualizar estudantes
-- SELECT * FROM Estudantes;
-- SELECT * FROM Avaliacoes WHERE turma_id = 1
-- DROP TABLE IF EXISTS Avaliacoes CASCADE;
-- -- visualizar todos linhas de todas tabelas
-- SELECT * FROM information_schema.tables;
-- -- visualizar todas tabelas
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

-- Apagar todo banco de dados

-- DROP DATABASE rodri;
-- INSERT INTO turmas (turma, periodo, horario, vagasOcupadas, totalVagas, departamento_id, disciplina_id, professor_id)
-- VALUES (1, '2022/1', 'Segunda-feira 14:00', 20, 30, 1, 'D001', 1);

-- SELECT * FROM turmas;

-- Excluir tabelas e suas dependências utilizando CASCADE
-- DROP TABLE IF EXISTS Denuncias CASCADE;
-- DROP TABLE IF EXISTS Avaliacoes CASCADE;
-- DROP TABLE IF EXISTS Turmas CASCADE;
-- DROP TABLE IF EXISTS Disciplinas CASCADE;
-- DROP TABLE IF EXISTS Professores CASCADE;
-- DROP TABLE IF EXISTS Estudantes CASCADE;
-- DROP TABLE IF EXISTS Departamento CASCADE;



-- DROP TABLE     Denuncias;

-- -- Inserção de dados de exemplo
-- INSERT INTO Departamentos (id, nome) VALUES
--     (1,'Departamento 1'),
--     (2,'Departamento 2'),
--     (3,'Departamento 3');

-- INSERT INTO Professores (nome, departamento_id) VALUES
--     ('Professor 1', 1),
--     ('Professor 2', 2),
--     ('Professor 3', 3);

-- INSERT INTO Disciplinas (id, nome, departamento_id) VALUES
--     ('D001', 'Disciplina 1', 1),
--     ('D002', 'Disciplina 2', 2),
--     ('D003', 'Disciplina 3', 3);

-- INSERT INTO Turmas (turma, periodo, horario, vagasOcupadas, totalVagas, local_, departamento_id, disciplina_id, professor_id) VALUES
--     (1, '2022/1', 'Segunda-feira 14:00', 20, 30, 'Sala A', 1, 'D001', 1),
--     (2, '2022/2', 'Terça-feira 10:00', 15, 25, 'Sala B', 2, 'D002', 2),
--     (3, '2022/1', 'Quarta-feira 16:00', 10, 20, 'Sala C', 3, 'D003', 3);

-- SELECT Turmas.*, Disciplinas.nome AS nome_disciplina, Professores.nome AS nome_professor
-- FROM Turmas
-- JOIN Disciplinas ON Turmas.disciplina_id = Disciplinas.id
-- JOIN Professores ON Turmas.professor_id = Professores.id;

-- Criação das tabelas
-- CREATE TABLE Departamentos (
--     id SERIAL PRIMARY KEY,
--     nome VARCHAR(100)
-- );

-- CREATE TABLE Estudantes (
--     id SERIAL PRIMARY KEY,
--     nome VARCHAR(100),
--     email VARCHAR(100),
--     matricula VARCHAR(20),
--     curso VARCHAR(50),
--     senha VARCHAR(50),
--     isAdmin BOOLEAN DEFAULT FALSE
-- );

-- CREATE TABLE Departamento (
--     id SERIAL PRIMARY KEY,
--     nome VARCHAR(100),
--     departamento_id INT,
--     FOREIGN KEY (departamento_id) REFERENCES Departamentos(id)
-- );

-- CREATE TABLE Disciplinas (
--     id VARCHAR(20) PRIMARY KEY,
--     nome VARCHAR(100),
--     departamento_id INT,
--     FOREIGN KEY (departamento_id) REFERENCES Departamento(id)
-- );

-- CREATE TABLE Professores (
--     id SERIAL PRIMARY KEY,
--     nome VARCHAR(100),
--     departamento_id INT,
--     FOREIGN KEY (departamento_id) REFERENCES Departamento(id)
-- );

-- CREATE TABLE Turmas (
--     id SERIAL PRIMARY KEY,
--     turma INT,
--     periodo VARCHAR(20),
--     horario VARCHAR(50),
--     vagasOcupadas INT,
--     totalVagas INT,
--     local VARCHAR(50),
--     departamento_id INT,
--     disciplina_id VARCHAR(20),
--     professor_id INT,
--     FOREIGN KEY (departamento_id) REFERENCES Departamento(id),
--     FOREIGN KEY (disciplina_id) REFERENCES Disciplinas(id),
--     FOREIGN KEY (professor_id) REFERENCES Professores(id)
-- );

-- CREATE TABLE Avaliacoes (
--     id SERIAL PRIMARY KEY,
--     estudante_id INT,
--     turma_id INT,
--     comentario TEXT,
--     FOREIGN KEY (estudante_id) REFERENCES Estudantes(id),
--     FOREIGN KEY (turma_id) REFERENCES Turmas(id)
-- );

-- CREATE TABLE Denuncias (
--     id SERIAL PRIMARY KEY,
--     estudante_id INT,
--     avaliacao_id INT,
--     motivo VARCHAR(100),
--     avaliado BOOLEAN DEFAULT FALSE,
--     FOREIGN KEY (estudante_id) REFERENCES Estudantes(id),
--     FOREIGN KEY (avaliacao_id) REFERENCES Avaliacoes(id)
-- );
