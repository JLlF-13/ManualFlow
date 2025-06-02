import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home';
import { NotFound } from './components/App/NotFound';
import { Header } from './components/App/Header';
import { Routes, Route } from 'react-router-dom';
import { ListManual } from './components/Manual/ListManual';
import { ViewManual } from './components/Manual/ViewManual';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path='/list/manual' element={<ListManual />} />
        <Route path='/view/manual/:id' element={<ViewManual />} />
      </Routes>
    </>
  )
}

export default App
