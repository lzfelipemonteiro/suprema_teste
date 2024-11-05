// src/routes/index.tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoutes';

const Login = lazy(() => import('../pages/auth/Login'));
const Dashboard = lazy(() => import('../pages/admin/Dashboard'));
const PageBuilder = lazy(() => import('../pages/admin/PageBuilder'));
const Preview = lazy(() => import('../pages/admin/Preview'));
const PublishedPage = lazy(() => import('../pages/public/Published'));
const NotFound = lazy(() => import('../pages/public/NotFound'));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="page-builder" element={<PageBuilder />} />
            <Route path="preview/:pageId" element={<Preview />} />
          </Route>

          {/* Public Routes */}
          <Route path="/p/:pageId" element={<PublishedPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};