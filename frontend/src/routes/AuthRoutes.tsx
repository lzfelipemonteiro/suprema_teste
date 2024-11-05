import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('../pages/auth/Login'));

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};