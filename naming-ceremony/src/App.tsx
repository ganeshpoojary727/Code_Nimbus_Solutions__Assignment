import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Navbar = React.lazy(() => import('./components/Navbar'));
const Music = React.lazy(() => import('./components/Music'));
const HomePage = React.lazy(() => import('./pages/HomePage'));
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'));

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f4e5e3]" />}>
      <div className="min-h-screen font-sans">
        <Navbar />
        <Music />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}
