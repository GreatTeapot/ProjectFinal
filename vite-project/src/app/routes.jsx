import {createBrowserRouter} from 'react-router-dom';
import {HomePage,
  RegisterPage,
  LogInPage,
  LogOutPage,
  MainOurUserPage,
  MainNewUserPage,
  GamePage
} from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNewUserPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/login',
    element: <LogInPage />
  },
  {
    path: '/logout',
    element: <LogOutPage />
  },
  {
    path: '/authuser',
    element: <MainOurUserPage />
  },
  {
    path: '/home',
    element: <HomePage />
  },
  {
    path: '/game',
    element: <GamePage />
  }
])
