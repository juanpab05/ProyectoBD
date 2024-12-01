import Asistencia from '../pages/Asistencia';
import CreacionClase from '../pages/CreacionClases';
import Reportes from '../pages/Reportes';
import InformePreguntas from '../pages/InformePreguntas/InformePreguntas';
import CrearPreguntas from '../pages/GestionClases/index';

const AdminRoutes = [
    { path: '/asistencia', element: <Asistencia /> },
    { path: '/creacionclase', element: <CreacionClase /> },
    { path: '/reportes', element: <Reportes /> },
    { path: '/informepreguntas', element: <InformePreguntas /> },
    { path: '/crearpreguntas', element: <CrearPreguntas /> }
];

export default AdminRoutes;
