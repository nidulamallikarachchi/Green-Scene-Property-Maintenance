import React from 'react';
import { Link } from 'react-router-dom';

const CommercialOfficesCleaning = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-600">Commercial Offices Cleaning</h1>
            <p className="mt-4 text-lg text-gray-700">
                Maintain a professional and hygienic work environment with our Commercial Office Cleaning solutions.
                We provide scheduled cleaning services, sanitize high-touch areas, and ensure every office corner
                is free from dirt and clutter, creating a productive and healthy workspace.
            </p>
            <div className="mt-8">
                <Link to="/" className="text-blue-600 hover:underline">← Back to Services</Link>
            </div>
        </div>
    );
};

export default CommercialOfficesCleaning;
