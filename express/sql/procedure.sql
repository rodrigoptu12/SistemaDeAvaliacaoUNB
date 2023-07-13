-- BEGIN;

-- -- Inicia uma transação
-- -- Exemplo de criação de uma Procedure no SQL Server
-- CREATE
-- OR REPLACE PROCEDURE RemoverComentarioOfensivo (id_avaliacao INT) LANGUAGE plpgsql AS $ $ BEGIN
-- UPDATE
--   Denuncias
-- SET
--   avaliado = TRUE
-- WHERE
--   avaliacao_id = id_avaliacao;

-- DELETE FROM
--   Avaliacoes
-- WHERE
--   id = id_avaliacao;

-- END $ $;

-- COMMIT;

-- -- Finaliza a transação