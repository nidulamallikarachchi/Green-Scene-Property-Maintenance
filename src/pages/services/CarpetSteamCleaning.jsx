import React from 'react';
import { Link } from 'react-router-dom';

const CarpetSteamCleaning = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-600">Carpet Steam Cleaning</h1>
            <p className="mt-4 text-lg text-gray-700">
                Refresh your interiors with our professional Carpet Steam Cleaning. We use
                industry-grade equipment and eco-friendly products to remove dirt, stains,
                and allergens, leaving your carpets looking and smelling like new.
            </p>
            <div className="mt-8">
                <Link to="/" className="text-blue-600 hover:underline">← Back to Services</Link>
            </div>
        </div>
    );
};

export default CarpetSteamCleaning;
