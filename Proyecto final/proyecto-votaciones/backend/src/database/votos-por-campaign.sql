SELECT c.id AS campaign_id, c.title, COUNT(v.id) AS votes
FROM campaigns c
LEFT JOIN votes v ON v.campaign_id = c.id
GROUP BY c.id
ORDER BY votes DESC;