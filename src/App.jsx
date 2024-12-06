// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Home Page
const Home = () => <h1>Welcome to the Home Page</h1>;

// About Page
const About = () => <h1>About Us</h1>;

// Contact Page
const Contact = () => <h1>Contact Us</h1>;

// Navigation Bar
const Navbar = () => (
    <nav style={{ display: 'flex', gap: '10px', padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
);

// Main App Component
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
