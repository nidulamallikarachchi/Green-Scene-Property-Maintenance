import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Property from "./pages/Property";
import BodyCorporateMaintenance from './pages/services/BodyCorporateMaintenance';
import CommercialOfficesCleaning from './pages/services/CommercialOfficesCleaning';
import GardeningLandscaping from './pages/services/GardeningLandscaping';
import CarpetSteamCleaning from './pages/services/CarpetSteamCleaning';
import WindowCleaning from './pages/services/WindowCleaning';
import HighPressureWashing from './pages/services/HighPressureWashing';

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Router>
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/property" element={<Property />} />
                        <Route path="/services/body-corporate-maintenance" element={<BodyCorporateMaintenance />} />
                        <Route path="/services/commercial-offices-cleaning" element={<CommercialOfficesCleaning />} />
                        <Route path="/services/gardening-and-landscaping" element={<GardeningLandscaping />} />
                        <Route path="/services/carpet-steam-cleaning" element={<CarpetSteamCleaning />} />
                        <Route path="/services/window-cleaning" element={<WindowCleaning />} />
                        <Route path="/services/high-pressure-washing" element={<HighPressureWashing />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
