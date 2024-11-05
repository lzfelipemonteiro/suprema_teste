import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const PublishedPage = lazy(() => import('../pages/public/Published'));
const NotFound = lazy(() => import('../pages/public/NotFound'));

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/p/:pageId" element={<PublishedPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};