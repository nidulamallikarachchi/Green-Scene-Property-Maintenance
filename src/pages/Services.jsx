import React from "react";

const Services = () => {
    return (
        <div className="container mx-auto mt-10 text-center">
            <h1 className="text-3xl font-bold text-blue-600">Our Services</h1>
            <p className="text-lg mt-4 text-gray-700">
                We provide a wide range of professional property maintenance services:
            </p>
            <ul className="mt-4 text-gray-700 space-y-3">
                <li>- Body Corporate Maintenance</li>
                <li>- Commercial Offices Cleaning</li>
                <li>- Gardening and Landscaping</li>
                <li>- Carpet Steam Cleaning</li>
                <li>- Window Cleaning</li>
                <li>- High-Pressure Wash</li>
            </ul>
        </div>
    );
};

export default Services;
