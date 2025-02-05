--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

-- Started on 2024-11-29 16:05:00

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16542)
-- Name: experience; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.experience (
    experience_id integer NOT NULL,
    organization character varying(100),
    designation character varying(100),
    starting_date date,
    ending_date date,
    work_description character varying(1000)
);


ALTER TABLE public.experience OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16547)
-- Name: experience_experience_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.experience_experience_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.experience_experience_id_seq OWNER TO postgres;

--
-- TOC entry 4010 (class 0 OID 0)
-- Dependencies: 216
-- Name: experience_experience_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.experience_experience_id_seq OWNED BY public.experience.experience_id;


--
-- TOC entry 217 (class 1259 OID 16548)
-- Name: location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.location (
    location_id integer NOT NULL,
    city character varying(20) NOT NULL,
    state character varying(20),
    country character varying(20) NOT NULL,
    location_type character varying(20) NOT NULL,
    my_profile_id integer
);


ALTER TABLE public.location OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16551)
-- Name: location_location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.location_location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.location_location_id_seq OWNER TO postgres;

--
-- TOC entry 4011 (class 0 OID 0)
-- Dependencies: 218
-- Name: location_location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.location_location_id_seq OWNED BY public.location.location_id;


--
-- TOC entry 219 (class 1259 OID 16552)
-- Name: my_profile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.my_profile (
    my_profile_id integer NOT NULL,
    email character varying(30) NOT NULL,
    first_name character varying(10) NOT NULL,
    last_name character varying(10) NOT NULL,
    nick_name character varying(20),
    phone character varying(20),
    city character varying(20),
    state character varying(20),
    country character varying(20),
    introduction character varying(500),
    about character varying(5000),
    image_url character varying(200)
);


ALTER TABLE public.my_profile OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16557)
-- Name: my_profile_my_profile_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.my_profile_my_profile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.my_profile_my_profile_id_seq OWNER TO postgres;

--
-- TOC entry 4012 (class 0 OID 0)
-- Dependencies: 220
-- Name: my_profile_my_profile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.my_profile_my_profile_id_seq OWNED BY public.my_profile.my_profile_id;


--
-- TOC entry 221 (class 1259 OID 16558)
-- Name: professional_profile; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professional_profile (
    professional_profile_id integer NOT NULL,
    platform_name character varying(20) NOT NULL,
    url character varying(200) NOT NULL,
    my_profile_id integer
);


ALTER TABLE public.professional_profile OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16561)
-- Name: professional_profile_professional_profile_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.professional_profile_professional_profile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.professional_profile_professional_profile_id_seq OWNER TO postgres;

--
-- TOC entry 4013 (class 0 OID 0)
-- Dependencies: 222
-- Name: professional_profile_professional_profile_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.professional_profile_professional_profile_id_seq OWNED BY public.professional_profile.professional_profile_id;


--
-- TOC entry 223 (class 1259 OID 16562)
-- Name: project; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.project (
    project_id integer NOT NULL,
    name character varying(50),
    description character varying(2000),
    url character varying(500),
    media_url character varying(500),
    source_code_url character varying(500),
    thumbnail_url character varying(500)
);


ALTER TABLE public.project OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16567)
-- Name: project_project_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.project_project_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.project_project_id_seq OWNER TO postgres;

--
-- TOC entry 4014 (class 0 OID 0)
-- Dependencies: 224
-- Name: project_project_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.project_project_id_seq OWNED BY public.project.project_id;


--
-- TOC entry 225 (class 1259 OID 16568)
-- Name: skill; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.skill (
    skill_id integer NOT NULL,
    name character varying(100),
    description character varying(1000),
    proficiency integer,
    experience_in_month integer,
    proficiency_level character varying(50)
);


ALTER TABLE public.skill OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16573)
-- Name: skill_skill_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.skill_skill_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.skill_skill_id_seq OWNER TO postgres;

--
-- TOC entry 4015 (class 0 OID 0)
-- Dependencies: 226
-- Name: skill_skill_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.skill_skill_id_seq OWNED BY public.skill.skill_id;


--
-- TOC entry 3817 (class 2604 OID 16574)
-- Name: experience experience_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experience ALTER COLUMN experience_id SET DEFAULT nextval('public.experience_experience_id_seq'::regclass);


--
-- TOC entry 3818 (class 2604 OID 16575)
-- Name: location location_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location ALTER COLUMN location_id SET DEFAULT nextval('public.location_location_id_seq'::regclass);


--
-- TOC entry 3819 (class 2604 OID 16576)
-- Name: my_profile my_profile_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.my_profile ALTER COLUMN my_profile_id SET DEFAULT nextval('public.my_profile_my_profile_id_seq'::regclass);


--
-- TOC entry 3820 (class 2604 OID 16577)
-- Name: professional_profile professional_profile_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professional_profile ALTER COLUMN professional_profile_id SET DEFAULT nextval('public.professional_profile_professional_profile_id_seq'::regclass);


--
-- TOC entry 3821 (class 2604 OID 16578)
-- Name: project project_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project ALTER COLUMN project_id SET DEFAULT nextval('public.project_project_id_seq'::regclass);


--
-- TOC entry 3822 (class 2604 OID 16579)
-- Name: skill skill_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skill ALTER COLUMN skill_id SET DEFAULT nextval('public.skill_skill_id_seq'::regclass);


--
-- TOC entry 3980 (class 0 OID 16542)
-- Dependencies: 215
-- Data for Name: experience; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.experience (experience_id, organization, designation, starting_date, ending_date, work_description) FROM stdin;
1	Moback	Software Developer	2021-05-03	2022-05-02	Worked as a software developer in frontend tasks using react, react native, angular. Worked as a software developer in frontend tasks using react, react native, angular
3	Moback	Senior Software Engineer	2023-05-03	\N	I worked as a frontend and backend senior engineer. I worked on several projects involving ReactJS, React Native, Nest JS, AWS Lambda.
2	Moback	Software Engineer	2022-05-03	2023-05-02	I worked as Fullstack engineer on several projects involving NestJS, ReactJS, React Native.
\.


--
-- TOC entry 3982 (class 0 OID 16548)
-- Dependencies: 217
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.location (location_id, city, state, country, location_type, my_profile_id) FROM stdin;
1	Noida	Uttar Pradesh	India	current	1
2	Noida	Uttar Pradesh	India	permanent	1
\.


--
-- TOC entry 3984 (class 0 OID 16552)
-- Dependencies: 219
-- Data for Name: my_profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.my_profile (my_profile_id, email, first_name, last_name, nick_name, phone, city, state, country, introduction, about, image_url) FROM stdin;
1	emraanqureshi9@gmail.com	Imran	Qureshi	Emre	+91 7532 866 857	\N	\N	\N	I am a self-taught full stack software engineer with a passion for creating solutions that empower users to achieve their goals. With a sharp attention to detail, competitive problem solving and analytical skills, and a deep understanding of software development, I design and build diverse systems, including web apps, mobile apps, web services, software packages, component libraries, and games.	Hi, I am Imran, from Noida, India. I am a self-taught full stack engineer started my journey in 2020 end. I started working as a software developer in starting months of 2021. Same year I started with academics in computer science field by joining University Of The People, California, USA as a student of Computer Science Associate Degree program.\nMy work focuses on building practical, user-centric solutions that solve real-world problems. Over the years, I’ve designed and developed a variety of systems, including web and mobile apps, web services, software packages, component libraries, and even games. I enjoy staying up-to-date with the latest technologies and continually challenging myself to learn and grow. I’m passionate about coding and love the process of turning ideas into functional, impactful software.	https://storage.googleapis.com/portfolio-2024-imran/images/profile_image.jpg
\.


--
-- TOC entry 3986 (class 0 OID 16558)
-- Dependencies: 221
-- Data for Name: professional_profile; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professional_profile (professional_profile_id, platform_name, url, my_profile_id) FROM stdin;
2	GitHub	https://github.com/emreSlim	1
3	LeetCode	https://leetcode.com/u/emreSlim/	1
1	LinkedIn	https://www.linkedin.com/in/imran-qureshi-92b822154/	1
\.


--
-- TOC entry 3988 (class 0 OID 16562)
-- Dependencies: 223
-- Data for Name: project; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.project (project_id, name, description, url, media_url, source_code_url, thumbnail_url) FROM stdin;
14	Archerman (Multiplayer)	Archerman is an online multiplayer game I had developed as a learning and hobby project. I have used ReactJS and HTML canvas as frontend technologies, and Nodejs as backend technology. In frontend perspective, I have focused on rendering the objects on canvas frame by frame, using Algorithms involving Physics and Geometry. In backend perspective, I have focused on developing a peer-to-peer application networking layer using WebRTC, and a signalling server using http and WebSocket, both from scratch without help of packages. Both client-side app and server are hosted on free tier accounts of Netlify.com and Render.com respectively. Hence running the game may take up to 60 seconds for the first time in a while.	https://archerman.netlify.app/	https://storage.googleapis.com/portfolio-2024-imran/videos/archerman..mp4	https://github.com/emreSlim/archer	https://storage.googleapis.com/portfolio-2024-imran/images/archerman-screenshot.png
16	Drum Kit	An online Drum Kit. Build using React JS.	https://emres-drum-kit.netlify.app/	https://storage.googleapis.com/portfolio-2024-imran/videos/drum-kit-demo.mp4	https://github.com/emreSlim/Drum-Kit	https://storage.googleapis.com/portfolio-2024-imran/images/drumkit.png
17	Movinterest	A mobile app for browsing all movies and trending movies. It is a React Native app using TMDB api.	\N	https://storage.googleapis.com/portfolio-2024-imran/videos/movinterest-demo.mp4	https://github.com/emreSlim/movinterestNew	https://storage.googleapis.com/portfolio-2024-imran/images/movinterest-screenshot.png
18	Previewer	An online editor and previewer supporting HTML and Markdown. It is built using jQuery.	https://previewer.netlify.app/	https://storage.googleapis.com/portfolio-2024-imran/videos/previewer-demo.mp4	https://github.com/emreSlim/Markdown-Previewer	https://storage.googleapis.com/portfolio-2024-imran/images/previewer.png
19	SSUP (chatting app)	SSUP is an online chatting app. I had built its client side using ReactJS with Bootstrap, and server side using express with SocketIO, while database used is MongoDB mongoose cloud.	https://ssup-chat.netlify.app/	https://storage.googleapis.com/portfolio-2024-imran/videos/ssup-demo.mp4	https://github.com/emreSlim/ssup	https://storage.googleapis.com/portfolio-2024-imran/images/ssup-screenshot.png
20	To Do	Todo is a mobile app for setting reminders. I have built it using React Native paired with Firebase notifications.	\N	https://storage.googleapis.com/portfolio-2024-imran/videos/todo-demo.mp4	https://github.com/emreSlim/todo-list-android-app	https://storage.googleapis.com/portfolio-2024-imran/images/todo.png
15	Samsung Calculator	A replica of Samsung android calculator. Built using React Native.	\N	https://storage.googleapis.com/portfolio-2024-imran/videos/calc-demo.mp4	https://github.com/emreSlim/formula-calculator-android	https://storage.googleapis.com/portfolio-2024-imran/images/calc.png
21	Portfolio	This portfolio app I have built using ReactJS in frontend, and NestJS and Postgres in backend. I have hosted the frontend in netlify while server, db, and storage are hosted on Google cloud.	https://dev-imran.netlify.app/	https://storage.googleapis.com/portfolio-2024-imran/videos/portfolio-demo.mp4	https://github.com/emreSlim/portfolio-2024	https://storage.googleapis.com/portfolio-2024-imran/images/portfolio.png
22	Colliding Balls Simulation	Colliding Balls Simulation is an NPM package I have created which demonstrates perfectly elastic collision and deflection of perfectly round objects of different sizes.	https://www.npmjs.com/package/colliding-balls-simulation	https://storage.googleapis.com/portfolio-2024-imran/videos/colliding-balls.mp4	https://github.com/emreSlim/forces/tree/colliding-balls	https://storage.googleapis.com/portfolio-2024-imran/images/colliding-balls.png
23	Typesgenerator	Typesgenerator is a typescript type utility NPM package and CLI. It can be used to generator types from JSON or JS objects.	https://www.npmjs.com/package/typesgenerator	https://storage.googleapis.com/portfolio-2024-imran/videos/typesgenerator.mp4	https://github.com/emreSlim/typesgenerator	https://storage.googleapis.com/portfolio-2024-imran/images/typesgenerator.png
24	Tetris	Tetris is a JavaScript game I have build which runs on HTML canvas.	https://tetris-blocks.netlify.app/	https://storage.googleapis.com/portfolio-2024-imran/videos/tetris.mp4	https://github.com/emreSlim/tetris	https://storage.googleapis.com/portfolio-2024-imran/images/tetris.png
\.


--
-- TOC entry 3990 (class 0 OID 16568)
-- Dependencies: 225
-- Data for Name: skill; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.skill (skill_id, name, description, proficiency, experience_in_month, proficiency_level) FROM stdin;
1	React js	I have worked on serveral projects involving react.	9	30	advance
3	JavaScript	JavaScript is the programming language I had started with and worked with mostly.	8	40	advance
4	CSS	I have worked on several projects using CSS.	8	30	advance
5	React Native	I have worked on several projects involving React Native.	8	24	advance
6	Java	Java is my favorite programming language for solving DSA problems.	5	12	intermediate
7	ExpressJS	Express JS is the NodeJS library I have used for building many small sized servers.	5	18	intermediate
8	SpringBoot	SpringBoot is the java framework I am familiar with.	1	2	beginner
9	Python(programming language)	Python is one of the first programming language I learned.	1	2	beginner
10	SQL	I have worked with SQL for few projects.	3	3	beginner
2	Nest js	I have been recently working on NestJS projects.	9	18	advance
11	HTML	I have worked on many frontend ReactJS, jQuery projects, which involved working with HTML.	8	30	advance
12	GIT	I have good understanding of GIT version control system.	8	40	advance
13	Bash	I have completed a crash course of bash scripting.	2	2	beginner
14	Data Structures and Algorithms	I am fond of solving DSA problems.	9	36	advance
16	AWS	I have worked on Lambda functions (NodeJS), familiar with S3 and SQS	3	2	beginner
15	Google Cloud	I have used Google Cloud services in few of my projects. Services I am familiar with are firebase distribution, google analytics, google cloud run, google storage, google SQL, and google cloud build.	3	3	beginner
\.


--
-- TOC entry 4016 (class 0 OID 0)
-- Dependencies: 216
-- Name: experience_experience_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.experience_experience_id_seq', 3, true);


--
-- TOC entry 4017 (class 0 OID 0)
-- Dependencies: 218
-- Name: location_location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.location_location_id_seq', 2, true);


--
-- TOC entry 4018 (class 0 OID 0)
-- Dependencies: 220
-- Name: my_profile_my_profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.my_profile_my_profile_id_seq', 1, true);


--
-- TOC entry 4019 (class 0 OID 0)
-- Dependencies: 222
-- Name: professional_profile_professional_profile_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.professional_profile_professional_profile_id_seq', 5, true);


--
-- TOC entry 4020 (class 0 OID 0)
-- Dependencies: 224
-- Name: project_project_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.project_project_id_seq', 24, true);


--
-- TOC entry 4021 (class 0 OID 0)
-- Dependencies: 226
-- Name: skill_skill_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.skill_skill_id_seq', 16, true);


--
-- TOC entry 3824 (class 2606 OID 16581)
-- Name: experience experience_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.experience
    ADD CONSTRAINT experience_pkey PRIMARY KEY (experience_id);


--
-- TOC entry 3826 (class 2606 OID 16583)
-- Name: location location_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_pkey PRIMARY KEY (location_id);


--
-- TOC entry 3828 (class 2606 OID 16585)
-- Name: my_profile my_profile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.my_profile
    ADD CONSTRAINT my_profile_pkey PRIMARY KEY (my_profile_id);


--
-- TOC entry 3830 (class 2606 OID 16587)
-- Name: professional_profile professional_profile_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professional_profile
    ADD CONSTRAINT professional_profile_pkey PRIMARY KEY (professional_profile_id);


--
-- TOC entry 3832 (class 2606 OID 16589)
-- Name: project project_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.project
    ADD CONSTRAINT project_pkey PRIMARY KEY (project_id);


--
-- TOC entry 3834 (class 2606 OID 16591)
-- Name: skill skill_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skill
    ADD CONSTRAINT skill_pkey PRIMARY KEY (skill_id);


--
-- TOC entry 3835 (class 2606 OID 16592)
-- Name: location location_my_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT location_my_profile_id_fkey FOREIGN KEY (my_profile_id) REFERENCES public.my_profile(my_profile_id);


--
-- TOC entry 3836 (class 2606 OID 16597)
-- Name: professional_profile professional_profile_my_profile_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professional_profile
    ADD CONSTRAINT professional_profile_my_profile_id_fkey FOREIGN KEY (my_profile_id) REFERENCES public.my_profile(my_profile_id);


--
-- TOC entry 3997 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT ALL ON SCHEMA public TO cloudsqlsuperuser;


--
-- TOC entry 3998 (class 0 OID 0)
-- Dependencies: 227
-- Name: FUNCTION pg_replication_origin_advance(text, pg_lsn); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_advance(text, pg_lsn) TO cloudsqlsuperuser;


--
-- TOC entry 3999 (class 0 OID 0)
-- Dependencies: 236
-- Name: FUNCTION pg_replication_origin_create(text); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_create(text) TO cloudsqlsuperuser;


--
-- TOC entry 4000 (class 0 OID 0)
-- Dependencies: 228
-- Name: FUNCTION pg_replication_origin_drop(text); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_drop(text) TO cloudsqlsuperuser;


--
-- TOC entry 4001 (class 0 OID 0)
-- Dependencies: 229
-- Name: FUNCTION pg_replication_origin_oid(text); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_oid(text) TO cloudsqlsuperuser;


--
-- TOC entry 4002 (class 0 OID 0)
-- Dependencies: 230
-- Name: FUNCTION pg_replication_origin_progress(text, boolean); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_progress(text, boolean) TO cloudsqlsuperuser;


--
-- TOC entry 4003 (class 0 OID 0)
-- Dependencies: 231
-- Name: FUNCTION pg_replication_origin_session_is_setup(); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_is_setup() TO cloudsqlsuperuser;


--
-- TOC entry 4004 (class 0 OID 0)
-- Dependencies: 232
-- Name: FUNCTION pg_replication_origin_session_progress(boolean); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_progress(boolean) TO cloudsqlsuperuser;


--
-- TOC entry 4005 (class 0 OID 0)
-- Dependencies: 237
-- Name: FUNCTION pg_replication_origin_session_reset(); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_reset() TO cloudsqlsuperuser;


--
-- TOC entry 4006 (class 0 OID 0)
-- Dependencies: 233
-- Name: FUNCTION pg_replication_origin_session_setup(text); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_setup(text) TO cloudsqlsuperuser;


--
-- TOC entry 4007 (class 0 OID 0)
-- Dependencies: 234
-- Name: FUNCTION pg_replication_origin_xact_reset(); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_reset() TO cloudsqlsuperuser;


--
-- TOC entry 4008 (class 0 OID 0)
-- Dependencies: 235
-- Name: FUNCTION pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone) TO cloudsqlsuperuser;


--
-- TOC entry 4009 (class 0 OID 0)
-- Dependencies: 238
-- Name: FUNCTION pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn) TO cloudsqlsuperuser;


-- Completed on 2024-11-29 16:05:31

--
-- PostgreSQL database dump complete
--



CREATE TABLE experience (
  experience_id INTEGER PRIMARY KEY AUTOINCREMENT,
  organization TEXT,
  designation TEXT,
  starting_date DATE,
  ending_date DATE,
  work_description TEXT
);

CREATE TABLE location (
  location_id INTEGER PRIMARY KEY AUTOINCREMENT,
  city TEXT NOT NULL,
  state TEXT,
  country TEXT NOT NULL,
  location_type TEXT NOT NULL,
  my_profile_id INTEGER,
  FOREIGN KEY (my_profile_id) REFERENCES my_profile(my_profile_id)
);

CREATE TABLE my_profile (
  my_profile_id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  nick_name TEXT,
  phone TEXT,
  city TEXT,
  state TEXT,
  country TEXT,
  introduction TEXT,
  about TEXT,
  image_url TEXT
);

CREATE TABLE professional_profile (
  professional_profile_id INTEGER PRIMARY KEY AUTOINCREMENT,
  platform_name TEXT NOT NULL,
  url TEXT NOT NULL,
  my_profile_id INTEGER,
  FOREIGN KEY (my_profile_id) REFERENCES my_profile(my_profile_id)
);

CREATE TABLE project (
  project_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  url TEXT,
  media_url TEXT,
  source_code_url TEXT,
  thumbnail_url TEXT
);

CREATE TABLE skill (
  skill_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  description TEXT,
  proficiency INTEGER,
  experience_in_month INTEGER,
  proficiency_level TEXT
);

INSERT INTO experience (experience_id, organization, designation, starting_date, ending_date, work_description) VALUES
(1, 'Moback', 'Software Developer', '2021-05-03', '2022-05-02', 'Worked as a software developer in frontend tasks using react, react native, angular. Worked as a software developer in frontend tasks using react, react native, angular'),
(3, 'Moback', 'Senior Software Engineer', '2023-05-03', NULL, 'I worked as a frontend and backend senior engineer. I worked on several projects involving ReactJS, React Native, Nest JS, AWS Lambda.'),
(2, 'Moback', 'Software Engineer', '2022-05-03', '2023-05-02', 'I worked as Fullstack engineer on several projects involving NestJS, ReactJS, React Native.');

INSERT INTO location (location_id, city, state, country, location_type, my_profile_id) VALUES
(1, 'Noida', 'Uttar Pradesh', 'India', 'current', 1),
(2, 'Noida', 'Uttar Pradesh', 'India', 'permanent', 1);

INSERT INTO my_profile (my_profile_id, email, first_name, last_name, nick_name, phone, city, state, country, introduction, about, image_url) VALUES
(1, 'emraanqureshi9@gmail.com', 'Imran', 'Qureshi', 'Emre', '+91 7532 866 857', NULL, NULL, NULL, 'I am a self-taught full stack software engineer with a passion for creating solutions that empower users to achieve their goals. With a sharp attention to detail, competitive problem solving and analytical skills, and a deep understanding of software development, I design and build diverse systems, including web apps, mobile apps, web services, software packages, component libraries, and games.', 'Hi, I am Imran, from Noida, India. I am a self-taught full stack engineer started my journey in 2020 end. I started working as a software developer in starting months of 2021. Same year I started with academics in computer science field by joining University Of The People, California, USA as a student of Computer Science Associate Degree program.\nMy work focuses on building practical, user-centric solutions that solve real-world problems. Over the years, I’ve designed and developed a variety of systems, including web and mobile apps, web services, software packages, component libraries, and even games. I enjoy staying up-to-date with the latest technologies and continually challenging myself to learn and grow. I’m passionate about coding and love the process of turning ideas into functional, impactful software.', 'https://storage.googleapis.com/portfolio-2024-imran/images/profile_image.jpg');

INSERT INTO professional_profile (professional_profile_id, platform_name, url, my_profile_id) VALUES
(2, 'GitHub', 'https://github.com/emreSlim', 1),
(3, 'LeetCode', 'https://leetcode.com/u/emreSlim/', 1),
(1, 'LinkedIn', 'https://www.linkedin.com/in/imran-qureshi-92b822154/', 1);

INSERT INTO project (project_id, name, description, url, media_url, source_code_url, thumbnail_url) VALUES
(14, 'Archerman (Multiplayer)', 'Archerman is an online multiplayer game I had developed as a learning and hobby project. I have used ReactJS and HTML canvas as frontend technologies, and Nodejs as backend technology. In frontend perspective, I have focused on rendering the objects on canvas frame by frame, using Algorithms involving Physics and Geometry. In backend perspective, I have focused on developing a peer-to-peer application networking layer using WebRTC, and a signalling server using http and WebSocket, both from scratch without help of packages. Both client-side app and server are hosted on free tier accounts of Netlify.com and Render.com respectively. Hence running the game may take up to 60 seconds for the first time in a while.', 'https://archerman.netlify.app/', 'https://storage.googleapis.com/portfolio-2024-imran/videos/archerman..mp4', 'https://github.com/emreSlim/archer', 'https://storage.googleapis.com/portfolio-2024-imran/images/archerman-screenshot.png'),
(16, 'Drum Kit', 'An online Drum Kit. Build using React JS.', 'https://emres-drum-kit.netlify.app/', 'https://storage.googleapis.com/portfolio-2024-imran/videos/drum-kit-demo.mp4', 'https://github.com/emreSlim/Drum-Kit', 'https://storage.googleapis.com/portfolio-2024-imran/images/drumkit.png'),
(17, 'Movinterest', 'A mobile app for browsing all movies and trending movies. It is a React Native app using TMDB api.', NULL, 'https://storage.googleapis.com/portfolio-2024-imran/videos/movinterest-demo.mp4', 'https://github.com/emreSlim/movinterestNew', 'https://storage.googleapis.com/portfolio-2024-imran/images/movinterest-screenshot.png'),
(18, 'Previewer', 'An online editor and previewer supporting HTML and Markdown. It is built using jQuery.', 'https://previewer.netlify.app/', 'https://storage.googleapis.com/portfolio-2024-imran/videos/previewer-demo.mp4', 'https://github.com/emreSlim/Markdown-Previewer', 'https://storage.googleapis.com/portfolio-2024-imran/images/previewer.png'),
(19, 'SSUP (chatting app)', 'SSUP is an online chatting app. I had built its client side using ReactJS with Bootstrap, and server side using express with SocketIO, while database used is MongoDB mongoose cloud.', 'https://ssup-chat.netlify.app/', 'https://storage.googleapis.com/portfolio-2024-imran/videos/ssup-demo.mp4', 'https://github.com/emreSlim/ssup', 'https://storage.googleapis.com/portfolio-2024-imran/images/ssup-screenshot.png'),
(20, 'To Do', 'Todo is a mobile app for setting reminders. I have built it using React Native paired with Firebase notifications.', NULL, 'https://storage.googleapis.com/portfolio-2024-imran/videos/todo-demo.mp4', 'https://github.com/emreSlim/todo-list-android-app', 'https://storage.googleapis.com/portfolio-2024-imran/images/todo.png'),
(15, 'Samsung Calculator', 'A replica of Samsung android calculator. Built using React Native.', NULL, 'https://storage.googleapis.com/portfolio-2024-imran/videos/calc-demo.mp4', 'https://github.com/emreSlim/formula-calculator-android', 'https://storage.googleapis.com/portfolio-2024-imran/images/calc.png'),
(21, 'Portfolio', 'This portfolio app I have built using ReactJS in frontend, and NestJS and Postgres in backend. I have hosted the frontend in netlify while server, db, and storage are hosted on Google cloud.', 'https://dev-imran.netlify.app/', 'https://storage.googleapis.com/portfolio-2024-imran/videos/portfolio-demo.mp4', 'https://github.com/emreSlim/portfolio-2024', 'https://storage.googleapis.com/portfolio-2024-imran/images/portfolio.png'),
(22, 'Colliding Balls Simulation', 'Colliding Balls Simulation is an NPM package I have created which demonstrates perfectly elastic collision and deflection of perfectly round objects of different sizes.', 'https://www.npmjs.com/package/colliding-balls-simulation', 'https://storage.googleapis.com/portfolio-2024-imran/videos/colliding-balls.mp4', 'https://github.com/emreSlim/forces/tree/colliding-balls', 'https://storage.googleapis.com/portfolio-2024-imran/images/colliding-balls.png'),
(23, 'Typesgenerator', 'Typesgenerator is a typescript type utility NPM package and CLI. It can be used to generator types from JSON or JS objects.', 'https://www.npmjs.com/package/typesgenerator', 'https://storage.googleapis.com/portfolio-2024-imran/videos/typesgenerator.mp4', 'https://github.com/emreSlim/typesgenerator', 'https://storage.googleapis.com/portfolio-2024-imran/images/typesgenerator.png'),
(24, 'Tetris', 'Tetris is a JavaScript game I have build which runs on HTML canvas.', 'https://tetris-blocks.netlify.app/', 'https://storage.googleapis.com/portfolio-2024-imran/videos/tetris.mp4', 'https://github.com/emreSlim/tetris', 'https://storage.googleapis.com/portfolio-2024-imran/images/tetris.png');

INSERT INTO skill (skill_id, name, description, proficiency, experience_in_month, proficiency_level) VALUES
(1, 'React js', 'I have worked on serveral projects involving react.', 9, 30, 'advance'),
(3, 'JavaScript', 'JavaScript is the programming language I had started with and worked with mostly.', 8, 40, 'advance'),
(4, 'CSS', 'I have worked on several projects using CSS.', 8, 30, 'advance'),
(5, 'React Native', 'I have worked on several projects involving React Native.', 8, 24, 'advance'),
(6, 'Java', 'Java is my favorite programming language for solving DSA problems.', 5, 12, 'intermediate'),
(7, 'ExpressJS', 'Express JS is the NodeJS library I have used for building many small sized servers.', 5, 18, 'intermediate'),
(8, 'SpringBoot', 'SpringBoot is the java framework I am familiar with.', 1, 2, 'beginner'),
(9, 'Python(programming language)', 'Python is one of the first programming language I learned.', 1, 2, 'beginner'),
(10, 'SQL', 'I have worked with SQL for few projects.', 3, 3, 'beginner'),
(2, 'Nest js', 'I have been recently working on NestJS projects.', 9, 18, 'advance'),
(11, 'HTML', 'I have worked on many frontend ReactJS, jQuery projects, which involved working with HTML.', 8, 30, 'advance'),
(12, 'GIT', 'I have good understanding of GIT version control system.', 8, 40, 'advance'),
(13, 'Bash', 'I have completed a crash course of bash scripting.', 2, 2, 'beginner'),
(14, 'Data Structures and Algorithms', 'I am fond of solving DSA problems.', 9, 36, 'advance'),
(16, 'AWS', 'I have worked on Lambda functions (NodeJS), familiar with S3 and SQS', 3, 2, 'beginner'),
(15, 'Google Cloud', 'I have used Google Cloud services in few of my projects. Services I am familiar with are firebase distribution, google analytics, google cloud run, google storage, google SQL, and google cloud build.', 3, 3, 'beginner');