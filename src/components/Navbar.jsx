import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sample_icon.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-4">
                    <img src={logo}
                         alt="Website Logo"
                         className="h-8 w-8 object-cover"/>
                    <div>
                        <h1 className="text-2xl font-bold">Green Scene</h1>
                        <p className="text-sm">Property Maintenance</p>
                    </div>
                </div>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <Link
                            to="/"
                            className="hover:text-gray-200 transition-colors duration-300 cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="hover:text-gray-200 transition-colors duration-300 cursor-pointer"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className="hover:text-gray-200 transition-colors duration-300 cursor-pointer"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="hover:text-gray-200 transition-colors duration-300 cursor-pointer"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Hamburger Menu for Mobile */}
                <button
                    className="block md:hidden focus:outline-none cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-500">
                    <ul className="space-y-4 py-4 px-6">
                        <li>
                            <Link
                                to="/"
                                className="block text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className="block text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block text-white hover:text-gray-200 transition-colors duration-300 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
