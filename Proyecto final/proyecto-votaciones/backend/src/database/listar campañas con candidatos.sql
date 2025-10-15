SELECT c.id AS campaign_id, c.title, cand.id AS candidate_id, cand.name AS candidate_name
FROM campaigns c
LEFT JOIN candidates cand ON cand.campaign_id = c.id
WHERE c.status = 'active';