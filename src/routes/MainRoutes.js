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
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const Hotel = Loadable(lazy(() => import('views/Hotel/ListHotel')));
const Amenities = Loadable(lazy(() => import('views/Amenities')));
const ChangePassword = Loadable(lazy(() => import('views/pages/authentication/authentication3/changePassword')));

import {isLogin} from "../Redux/Auth/action";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element:  <ProtectedRoute 
      isAuthenticated={isLogin()}
      component={DashboardDefault}
      exact />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element:<ProtectedRoute isAuthenticated={isLogin()}><DashboardDefault /></ProtectedRoute>
        }
      ]
    },
    {
      path: 'role',
      children: [
        {
          path: '',
          element:  <ProtectedRoute isAuthenticated={isLogin()}><UtilsTypography /></ProtectedRoute>
        }
      ]
    },
    {
      path: 'amenities',
      children: [
        {
          path: '',
          element:  <ProtectedRoute isAuthenticated={isLogin()}><Amenities /></ProtectedRoute>
        }
      ]
    },
    {
      path: 'staff',
      children: [
        {
          path: '',
          element: <ProtectedRoute isAuthenticated={isLogin()}><Staff /></ProtectedRoute>
        }
      ]
    },
    {
      path: 'change-password',
      children: [
        {
          path: '',
          element: <ProtectedRoute isAuthenticated={isLogin()}><ChangePassword /></ProtectedRoute>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <ProtectedRoute isAuthenticated={isLogin()}><UtilsShadow /></ProtectedRoute>
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <ProtectedRoute isAuthenticated={isLogin()}><UtilsTablerIcons /></ProtectedRoute>
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <ProtectedRoute isAuthenticated={isLogin()}><UtilsMaterialIcons /></ProtectedRoute>
        }
      ]
    },
    {
      path: 'hotels',
      element: <ProtectedRoute isAuthenticated={isLogin()}><Hotel /></ProtectedRoute>
    }
  ]
};

export default MainRoutes;
