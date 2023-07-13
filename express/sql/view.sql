DROP VIEW IF EXISTS TurmasMediaNotas;

CREATE MATERIALIZED VIEW TurmasMediaNotas AS
SELECT t.id AS turma_id, d.nome AS disciplina, t.turma, AVG(a.nota) AS media_notas
FROM Turmas t
LEFT JOIN Avaliacoes a ON t.id = a.turma_id
INNER JOIN Disciplinas d ON t.disciplina_id = d.id
GROUP BY t.id, d.nome, t.turma
ORDER BY media_notas DESC;
