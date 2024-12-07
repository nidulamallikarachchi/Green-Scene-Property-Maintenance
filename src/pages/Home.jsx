import group_image from "../assets/group_image.jpg"
import commercial_cleaning from "../assets/commercial_cleaning.jpg"
import industrial_cleaning from "../assets/industrial_cleaning.jpg"
import residential_cleaning from "../assets/residential_cleaning.jpg"

const Home = () => {
    return (
        <div className="container mx-auto mt-10 text-center">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src={group_image} // Replace this with an actual image URL for better effect
                    alt="Property Maintenance"
                    className="w-full h-[800px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white rounded-lg">
                    <h1 className="text-4xl font-bold">
                        Welcome to Green Scene Property Maintenance
                    </h1>
                    <p className="text-lg mt-4">
                        Your trusted partner for maintaining and improving properties in
                        Melbourne.
                    </p>
                </div>
            </div>

            {/* About Us Section */}
            <section className="mt-16 text-left px-4">
                <h2 className="text-2xl font-semibold text-blue-600">About Us</h2>
                <p className="mt-4 text-gray-700">
                    At Green Scene Property Maintenance, we’ve been the industry leaders in property cleaning and maintenance for over 5 years, proudly serving residential, commercial, and industrial clients across Melbourne. Our dedication to excellence and attention to detail is unmatched—our team is not just skilled; we are passionate about creating the most pristine, well-maintained spaces imaginable.

                    We’re more than just a maintenance service. We’re your trusted partner in keeping your property in top shape, with unparalleled expertise that guarantees exceptional results every time. Whether it’s routine cleaning, deep maintenance, or specialized services, we pride ourselves on being the best at what we do.

                    Our reputation speaks for itself, with countless satisfied clients who return to us time and time again. We use state-of-the-art equipment and the most effective cleaning solutions to tackle any job, no matter how big or small. With a strong commitment to quality and customer satisfaction, we’ve built a track record of exceeding expectations and setting new standards in the property maintenance industry.

                    When you choose Green Scene Property Maintenance, you’re choosing reliability, efficiency, and the very best in the business. No one does it better than us, and we’re here to prove it.
                </p>
            </section>

            {/* Services Section */}
            <section className="mt-16 text-left px-4">
                <h2 className="text-2xl font-semibold text-blue-600">Our Services</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Service 1 */}
                    <div className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
                        <img
                            src={residential_cleaning}
                            alt="Residential Cleaning"
                            className="w-full h-[300px] object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-bold mt-4 text-blue-600">
                            Residential Cleaning
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Keep your home spotless with our tailored cleaning solutions.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
                        <img
                            src={commercial_cleaning}
                            alt="Commercial Maintenance"
                            className="w-full h-[300px] object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-bold mt-4 text-blue-600">
                            Commercial Maintenance
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Ensure your business environment is clean and well-maintained.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className="border p-4 rounded-lg shadow-lg flex flex-col items-center">
                        <img
                            src={industrial_cleaning}
                            alt="Industrial Services"
                            className="w-full h-[300px] object-cover rounded-lg"
                        />
                        <h3 className="text-xl font-bold mt-4 text-blue-600">
                            Industrial Services
                        </h3>
                        <p className="mt-2 text-gray-700">
                            Reliable maintenance services for industrial facilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="mt-16 text-left px-4">
                <h2 className="text-2xl font-semibold text-blue-600">Contact Us</h2>
                <p className="mt-4 text-gray-700">
                    Call us today at{" "}
                    <strong className="text-blue-600">045 455 034</strong> or email us at{" "}
                    <strong className="text-blue-600">service.greenscene@outlook.com</strong>.
                </p>
                <p className="mt-4 text-gray-700">
                    We are always here to help with your property maintenance needs.
                </p>
            </section>

        </div>
    );
};

export default Home;
