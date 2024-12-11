import React from 'react';
import { Link } from 'react-router-dom';

const GardeningLandscaping = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-600">Gardening and Landscaping</h1>
            <p className="mt-4 text-lg text-gray-700">
                Transform your outdoor spaces with our expert Gardening and Landscaping services.
                We offer lawn care, pruning, weeding, planting, and custom landscape design that
                enhances your property’s curb appeal and creates a welcoming outdoor environment.
            </p>
            <div className="mt-8">
                <Link to="/" className="text-blue-600 hover:underline">← Back to Services</Link>
            </div>
        </div>
    );
};

export default GardeningLandscaping;
