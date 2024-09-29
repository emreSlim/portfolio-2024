CREATE TABLE professional_profile (
  professional_profile_id SERIAL PRIMARY KEY,
  platform_name VARCHAR(20) NOT NULL,
  url VARCHAR(200) NOT NULL,
  my_profile_id INT,
  FOREIGN KEY (my_profile_id) REFERENCES my_profile(my_profile_id)
);