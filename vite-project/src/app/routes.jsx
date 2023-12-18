import {createBrowserRouter} from 'react-router-dom';
import {HomePage} from '../pages/HomePage';
import {RegisterPage} from '../pages/RegisterPage';
import {LogInPage} from '../pages/LogInPage';
import {LogOutPage} from '../pages/LogOutPage';
import {MainOurUserPage} from '../pages/MainOurUserPage';
import {MainNewUserPage} from '../pages/MainNewUserPage';
import {GamePage} from '../pages/GamePage';

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
