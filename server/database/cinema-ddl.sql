CREATE TABLE genres (
	id serial4 NOT NULL,
	title varchar(50) NOT NULL,
	description text NULL,
	CONSTRAINT genres_pkey PRIMARY KEY (id),
	CONSTRAINT genres_title_key UNIQUE (title)
);

CREATE TABLE nationalities (
	id serial4 NOT NULL,
	title varchar(10) NOT NULL,
	description text NULL,
	CONSTRAINT nationalities_pkey PRIMARY KEY (id),
	CONSTRAINT nationalities_title_key UNIQUE (title)
);

CREATE TABLE actors (
	id int4 NOT NULL DEFAULT nextval('birth_year_id_seq'::regclass),
	full_name varchar(50) NOT NULL,
	birth_year date NULL,
	death_year date NULL,
	national_id int4 NULL,
	poster_actor text NULL,
	CONSTRAINT birth_year_pkey PRIMARY KEY (id),
	CONSTRAINT birth_year_national_id_fkey FOREIGN KEY (national_id) REFERENCES nationalities(id)
);

CREATE TABLE directors (
	id serial4 NOT NULL,
	full_name varchar(50) NOT NULL,
	birth_year date NULL,
	death_year date NULL,
	national_id int4 NULL,
	poster_director text NULL,
	CONSTRAINT directors_pkey PRIMARY KEY (id),
	CONSTRAINT directors_national_id_fkey FOREIGN KEY (national_id) REFERENCES nationalities(id)
);

CREATE TABLE location (
	id serial4 NOT NULL,
	city varchar(50) NULL,
	description text NULL,
	country_id int4 NULL,
	CONSTRAINT location_pkey PRIMARY KEY (id),
	CONSTRAINT location_country_id_fkey FOREIGN KEY (country_id) REFERENCES nationalities(id)
);

CREATE TABLE studios (
	id serial4 NOT NULL,
	title varchar(100) NULL,
	logo text NULL,
	found_year date NULL,
	location_id int4 NULL,
	CONSTRAINT studios_pkey PRIMARY KEY (id),
	CONSTRAINT location_id FOREIGN KEY (location_id) REFERENCES "location"(id)
);

CREATE TABLE movies (
	id serial4 NOT NULL,
	title varchar(100) NULL,
	poster text NULL,
	release_year date NULL,
	genre_id int4 NULL,
	studio_id int4 NULL,
	CONSTRAINT movies_pkey PRIMARY KEY (id),
	CONSTRAINT movies_genre_id_fkey FOREIGN KEY (genre_id) REFERENCES genres(id),
	CONSTRAINT movies_studio_id_fkey FOREIGN KEY (studio_id) REFERENCES studios(id)
);

CREATE TABLE movies_actors (
	movie_id int4 NOT NULL,
	actor_id int4 NOT NULL,
	CONSTRAINT movies_actors_actor_id_fkey FOREIGN KEY (actor_id) REFERENCES actors(id),
	CONSTRAINT movies_actors_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES movies(id)
);

CREATE TABLE movies_directors (
	movie_id int4 NOT NULL,
	directors_id int4 NOT NULL,
	CONSTRAINT movies_directors_directors_id_fkey FOREIGN KEY (directors_id) REFERENCES directors(id),
	CONSTRAINT movies_directors_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES movies(id)
);