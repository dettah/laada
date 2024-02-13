import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage';
import Community from './pages/Community';
import Statement from './pages/About/Statement';
import Product from './pages/About/Product';
import Bussiness from './pages/Bussiness';
import Advertise from './pages/Advertise';
import Network from './pages/Network';
import News from './pages/News';
import NavBar from "./Components/shared/NavBar";
import Footer from "./Components/shared/Footer";
import NewsContent from "./pages/NewsContent";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/about" element={<Statement />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/business" element={<Bussiness />} />
        <Route exact path="/advert" element={<Advertise />} />
        <Route exact path="/network" element={<Network />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/news-content" element={<NewsContent />} />

        {/* Add more routes as needed */}

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
