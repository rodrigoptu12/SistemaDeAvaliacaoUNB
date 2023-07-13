BEGIN;

-- Inicia uma transação
CREATE
OR REPLACE VIEW Avaliacoes_Completas AS
SELECT
    A.id,
    E.nome AS estudante,
    T.id AS turma,
    A.comentario
FROM
    Avaliacoes A
    JOIN Estudantes E ON A.estudante_id = E.id
    JOIN Turmas T ON A.turma_id = T.id;

-- id: O ID da avaliação.
-- estudante: O nome do estudante que fez a avaliação.
-- turma: O ID da turma relacionada à avaliação.
-- comentario: O texto do comentário feito na avaliação.
COMMIT;

-- Finaliza a transação