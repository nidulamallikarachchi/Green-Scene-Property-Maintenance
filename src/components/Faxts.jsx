import React from 'react';
import CountUp from 'react-countup';

const Faxts = () => {
    return (
        <div className=" py-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-around items-center gap-8">

                    {/* Expert Landscape */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-blue-600">
                            <CountUp end={10} />+
                        </h2>
                        <p className="text-lg text-gray-700 mt-2"> Years of Experience</p>
                    </div>

                    {/* Awards Winning */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-blue-600">
                            <CountUp end={400} />+
                        </h2>
                        <p className="text-lg text-gray-700 mt-2"> Contracts Undertaken</p>
                    </div>

                    {/* Client Satisfaction */}
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-blue-600">
                            <CountUp end={100} />%
                        </h2>
                        <p className="text-lg text-gray-700 mt-2">Client Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faxts;
