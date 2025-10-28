import { Sparkles, Clock, MapPin, Instagram, Phone, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Policies from './components/Policies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Policies />
      <Footer />
    </div>
  );
}

export default App;
