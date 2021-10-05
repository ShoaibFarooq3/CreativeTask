import './App.css';
import About from './Components/pages/About/About';
import Banner from './Components/pages/Banner/Banner';
import Elementor from './Components/pages/Elementor/Elementor';
import Navbar from './Components/pages/Navabr/Navbar';
import Services from './Components/pages/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Elementor />
      <About />
      <Services />
    </div>
  );
}

export default App;
