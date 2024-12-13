import { Home } from '../pages';
import Login from '../pages/Home/Login/Login';
import RegistroProf from '../pages/Home/RegistroProf/RegistroProf';
import RegistroEst from '../pages/Home/RegistroEst/RegistroEst';
import OlvidarContraseña from '../pages/Home/OlvidarContraseña/OlvidarContraseña';

const AuthRoutes = [
    { path: '/', element: <Home/>},
    { path: '/login', element: <Login /> },
    { path: '/registroProf', element: <RegistroProf/> },
    { path: '/registroEst', element: <RegistroEst /> },
    { path: '/olvidarContraseña', element: <OlvidarContraseña /> }
];

export default AuthRoutes;
