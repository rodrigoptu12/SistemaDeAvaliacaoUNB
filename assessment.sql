-- Criação das tabelas
CREATE TABLE Departamentos (id INT PRIMARY KEY, nome VARCHAR(100));

CREATE TABLE Estudantes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    matricula VARCHAR(20),
    curso VARCHAR(50),
    senha VARCHAR(50),
    isAdmin BOOLEAN DEFAULT FALSE
);

CREATE TABLE Professores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES Departamentos(id)
);

CREATE TABLE Disciplinas (
    id VARCHAR(20) PRIMARY KEY,
    nome VARCHAR(100),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES Departamentos(id)
);

CREATE TABLE Turmas (
    id SERIAL PRIMARY KEY,
    turma INT,
    periodo VARCHAR(20),
    horario VARCHAR(50),
    vagasOcupadas INT,
    totalVagas INT,
    local_ VARCHAR(50),
    departamento_id INT,
    disciplina_id VARCHAR(20),
    professor_id INT,
    FOREIGN KEY (departamento_id) REFERENCES Departamentos(id),
    FOREIGN KEY (disciplina_id) REFERENCES Disciplinas(id),
    FOREIGN KEY (professor_id) REFERENCES Professores(id)
);

CREATE TABLE Avaliacoes (
    id SERIAL PRIMARY KEY,
    estudante_id INT,
    turma_id INT,
    comentario TEXT,
    FOREIGN KEY (estudante_id) REFERENCES Estudantes(id),
    FOREIGN KEY (turma_id) REFERENCES Turmas(id)
);

CREATE TABLE Denuncias (
    id SERIAL PRIMARY KEY,
    estudante_id INT,
    avaliacao_id INT,
    motivo VARCHAR(100),
    avaliado BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (estudante_id) REFERENCES Estudantes(id),
    FOREIGN KEY (avaliacao_id) REFERENCES Avaliacoes(id)
);