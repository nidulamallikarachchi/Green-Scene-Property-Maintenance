import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_9b3zian',    // Replace with your service ID
            'template_3t1ds4s',   // Replace with your template ID
            formRef.current,
            '0uz5uGCMuuNZ7OhVs'     // Replace with your public key
        ).then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Something went wrong. Please try again later.');
        });
    };

    return (
        <div className="bg-gray-100 py-16 px-4">
            <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-blue-600 text-center">Contact Us</h1>
                <p className="mt-4 text-lg text-gray-700 text-center">
                    We’d love to hear from you! Reach out to us via phone, email, or by filling out the form below.
                </p>
                <div className="mt-6 text-center">
                    <p className="text-lg text-gray-700">
                        <strong>Phone:</strong>{" "}
                        <a href="tel:045455034" className="text-blue-600 hover:underline">
                            045 455 034
                        </a>
                    </p>
                    <p className="text-lg text-gray-700 mt-2">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:service.greenscene@outlook.com" className="text-blue-600 hover:underline">
                            service.greenscene@outlook.com
                        </a>
                    </p>
                </div>

                {/* Form Section */}
                <form ref={formRef} onSubmit={sendEmail} className="mt-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="5"
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>

                {/* Address Section */}
                <div className="mt-8 text-center">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Address</h2>
                    <p className="mt-2 text-gray-600">29 Matlock Avenue, Mulgrave, VIC 3170</p>
                </div>
            </div>

            {/* Map Section */}
            <div className="footer-map text-white pt-4">
                <div className="container mx-auto">
                    <iframe
                        title="Green Scene Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.9243081227324!2d145.17364571600986!3d-37.93023897972979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b47d674e2e5%3A0xc27cb74a8ad93e5a!2s29%20Matlock%20Ave%2C%20Mulgrave%20VIC%203170%2C%20Australia!5e0!3m2!1sen!2sus!4v1696004169385!5m2!1sen!2sus"
                        className="w-full h-64 sm:h-80 lg:h-96"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
