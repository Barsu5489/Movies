
import './App.css';
import Hero from './components/hero/Hero';
// import Card from './components/card/Card';
import Movies from './components/movies/Movies';
import Details from './components/details/Details';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div >
    
   
    <BrowserRouter>
    
    <Routes>
    <Route path="/" exact="true" element={<Hero/>} />
    
  
      <Route path="/details/:id" exact="true" element={<Details />} />
    
    </Routes>
    <Footer/>
  </BrowserRouter>
    
   
   
    </div>
  );
}

export default App;
