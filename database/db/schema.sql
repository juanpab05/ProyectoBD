-- #######################################################
-- file:schema.sql
-- Database Course 2024
-- Univalle
-- @JAPeTo
-- #######################################################

\c pos_course

CREATE TABLE rol(
    id_rol SERIAL PRIMARY KEY,
    nombre_rol VARCHAR(50)
);

CREATE TABLE usuario(
    id_usuario SERIAL PRIMARY KEY,
    id_rol INTEGER NOT NULL,
    FOREIGN KEY (id_rol) REFERENCES rol,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    correo VARCHAR(100),
    contraseña VARCHAR(30),
    cedula VARCHAR(20),
    direccion VARCHAR(200),
    esMonitor BOOLEAN,
    foto VARCHAR(100),
    telefono VARCHAR(50),
    foto_registro VARCHAR(100),
    codigo VARCHAR(20)
);

CREATE TABLE curso(
    id_curso SERIAL PRIMARY KEY,
    qr_curso VARCHAR(15),
    nombre_curso VARCHAR(100)
);

CREATE TABLE profesorCurso(
    id_curso INTEGER NOT NULL,
    id_usuario INTEGER NOT NULL,
    PRIMARY KEY (id_curso, id_usuario),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
);

CREATE TABLE matricula(
    id_usuario INTEGER NOT NULL,
    id_curso INTEGER NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario,
    FOREIGN KEY (id_curso) REFERENCES curso
);

CREATE TABLE clase(
    id_clase SERIAL PRIMARY KEY,
    id_curso INTEGER NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES curso,
    fecha_clase DATE,
	hora_clase TIME,
    qr_asistencia VARCHAR(200),
	materialClase VARCHAR(200)
);

CREATE TABLE asistencia(
    id_usuario INTEGER NOT NULL,
    id_clase INTEGER NOT NULL,
    longitud FLOAT,
    latitud FLOAT,
    PRIMARY KEY (id_usuario, id_clase),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_clase) REFERENCES clase(id_clase)
);

CREATE TABLE pregunta(
    id_pregunta SERIAL PRIMARY KEY,
	id_clase INTEGER NOT NULL,
	FOREIGN KEY (id_clase) REFERENCES clase,
    qr_pregunta VARCHAR(200),
    texto_pregunta TEXT
);

CREATE TABLE opcion(
    id_opcion SERIAL PRIMARY KEY,
    id_pregunta INTEGER NOT NULL,
    FOREIGN KEY (id_pregunta) REFERENCES pregunta,
    texto_opcion TEXT,
    esCorrecta BOOLEAN
);

CREATE TABLE EstudianteOpcion(
    id_usuario INTEGER NOT NULL,
    id_opcion INTEGER NOT NULL,
    PRIMARY KEY (id_usuario, id_opcion),
    FOREIGN KEY (id_usuario) REFERENCES usuario,
    FOREIGN KEY (id_opcion) REFERENCES opcion
);
