import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knoledges from './pages/Knoledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/competences' component={Knoledges} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;