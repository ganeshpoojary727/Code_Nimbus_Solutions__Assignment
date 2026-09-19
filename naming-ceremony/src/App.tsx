import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Nam002Navbar = React.lazy(() => import('./components/Nam002/Nam002-Navbar'));
const Nam002Music = React.lazy(() => import('./components/Nam002/Nam002-Music'));
const Nam002HomePage = React.lazy(() => import('./pages/Nam002-HomePage'));
const Nam002Gallery = React.lazy(() => import('./pages/Nam002-Gallery'));

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f4e5e3]" />}>
      <div className="min-h-screen font-sans">
        <Nam002Navbar />
        <Nam002Music />
        <Routes>
          <Route path="/" element={<Nam002HomePage />} />
          <Route path="/gallery" element={<Nam002Gallery />} />
        </Routes>
      </div>
    </Suspense>
  );
}
