SELECT c.id, c.title,
    COUNT(v.id) AS votes,
    (CAST(COUNT(v.id) AS FLOAT) / (SELECT COUNT(*) FROM users))* 100.0 AS turnout_pct
    FROM campaigns c
    LEFT JOIN votes v ON v.campaign_ig = c.id
    GROUP BY c.id;