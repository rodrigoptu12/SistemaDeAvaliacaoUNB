-- Inicia uma transação
BEGIN;

-- Verificar se a tabela Estudantes existe e, se sim, excluí-la
DROP TABLE IF EXISTS Estudantes CASCADE;

-- Criação da tabela Estudantes
CREATE TABLE Estudantes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    matricula VARCHAR(20),
    curso VARCHAR(50),
    senha VARCHAR(50),
    isAdmin BOOLEAN DEFAULT FALSE,
    imagem BYTEA
);

-- Verificar se a tabela Departamento existe e, se sim, excluí-la
DROP TABLE IF EXISTS Departamento CASCADE;

-- Criação da tabela Departamento
CREATE TABLE Departamento (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES Departamento(id)
);

-- Verificar se a tabela Disciplinas existe e, se sim, excluí-la
DROP TABLE IF EXISTS Disciplinas CASCADE;

-- Criação da tabela Disciplinas
CREATE TABLE Disciplinas (
    id VARCHAR(20) PRIMARY KEY,
    nome VARCHAR(100),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES Departamento(id)
);

-- Verificar se a tabela Professores existe e, se sim, excluí-la
DROP TABLE IF EXISTS Professores CASCADE;

-- Criação da tabela Professores
CREATE TABLE Professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES Departamento(id)
);

-- Verificar se a tabela Turmas existe e, se sim, excluí-la
DROP TABLE IF EXISTS Turmas CASCADE;

-- Criação da tabela Turmas
CREATE TABLE Turmas (
    id SERIAL PRIMARY KEY,
    turma INT,
    periodo VARCHAR(20),
    horario VARCHAR(50),
    vagasOcupadas INT,
    totalVagas INT,
    local VARCHAR(50),
    departamento_id INT,
    disciplina_id VARCHAR(20),
    professor_id INT,
    FOREIGN KEY (departamento_id) REFERENCES Departamento(id),
    FOREIGN KEY (disciplina_id) REFERENCES Disciplinas(id),
    FOREIGN KEY (professor_id) REFERENCES Professores(id)
);

-- Verificar se a tabela Avaliacoes existe e, se sim, excluí-la
DROP TABLE IF EXISTS Avaliacoes CASCADE;

-- Criação da tabela Avaliacoes
CREATE TABLE Avaliacoes (
    id SERIAL PRIMARY KEY,
    estudante_id INT,
    turma_id INT,
    comentario TEXT,
    nota INT,
    FOREIGN KEY (estudante_id) REFERENCES Estudantes(id),
    FOREIGN KEY (turma_id) REFERENCES Turmas(id)
);

-- Verificar se a tabela Denuncias existe e, se sim, excluí-la
DROP TABLE IF EXISTS Denuncias CASCADE;

-- Criação da tabela Denuncias
CREATE TABLE Denuncias (
    id SERIAL PRIMARY KEY,
    estudante_id INT,
    avaliacao_id INT,
    motivo VARCHAR(100),
    avaliado BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (estudante_id) REFERENCES Estudantes(id),
    FOREIGN KEY (avaliacao_id) REFERENCES Avaliacoes(id)
);

-- Finaliza a transação
COMMIT;