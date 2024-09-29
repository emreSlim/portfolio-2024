
CREATE TABLE location (
  location_id SERIAL PRIMARY KEY,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(20),
  country VARCHAR(20) NOT NULL,
  location_type VARCHAR(20) NOT NULL,
  my_profile_id INT,
  FOREIGN KEY (my_profile_id) REFERENCES my_profile(my_profile_id)
);