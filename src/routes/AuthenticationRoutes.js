import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

//protected route
import {PublicRoute} from './protectedRoute';
import {isLogin} from "../Redux/Auth/action";

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const EmailVerification = Loadable(lazy(() => import('views/pages/authentication/authentication3/verifyEmail')));
const ForgotPassword = Loadable(lazy(() => import('views/pages/authentication/authentication3/fotgotPassword')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      children: [
        {
          path: '',
          element:<PublicRoute isAuthenticated={isLogin()}><AuthLogin3 /></PublicRoute>
        }
      ]
    },
    {
      path: '/verify-email',
      children: [
        {
          path: '',
          element:<PublicRoute isAuthenticated={isLogin()}><EmailVerification /></PublicRoute>
        }
      ]
    },
    {
      path: '/register',
      children: [
        {
          path: '',
          element:<PublicRoute isAuthenticated={isLogin()}><AuthRegister3 /></PublicRoute>
        }
      ]
    },
    {
      path: '/forgotpassword',
      children: [
        {
          path: '',
          element:<PublicRoute isAuthenticated={isLogin()}><ForgotPassword /></PublicRoute>
        }
      ]
    }
  ]
};

export default AuthenticationRoutes;
