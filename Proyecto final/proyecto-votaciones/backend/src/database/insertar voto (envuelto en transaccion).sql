BEGIN;
-- opcional: re-check que no exista
SELECT 1 FROM votes WHERE user_id = ? AND campaign_id = ? FOR UPDATE;
-- si no existe:
INSERT INTO votes (user_id, campaign_id, candidate_id) VALUES (?, ?, ?);
COMMIT;