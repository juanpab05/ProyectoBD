import UserType from '../pages/Home/TipoUsuario/UserType';
import DatosUsuario from '../pages/DatosUsuario';
import Historial from '../pages/Historial';

const UserRoutes = [
    { path: '/tipousuario', element: <UserType/>},
    { path: '/datosusuario', element: <DatosUsuario /> },
    { path: '/historial', element: <Historial /> },
];

export default UserRoutes;