import React from "react";
import property1 from "../assets/property_images/property_1.png";
import property2 from "../assets/property_images/property_2.jpg";
import property3 from "../assets/property_images/property_3.png";

const addresses = [
    "243-263 Franklin St, Melbourne",
    "181 St Kilda Rd, St Kilda",
    "1 Union St, Melbourne",
];

const properties = [
    { id: 1, image: property1, address: addresses[0] },
    { id: 2, image: property2, address: addresses[1] },
    { id: 3, image: property3, address: addresses[2] },
];

const Property = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                {/* Page Header */}
                <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
                    Our Properties
                </h1>
                <p className="text-lg text-center text-gray-600 leading-relaxed mb-9">
                    We are proud to have built long-term service relationships with our clients, delivering exceptional results for over 10 years.
                </p>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                        >
                            {/* Property Image */}
                            <img
                                src={property.image}
                                alt={`Property ${property.id}`}
                                className="w-full h-3/4 object-cover"
                            />
                            {/* Property Address */}
                            <div className="p-6">
                                <p className="text-xl font-semibold text-gray-800 text-center">
                                    {property.address}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Property;
