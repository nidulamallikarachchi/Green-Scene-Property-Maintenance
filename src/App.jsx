import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
    return (
        <>
            <Home/>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
        </>

    )
}