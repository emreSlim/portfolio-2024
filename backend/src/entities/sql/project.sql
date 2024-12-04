CREATE TABLE project (
    project_id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        description VARCHAR(2000),
        url VARCHAR(500),
        media_url VARCHAR(500),
        source_code_url VARCHAR(500),
        thumbnail_url VARCHAR(500)
);