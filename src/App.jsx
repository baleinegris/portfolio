import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Pages/Main/Homepage';
import React, { Suspense } from 'react';
import WebsiteLoader from './components/WebsiteLoader';

function App() {
  return (
    <BrowserRouter basename='/portfolio'>
      <Navbar />
      <Suspense fallback={<WebsiteLoader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;