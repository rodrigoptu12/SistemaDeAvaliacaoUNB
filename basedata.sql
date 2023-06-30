
-- Inserção de dados na tabela Departamentos
INSERT INTO Departamentos (id, nome)
VALUES
  (1, 'Departamento de Computação'),
  (2, 'Departamento de Telecomunicações'),
  (3, 'Departamento de Matemática');

-- Inserção de dados na tabela Estudantes
INSERT INTO Estudantes (id, nome, email, matricula, curso, senha)
VALUES 
  (1, 'João Silva', 'joao.silva@unb.br', '202200001', 'Engenharia de Software', 'senha123'),
  (2, 'Maria Souza', 'maria.souza@unb.br', '202200002', 'Ciência da Computação', 'senha456'),
  (3, 'Pedro Santos', 'pedro.santos@unb.br', '202200003', 'Engenharia Elétrica', 'senha789');

-- Inserção de dados na tabela Professores
INSERT INTO Professores (id, nome, departamento_id)
VALUES
  (1, 'Maria Santos', 1),
  (2, 'Carlos Silva', 2),
  (3, 'Ana Oliveira', 1);

-- Inserção de dados na tabela Disciplinas
INSERT INTO Disciplinas (id, nome, departamento_id)
VALUES
  (1, 'Banco de Dados', 1),
  (2, 'Algoritmos e Estruturas de Dados', 1),
  (3, 'Redes de Computadores', 2);

-- Inserção de dados na tabela Turmas
INSERT INTO Turmas (id, disciplina_id, professor_id)
VALUES
  (1, 1, 1),
  (2, 2, 2),
  (3, 3, 3);

-- Inserção de dados na tabela Avaliacoes
INSERT INTO Avaliacoes (id, estudante_id, turma_id, comentario)
VALUES
  (1, 1, 1, 'Ótimo professor, muito claro nas explicações.'),
  (2, 2, 1, 'Gostei da disciplina, mas a turma estava muito cheia.'),
  (3, 3, 2, 'O professor é bastante exigente, mas aprendi muito.');

-- Inserção de dados na tabela Denuncias
INSERT INTO Denuncias (id, estudante_id, avaliacao_id, motivo, avaliado)
VALUES
  (1, 2, 1, 'Comentário ofensivo', 'FALSE'),
  (2, 3, 2, 'Uso de linguagem inadequada', 'FALSE'),
  (3, 1, 3, 'Informações incorretas', 'FALSE');
