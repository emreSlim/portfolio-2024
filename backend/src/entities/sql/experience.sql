CREATE TABLE experience (
    experience_id SERIAL PRIMARY KEY,
    organization VARCHAR(100),
    designation VARCHAR(100),
    starting_date DATE,
    ending_date DATE,
    work_description VARCHAR(1000)
);