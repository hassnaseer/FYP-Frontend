import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

//protected route
import {ProtectedRoute} from './protectedRoute';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/Role/listRole')));
const Staff = Loadable(lazy(() => import('views/Staff/listStaff')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const Setting = Loadable(lazy(() => import('views/Setting/setting')));

// sample page routing
const Hotel = Loadable(lazy(() => import('views/Hotel/ListHotel')));
const Amenities = Loadable(lazy(() => import('views/Amenities')));

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
  element: Profile ? <MainLayout /> : <MinimalLayout />,
  children: [
    {
      path: '/',
      element:  <ProtectedRouteWithProfileCheck
      component={DashboardDefault}
      exact />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element:<ProtectedRouteWithProfileCheck><DashboardDefault /></ProtectedRouteWithProfileCheck>
        }
      ]
    },
    {
      path: 'role',
      children: [
        {
          path: '',
          element:  <ProtectedRouteWithProfileCheck><UtilsTypography /></ProtectedRouteWithProfileCheck>
        }
      ]
    },
    {
      path: 'amenities',
      children: [
        {
          path: '',
          element:  <ProtectedRouteWithProfileCheck><Amenities /></ProtectedRouteWithProfileCheck>
        }
      ]
    },
    {
      path: 'staff',
      children: [
        {
          path: '',
          element: <ProtectedRouteWithProfileCheck><Staff /></ProtectedRouteWithProfileCheck>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <ProtectedRouteWithProfileCheck><UtilsShadow /></ProtectedRouteWithProfileCheck>
        }
      ]
    },
    {
      path: 'booking',
      children: [
        {
          path: '',
          element: <ProtectedRouteWithProfileCheck><UtilsMaterialIcons /></ProtectedRouteWithProfileCheck>
        }
      ]
    },
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
      path: 'hotels',
      element: <ProtectedRouteWithProfileCheck><Hotel /></ProtectedRouteWithProfileCheck>
    }
  ]
};

export default MainRoutes;
