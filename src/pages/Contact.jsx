import React from "react";

const Contact = () => {
    return (
        <div className="container mx-auto mt-10 text-center">
            <h1 className="text-3xl font-bold text-blue-600">Contact Us</h1>
            <p className="mt-4 text-gray-700">We’d love to hear from you!</p>
            <form className="mt-6 space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-3 border rounded-md"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded-md"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-3 border rounded-md"
                    rows="5"
                ></textarea>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
