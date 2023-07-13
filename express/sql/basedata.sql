BEGIN;

-- Inicia uma transação
-- Inserções para a tabela Estudantes
INSERT INTO
  Estudantes (nome, email, matricula, curso, senha, isAdmin)
VALUES
  (
    'João Silva',
    'teste@teste.com',
    '20210001',
    'Engenharia',
    '123456',
    FALSE
  );

INSERT INTO
  Estudantes (nome, email, matricula, curso, senha, isAdmin)
VALUES
  (
    'Maria Souza',
    'maria.souza@example.com',
    '20210002',
    'Ciências da Computação',
    '654321',
    FALSE
  );

INSERT INTO
  Estudantes (nome, email, matricula, curso, senha, isAdmin)
VALUES
  (
    'Carlos Santos',
    'carlos.santos@example.com',
    '20210003',
    'Administração',
    'abcdef',
    TRUE
  );

-- Inserções para a tabela Departamento
INSERT INTO
  Departamento (nome, departamento_id)
VALUES
  ('Departamento A', NULL);

INSERT INTO
  Departamento (nome, departamento_id)
VALUES
  ('Departamento B', NULL);

INSERT INTO
  Departamento (nome, departamento_id)
VALUES
  ('Departamento C', NULL);

-- Inserções para a tabela Disciplinas
INSERT INTO
  Disciplinas (id, nome, departamento_id)
VALUES
  ('D001', 'Disciplina 1', 1);

INSERT INTO
  Disciplinas (id, nome, departamento_id)
VALUES
  ('D002', 'Disciplina 2', 1);

INSERT INTO
  Disciplinas (id, nome, departamento_id)
VALUES
  ('D003', 'Disciplina 3', 2);

-- Inserções para a tabela Professores
INSERT INTO
  Professores (nome, departamento_id)
VALUES
  ('Prof. Joana Oliveira', 1);

INSERT INTO
  Professores (nome, departamento_id)
VALUES
  ('Prof. André Santos', 1);

INSERT INTO
  Professores (nome, departamento_id)
VALUES
  ('Prof. Pedro Almeida', 2);

-- Inserções para a tabela Turmas
INSERT INTO
  Turmas (
    turma,
    periodo,
    horario,
    vagasOcupadas,
    totalVagas,
    local,
    departamento_id,
    disciplina_id,
    professor_id
  )
VALUES
  (
    1,
    '2021/1',
    'Segunda-feira, 8:00-10:00',
    25,
    30,
    'Sala A',
    1,
    'D001',
    1
  );

INSERT INTO
  Turmas (
    turma,
    periodo,
    horario,
    vagasOcupadas,
    totalVagas,
    local,
    departamento_id,
    disciplina_id,
    professor_id
  )
VALUES
  (
    2,
    '2021/1',
    'Terça-feira, 14:00-16:00',
    20,
    30,
    'Sala B',
    1,
    'D002',
    2
  );

INSERT INTO
  Turmas (
    turma,
    periodo,
    horario,
    vagasOcupadas,
    totalVagas,
    local,
    departamento_id,
    disciplina_id,
    professor_id
  )
VALUES
  (
    1,
    '2021/1',
    'Quarta-feira, 10:00-12:00',
    18,
    20,
    'Sala C',
    2,
    'D003',
    3
  );

-- Inserções para a tabela Avaliacoes
INSERT INTO
  Avaliacoes (estudante_id, turma_id, comentario, nota)
VALUES
  (
    1,
    1,
    'Ótimo professor e aulas muito interessantes!',
    5
  );

INSERT INTO
  Avaliacoes (estudante_id, turma_id, comentario, nota)
VALUES
  (
    2,
    2,
    'A turma é bastante participativa e as discussões são enriquecedoras!',
    4
  );

INSERT INTO
  Avaliacoes (estudante_id, turma_id, comentario, nota)
VALUES
  (
    3,
    1,
    'O horário da turma não é muito adequado para mim.',
    3
  );

-- Inserções para a tabela Denuncias
INSERT INTO
  Denuncias (estudante_id, avaliacao_id, motivo, avaliado)
VALUES
  (
    2,
    1,
    'O estudante não participa das atividades da turma.',
    FALSE
  );

INSERT INTO
  Denuncias (estudante_id, avaliacao_id, motivo, avaliado)
VALUES
  (
    3,
    2,
    'O professor não é pontual nas aulas.',
    FALSE
  );

INSERT INTO
  Denuncias (estudante_id, avaliacao_id, motivo, avaliado)
VALUES
  (
    1,
    3,
    'O estudante falta frequentemente nas aulas.',
    FALSE
  );

-- Finaliza a transação
COMMIT;