CREATE TABLE my_profile (
  my_profile_id SERIAL PRIMARY KEY,
  email VARCHAR(30) NOT NULL,
  first_name VARCHAR(10) NOT NULL,
  last_name VARCHAR(10) NOT NULL,
  nick_name VARCHAR(20),
  phone VARCHAR(20),
  city VARCHAR(20),
  state VARCHAR(20),
  country VARCHAR(20),
  introduction VARCHAR(500),
  about VARCHAR(5000),
  image_url VARCHAR(200)
);