import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Pages/Main/Homepage';
import React, { Suspense } from 'react';
import WebsiteLoader from './components/WebsiteLoader';
import Test from './components/Pages/Test';
import { ContactProvider, ProjectsProvider } from './contexts/ProjectsProvider';
import Resume from './components/Pages/Resume/Resume';
import Contact from './components/Pages/Main/Contact';
{/* <WebsiteLoader /> */}
function App() {
  return (
    <BrowserRouter basename='/'>
      <ProjectsProvider>
        <ContactProvider>
          <Navbar />
          <Suspense fallback={null}> 
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/testing" element={<Test/>} />
              <Route path="/resume" element={<Resume/>} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </Suspense>
        </ContactProvider>
      </ProjectsProvider>
    </BrowserRouter>
  );
}

export default App;