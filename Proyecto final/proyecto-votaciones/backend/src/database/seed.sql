-- Users (recuerda: en producción hash con bcrypt)
INSERT INTO users (name, email, password, role) VALUES
('Tony Ramirez', 'tony@example.com', 'HASHED_PASSWORD_1', 'admin'),
('Ana Lopez', 'ana@example.com', 'HASHED_PASSWORD_2', 'voter');

-- Campaigns
INSERT INTO campaigns (title, description, status, start_date, end_date) VALUES
('Elecciones 2025', 'Votación anual del Colegio', 'active', '2025-10-01 08:00:00', '2025-10-10 23:59:59');

-- Candidates (asumiendo campaign id = 1)
INSERT INTO candidates (campaign_id, name, bio) VALUES
(1, 'Candidato A', 'Bio A'),
(1, 'Candidato B', 'Bio B');