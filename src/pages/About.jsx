import { motion } from "framer-motion";
import Faxts from "../components/Faxts.jsx";

const About = () => {
    return (
        <motion.div
            className="container mx-auto mt-10 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className="text-3xl font-bold text-blue-600">About Us</h1>
            <p className="mt-4 text-gray-700">
                Green Scene Property Maintenance is a Melbourne-based company offering
                comprehensive property maintenance services for residential, commercial,
                and industrial clients.
            </p>
            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-blue-600">Customer Types We Serve</h2>
                <ul className="mt-4 text-gray-700 space-y-2">
                    <li>- Residential and Commercial</li>
                    <li>- Commercial</li>
                    <li>- Industrial</li>
                    <li>- Other Specialized Properties</li>
                </ul>
            </div>
            <Faxts/>
        </motion.div>
    );
};

export default About;