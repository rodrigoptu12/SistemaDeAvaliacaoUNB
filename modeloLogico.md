Departamentos (id PK, nome)

Professores (id PK, nome, departamento_id FK -> Departamentos.id)

Disciplinas (id PK, nome, departamento_id FK -> Departamentos.id)

Estudantes (id PK, nome, email, matricula, curso, senha)

Turmas (id PK, disciplina_id FK -> Disciplinas.id, professor_id FK -> Professores.id)

Avaliacoes (id PK, estudante_id FK -> Estudantes.id, turma_id FK -> Turmas.id, comentario)

Denuncias (id PK, estudante_id FK -> Estudantes.id, avaliacao_id FK -> Avaliacoes.id, motivo, avaliado)
