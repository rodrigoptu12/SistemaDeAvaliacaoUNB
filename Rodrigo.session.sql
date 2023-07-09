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
SELECT * FROM Estudantes WHERE id = 2
-- -- visualizar todos linhas de todas tabelas
-- SELECT * FROM information_schema.tables;

-- -- visualizar todas tabelas
-- SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';

-- Apagar todo banco de dados

-- DROP DATABASE rodri;




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

