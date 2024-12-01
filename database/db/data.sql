-- #######################################################
-- file:data.sql
-- Database Course 2024
-- Univalle
-- @JAPeTo
-- #######################################################

\c pos_course

INSERT INTO rol(nombre_rol)
VALUES('Administrador'),
('Profesor'),
('Estudiante');

/*Insertar admins*/
INSERT INTO usuario(id_rol, nombre, apellido, correo, contraseña)
VALUES(1, 'Juan Pablo', 'Pazmiño', 'juan.pazmino@gmail.com', 'qwerty123'),
(1, 'Jonier', 'Fernandez Martinez', 'jonierfm@gmail.com', '123456');

/*Insertar profesores*/
INSERT INTO usuario(id_rol, nombre, apellido, correo, contraseña, cedula, direccion, esMonitor, foto)
VALUES(2, 'Roberto', 'Domingo', 'robertd85@gmail.com', 'ironman111', '11451', 'Calle 14 #12-32', FALSE, 'https://drive.google.com/file/d/1YeLlJ_8JlGFlSZwmHE2LHfkPh0qO0s6o/view?usp=drive_link'),
(2, 'Jose', 'Mendez', 'jomendez04@gmail.com', 'chocolate55', '14788', 'Calle 123', TRUE, 'link'),
(2, 'Juan', 'Pérez', 'juan.perez@example.com', 'password123', '1234567890', '123 Calle Falsa', FALSE, 'link'),
(2, 'María', 'García', 'maria.garcia@example.com', 'password456', '2345678901', '456 Avenida Verdadera', FALSE, 'link'),
(2, 'Carlos', 'Rodríguez', 'carlos.rodriguez@example.com', 'password789', '3456789012', '789 Boulevard Real', TRUE, 'link'),
(2, 'Ana', 'López', 'ana.lopez@example.com', 'password101', '4567890123', '1011 Calle Principal, Ciudad W', FALSE, 'link'),
(2, 'Pedro', 'Martínez', 'pedro.martinez@example.com', 'password112', '5678901234', '1213 Avenida Segunda', TRUE, 'link'),
(2, 'Laura', 'Hernández', 'laura.hernandez@example.com', 'password131', '6789012345', '1415 Plaza Tercera', FALSE, 'link'),
(2, 'Sofía', 'González', 'sofia.gonzalez@example.com', 'password415', '7890123456', '1617 Camino Cuarto', FALSE, 'link'),
(2, 'Miguel', 'Ramírez', 'miguel.ramirez@example.com', 'password161', '8901234567', '1819 Via Quinta', TRUE, 'link');

/*Insertar estudiantes*/
INSERT INTO usuario(id_rol, nombre, apellido, correo, contraseña, telefono, foto_registro, codigo)
VALUES(3, 'Jose Pedro', 'Patiño', 'juan.patino@gmail.com', 'roblox7777', '31563', 'https://drive.google.com/file/d/18om0Jp3lT9jmd6buR9gthHovJ13SaAG-/view?usp=drive_link', '2523'),
(3, 'Samuel', 'Moncada', 'samuel.moncada@gmail.com', 'gokuvegeta123', '31487', 'link', '2423'),
(3, 'Alejandro', 'Mendoza', 'alejandro.mendoza@example.com', 'pass123', '31012', 'link', '2126'),
(3, 'Beatriz', 'Torres', 'beatriz.torres@example.com', 'pass456', '32023', 'link', '2478'),
(3, 'Camila', 'Ramírez', 'camila.ramirez@example.com', 'pass789', '33034', 'link', '1987'),
(3, 'David', 'Soto', 'david.soto@example.com', 'pass101', '340450', 'link', '2029'),
(3, 'Elena', 'Cruz', 'elena.cruz@example.com', 'pass112', '35056', 'link', '2789'),
(3, 'Fernando', 'Luna', 'fernando.luna@example.com', 'pass131', '36067', 'link', '2354'),
(3, 'Gabriela', 'Vega', 'gabriela.vega@example.com', 'pass415', '37078', 'link', '2212'),
(3, 'Héctor', 'Morales', 'hector.morales@example.com', 'pass161', '380890', 'link', '2111');


INSERT INTO curso(qr_curso, nombre_curso)
VALUES('14578b', 'Quimica inorganica'),
('24721a', 'Matematicas basicas'),
('15897b', 'Geografía'),
('22478a', 'Algebra lineal'),
('26578b', 'Ingles'),
('14589b', 'Quimica organica'),
('24758a', 'Calculo 1'),
('15658b', 'Natacion'),
('22478a', 'Fisica'),
('26565b', 'Aleman');

INSERT INTO profesorCurso(id_usuario, id_curso)
VALUES(3, 1), (4, 1), (5, 2), (5, 4), (6, 3), (7, 3), (8, 4), (9, 4), (10, 5), (3, 6), (11, 7), (11, 9), (12, 9);

INSERT INTO clase(id_curso, fecha_clase, hora_clase, qr_asistencia, materialClase)
VALUES(1, '2024-11-20', '10:00', 'ejemplo', ('Link1', 'link2')),
(2, '2024-11-02', '10:00', 'qr_link', ('Link1', 'link2')),
(3, '2024-11-03', '11:00', 'qr_link', ('Link1', 'link2')),
(4, '2024-11-04', '12:00', 'qr_link', ('Link1', 'link2')),
(5, '2024-11-05', '13:00', 'qr_link', ('Link1', 'link2')),
(6, '2024-11-06', '14:00', 'qr_link', ('Link1', 'link2')),
(7, '2024-11-07', '15:00', 'qr_link', ('Link1', 'link2')),
(8, '2024-11-08', '16:00', 'qr_link', ('Link1', 'link2')),
(9, '2024-11-09', '17:00', 'qr_link', ('Link1', 'link2')),
(10, '2024-11-10', '18:00', 'qr_link', ('Link1', 'link2'));

INSERT INTO matricula(id_usuario, id_curso)
VALUES(13, 1), (14, 2), (15, 3), (16, 4), (17, 5), (18, 6), (19, 7), (20, 8), (21, 9), (22, 10);

INSERT INTO asistencia(id_usuario, id_clase, longitud, latitud)
VALUES(13, 1, -75.690308, 4.813331),
(14, 2, -74.072092, 4.710989),
(15, 3, -75.514442, 10.987398),
(16, 4, -76.529984, 3.451647),
(17, 5, -77.281903, 1.213610),
(18, 6, -75.581211, 6.214612),
(19, 7, -76.500000, 8.000000),
(20, 8, -77.897213, 11.537257),
(21, 9, -78.315847, 12.244194),
(22, 10, -77.302399, 5.021278);

INSERT INTO pregunta(id_clase, qr_pregunta, texto_pregunta)
VALUES(1, 'qr_link', '¿Cual elemento se representa con las letras Au?'),
(2, 'qr_link', '¿(-2)^2 = -4?'),
(3, 'qr_link', '¿Cual es la capital de Rusia?');

INSERT INTO opcion(id_pregunta, texto_opcion, esCorrecta)
VALUES(1, 'Plata', FALSE),
(1, 'Oro', TRUE),
(1, 'Magnesio', FALSE),
(1, 'Potasio', FALSE),
(2, 'Verdadero', FALSE),
(2, 'Falso', TRUE),
(3, 'San petesburgo', FALSE),
(3, 'Kiev', FALSE),
(3, 'Moscu', TRUE),
(3, 'Vladivostok', FALSE);

INSERT INTO EstudianteOpcion(id_usuario, id_opcion)
VALUES(13, 1), (14, 5), (15, 1), (16, 4), (20, 5), (18, 2), (19, 9), (21, 10), (17, 7), (22, 2);
