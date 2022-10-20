import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ArchivePage from './pages/ArchivePage'
import DetailPage from './pages/DetailPage'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import InputNotePage from './pages/InputNotePage'

function App() {
  return (
    <div className='min-h-screen transition ease-in-out duration-500'>
      <Navbar/>
      <main className='px-16 py-8'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/archives" element={<ArchivePage />} />
          <Route path="/new" element={<InputNotePage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
