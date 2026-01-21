
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Navbarbottom from './Components/Navbar/Navbarbottom';
import Hero from './Components/Header/Header';
import About from './Components/About/About';
import Reviews from './Components/About/Reviews';
import Services from './Components/our services/Services';
import Project from './Components/Projects/Project';
import Team from './Components/Team/Team';
import Reviews2 from './Components/Team/Reviews2';
import Blog from './Components/Blogs/Blog';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <>    
      <Navbar/>
      <Navbarbottom/>
      <Hero/>
      <About/>
      <Reviews/>
      <Services/>
      <Project/>
      <Team/>
      <Reviews2/>
      <Blog/>
      <Footer/>

    
    </>

  );
}

export default App;
