import React from "react";

const Home = () => {
    return (
        <div className="container mx-auto mt-10 text-center">
            <h1 className="text-4xl font-bold text-blue-600">Welcome to Green Scene Property Maintenance</h1>
            <p className="text-lg mt-4 text-gray-700">
                Your trusted partner for maintaining and improving residential, commercial, and industrial properties in Melbourne.
            </p>
            <p className="mt-6 text-gray-700">
                Call us today at <strong className="text-blue-600">045 455 034</strong> or email us at{" "}
                <strong className="text-blue-600">service.greenscene@outlook.com</strong>.
            </p>
        </div>
    );
};

export default Home;