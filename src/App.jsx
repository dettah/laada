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
import Customer from "./pages/Customer";
import Vendor from "./pages/Vendor";
import Partner from "./pages/Partner";
import ScrollToTop from "./Components/ScrollToTop";
import Com_BushMarket from "./pages/Com_BushMarket";
import Stores from "./pages/Stores";
import MA from "./pages/MA";
import RegForm from "./pages/RegForm";
import Markets from "./pages/Markets";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
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
        <Route exact path="/customer" element={<Customer />} />
        <Route exact path="/vendor" element={<Vendor />} />
        <Route exact path="/bushmarket" element={<Com_BushMarket />} /> 
        <Route exact path="/markets" element={<Markets />} /> 
        <Route exact path="/stores" element={<Stores />} /> 
        <Route exact path="/partner" element={<Partner />} /> 
        <Route exact path="/ma" element={<MA />} /> 
        <Route exact path="/reg-form" element={<RegForm />} /> 


        {/* Add more routes as needed */}

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
