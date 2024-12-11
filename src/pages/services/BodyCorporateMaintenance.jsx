import React from 'react';
import { Link } from 'react-router-dom';

const BodyCorporateMaintenance = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-600">Body Corporate Maintenance</h1>
            <p className="mt-4 text-lg text-gray-700">
                Our Body Corporate Maintenance services ensure that shared residential or commercial properties
                are always well-maintained, clean, and appealing. We handle common areas, corridors,
                gardens, and other shared facilities so that all residents and stakeholders can enjoy
                a hassle-free, comfortable environment.
            </p>
            <div className="mt-8">
                <Link to="/" className="text-blue-600 hover:underline">← Back to Services</Link>
            </div>
        </div>
    );
};

export default BodyCorporateMaintenance;
