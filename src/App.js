import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Parent from './views/parent'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Parent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App