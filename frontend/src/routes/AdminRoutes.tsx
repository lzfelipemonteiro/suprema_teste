import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoutes';

const Dashboard = lazy(() => import('../pages/admin/Dashboard'));
const PageBuilder = lazy(() => import('../pages/admin/PageBuilder'));
const Preview = lazy(() => import('../pages/admin/Preview'));

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="page-builder" element={<PageBuilder />} />
              <Route path="preview/:pageId" element={<Preview />} />
            </Routes>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};