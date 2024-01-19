import React from 'react'
import { HomePage } from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}