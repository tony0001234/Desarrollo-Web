SELECT cand.id, cand.name, COUNT(v.id) AS votes
FROM candidates cand
LEFT JOIN votes v ON v.candidate_id = cand.id
WHERE cand.campaign_id = ?
GROUP BY cand.id, cand.name
ORDER BY votes DESC;