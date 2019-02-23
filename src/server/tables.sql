CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    photo_url TEXT,
    username TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS feeds (
    id SERIAL PRIMARY KEY,
    title TEXT,
    user_id INT,
    date_created DATE NOT NULL DEFAULT CURRENT_DATE,
    date_updated DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);