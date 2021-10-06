import './App.css';
import About from './Components/pages/About/About';
import Banner from './Components/pages/Banner/Banner';
import BrainStorming from './Components/pages/BrainStorming/BrainStorming';
import Elementor from './Components/pages/Elementor/Elementor';
import Footer from './Components/pages/Footer/Footer';
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
      <BrainStorming />
      <Footer />
    </div>
  );
}

export default App;
