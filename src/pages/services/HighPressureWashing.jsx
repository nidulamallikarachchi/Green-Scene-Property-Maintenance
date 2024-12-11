import React from 'react';
import { Link } from 'react-router-dom';

const HighPressureWashing = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-600">High-Pressure Washing</h1>
            <p className="mt-4 text-lg text-gray-700">
                Restore the original look of your exteriors with our High-Pressure Washing services.
                We blast away stubborn dirt, moss, mold, and grime from driveways, walls, decks, and
                patios, leaving surfaces looking revitalized and clean.
            </p>
            <div className="mt-8">
                <Link to="/" className="text-blue-600 hover:underline">← Back to Services</Link>
            </div>
        </div>
    );
};

export default HighPressureWashing;
