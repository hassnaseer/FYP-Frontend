import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

//protected route
import {ProtectedRoute} from './protectedRoute';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/Role/addRole')));
const UtilsColor = Loadable(lazy(() => import('views/Role/addRole')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

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
      path: 'staff',
      children: [
        {
          path: '',
          element: <ProtectedRoute isAuthenticated={isLogin()}><UtilsColor /></ProtectedRoute>
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
      element: <ProtectedRoute isAuthenticated={isLogin()}><SamplePage /></ProtectedRoute>
    }
  ]
};

export default MainRoutes;
