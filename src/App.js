
import './App.css';
import Hero from './components/hero/Hero';
// import Card from './components/card/Card';
import Movies from './components/movies/Movies';
import Details from './components/details/Details';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div >
    <Hero/>
    <Movies/>
    {/* <Card/> */}
    
    <Details/>
    <Footer/>
    </div>
  );
}

export default App;
