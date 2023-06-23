import { useEffect } from 'react';
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
      if (pathname === '/') navigate('/login');
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return useRoutes([MainRoutes, AuthenticationRoutes]);
}
