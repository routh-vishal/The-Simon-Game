CREATE TABLE form (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    highscore INT DEFAULT 0
);
