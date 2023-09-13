
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import Movies from './components/movies/Movies';
import Details from './components/details/Details';
function App() {
  return (
    <div >
    <Navbar/>
    <Hero/>
    <Card/>
    <Movies/>
    <Details/>
    </div>
  );
}

export default App;
