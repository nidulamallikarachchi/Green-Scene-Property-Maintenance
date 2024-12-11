import React from 'react';
import { Link } from 'react-router-dom';

const WindowCleaning = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-blue-600">Window Cleaning</h1>
            <p className="mt-4 text-lg text-gray-700">
                Enjoy crystal-clear views with our Window Cleaning services. Our
                professionals ensure streak-free, spotless windows for both residential
                and commercial properties, enhancing natural light and aesthetics.
            </p>
            <div className="mt-8">
                <Link to="/" className="text-blue-600 hover:underline">← Back to Services</Link>
            </div>
        </div>
    );
};

export default WindowCleaning;
