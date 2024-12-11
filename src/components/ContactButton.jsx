import React from 'react';
import { Link } from 'react-router-dom';

const ContactButton = () => {
    return (
        <Link
            to="/contact"
            className="inline-block bg-red-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-600 transition duration-200"
        >
            Contact Us
        </Link>
    );
};

export default ContactButton;
