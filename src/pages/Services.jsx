import body_corporate_cleaning_img from "../assets/service_images/body_corporate_cleaning_sample.jpeg"
import office_cleaning_img from "../assets/service_images/office_cleaning_sample.jpeg"
import garden_cleaning_img from "../assets/service_images/garden_cleaning_sample.jpeg"
import high_pressure_cleaning_img from "../assets/service_images/high_pressure_cleaning_sample.jpeg"
import window_cleaning_img from "../assets/service_images/window_cleaning_sample.jpeg"
import carpert_cleaning_img from "../assets/service_images/carpert_cleaning_sample.jpeg"

const services = [
    {
        title: "Body Corporate Maintenance",
        description: "Comprehensive maintenance solutions for body corporate properties.",
        image: body_corporate_cleaning_img, // Replace with actual image URLs
    },
    {
        title: "Commercial Offices Cleaning",
        description: "Professional cleaning services for commercial office spaces.",
        image: office_cleaning_img,
    },
    {
        title: "Gardening and Landscaping",
        description: "Expert gardening and landscaping to beautify your property.",
        image: garden_cleaning_img,
    },
    {
        title: "Carpet Steam Cleaning",
        description: "Deep steam cleaning to keep your carpets fresh and clean.",
        image: carpert_cleaning_img,
    },
    {
        title: "Window Cleaning",
        description: "Sparkling clean windows for residential and commercial properties.",
        image: window_cleaning_img,
    },
    {
        title: "High-Pressure Washing",
        description: "Powerful washing for driveways, walls, and outdoor areas.",
        image: high_pressure_cleaning_img,
    },
];

const Services = () => {
    return (
        <div className="container mx-auto mt-10 px-4">
            <h1 className="text-3xl font-bold text-blue-600 text-center">Our Services</h1>
            <p className="text-lg mt-4 text-gray-700 text-center">
                Explore the wide range of property maintenance services we offer.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
