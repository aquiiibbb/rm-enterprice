import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';
import Product from './pages/product';
import Service from './pages/service';
import Costomer from './pages/costomer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
           <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/costomer" element={<Costomer/>} />
        </Routes>
         <Footer />
      </div>
    </Router>
  );
}



export default App;