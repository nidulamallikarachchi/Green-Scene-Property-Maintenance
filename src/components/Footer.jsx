import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaAngleDoubleRight } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer>
                {/* Map Section */}
                <div className="footer-map bg-gray-800 text-white">
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

                {/* Two Sections Under Map */}
                <div className="footer-sections bg-gray-800 text-white py-10">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                        {/* Contact Section */}
                        <div className="footer-contact">
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <p className="mb-2">Have questions or need assistance? Contact us anytime.</p>
                            <p>
                                <strong>Phone:</strong>{" "}
                                <a href="tel:045455034" className="text-blue-400 hover:underline">
                                    045 455 034
                                </a>
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:service.greenscene@outlook.com" className="text-blue-400 hover:underline">
                                    service.greenscene@outlook.com
                                </a>
                            </p>
                            <p><strong>Address:</strong> 29 Matlock Avenue, Mulgrave, VIC 3170</p>
                        </div>

                        {/* Newsletter Section */}
                        <div className="footer-newsletter">
                            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                            <p className="mb-4">Stay updated with our latest news and offers.</p>
                            <div className="flex flex-col sm:flex-row items-center">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="p-2 rounded-l w-full sm:w-auto flex-1 bg-gray-700 text-white"
                                />
                                <button className="p-2 bg-blue-500 text-white rounded-r mt-2 sm:mt-0 sm:ml-2">
                                    <FaAngleDoubleRight />
                                </button>
                            </div>
                            <div className="footer-social mt-4">
                                <h5 className="text-md font-medium mb-2">Follow Us:</h5>
                                <div className="flex space-x-4">
                                    <Link to="/" className="text-blue-400 hover:text-white">
                                        <FaFacebookF />
                                    </Link>
                                    <Link to="/" className="text-blue-400 hover:text-white">
                                        <FaTwitter />
                                    </Link>
                                    <Link to="/" className="text-blue-400 hover:text-white">
                                        <FaInstagram />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="footer-bottom bg-gray-900 text-white py-4">
                    <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
                        <p className="text-sm text-center sm:text-left">
                            © 2024 Green Scene Property Maintenance. All rights reserved.
                        </p>
                        <div className="footer-menu space-x-4 text-sm mt-2 sm:mt-0">
                            <Link to="/about" className="hover:underline">About Us</Link>
                            <Link to="/careers" className="hover:underline">Careers</Link>
                            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
