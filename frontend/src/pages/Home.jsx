import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import About from '../components/About';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Booking />
      <Footer />
    </>
  );
}

export default Home;
