import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

//protected route
import {ProtectedRoute} from './protectedRoute';

// utilities routing
const Setting = Loadable(lazy(() => import('views/Setting/setting')));

// sample page routing
const Hotel = Loadable(lazy(() => import('views/Form/formBuilder')));
// const Amenities = Loadable(lazy(() => import('views/Amenities')));

import {isLogin} from "../Redux/Auth/action";
import { Navigate } from 'react-router-dom';
import MinimalLayout from 'layout/MinimalLayout';
import ProfileAuth from 'views/Profile/profile';

let Profile = true;

const ProtectedRouteWithProfileCheck = ({ children }) => {
  const isAuthenticated = isLogin();
  const shouldRender = isAuthenticated && Profile;
  return shouldRender ? children : <Navigate to="/profile" />;
};

// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
  path: '/',
  element: Profile && isLogin() ? <MainLayout /> : <MinimalLayout />,
  children: [
    {
      path: 'profile',
      children: [
        {
          path: '',
          element: <ProtectedRoute isAuthenticated={isLogin()}><ProfileAuth /></ProtectedRoute>
        }
      ]
    },
    {
      path: 'account-setting',
      children: [
        {
          path: '',
          element: <ProtectedRouteWithProfileCheck><Setting /></ProtectedRouteWithProfileCheck>
        }
      ]
    },
    {
      path: 'forms',
      element: <ProtectedRouteWithProfileCheck><Hotel /></ProtectedRouteWithProfileCheck>
    }
  ]
};

export default MainRoutes;
