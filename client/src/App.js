import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Study } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/study' element={<Study />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;