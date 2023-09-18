
import './App.css';
import Hero from './components/hero/Hero';
import Details from './components/details/Details';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >
    <BrowserRouter>    
    <Routes>
    <Route path="/" exact="true" element={<Hero/>} />
    <Route path="/details/:id" exact="true" element={<Details />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
