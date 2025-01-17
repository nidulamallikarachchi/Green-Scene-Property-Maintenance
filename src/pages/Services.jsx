import { motion } from "framer-motion";
import body_corporate_cleaning_img from "../assets/service_images/body_corporate_cleaning_sample.webp";
import office_cleaning_img from "../assets/service_images/office_cleaning_sample.webp";
import garden_cleaning_img from "../assets/service_images/garden_cleaning_sample.webp";
import high_pressure_cleaning_img from "../assets/service_images/high_pressure_cleaning_sample.webp";
import window_cleaning_img from "../assets/service_images/window_cleaning_sample.webp";
import carpert_cleaning_img from "../assets/service_images/carpert_cleaning_sample.webp";
import ContactButton from '../components/ContactButton';

const services = [
    {
        title: "Body Corporate Maintenance",
        description: "Comprehensive maintenance solutions for body corporate properties.",
        image: body_corporate_cleaning_img,
        route: "/services/body-corporate-maintenance"
    },
    {
        title: "Commercial Offices Cleaning",
        description: "Professional cleaning services for commercial office spaces.",
        image: office_cleaning_img,
        route: "/services/commercial-offices-cleaning"
    },
    {
        title: "Gardening and Landscaping",
        description: "Expert gardening and landscaping to beautify your property.",
        image: garden_cleaning_img,
        route: "/services/gardening-and-landscaping"
    },
    {
        title: "Carpet Steam Cleaning",
        description: "Deep steam cleaning to keep your carpets fresh and clean.",
        image: carpert_cleaning_img,
        route: "/services/carpet-steam-cleaning"
    },
    {
        title: "Window Cleaning",
        description: "Sparkling clean windows for residential and commercial properties.",
        image: window_cleaning_img,
        route: "/services/window-cleaning"
    },
    {
        title: "High-Pressure Washing",
        description: "Powerful washing for driveways, walls, and outdoor areas.",
        image: high_pressure_cleaning_img,
        route: "/services/high-pressure-washing"
    },
];

import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="container mx-auto mt-10 px-4">
            <h1 className="text-3xl font-bold text-blue-600 text-center">Our Services</h1>
            <p className="text-lg mt-4 text-gray-700 text-center">
                Explore the wide range of property maintenance services we offer.
            </p>
            <motion.div
                className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
                }}
            >
                {services.map((service, index) => (
                    <Link to={service.route} key={index}>
                        <motion.div
                            className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-blue-600">{service.title}</h2>
                                <p className="text-gray-700 mt-2">{service.description}</p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
};

export default Services;