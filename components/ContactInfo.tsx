'use client';
import React, { Suspense } from 'react';
import dynamic from "next/dynamic";
import AnimatedWrapper from './AnimatedWrapper';

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import("./MapComponent"), {
    ssr: false,
}); // Adjust path as necessary

const ContactInfo = () => {
    const contactDetails = {
        phone: '+8801875929428',
        email: 'tahmidtausif66@gmail.com',
        address: '562, Mogoltuly, Cumilla, Bangladesh',
        coordinates: [23.466999785634936, 91.1845577163945] as [number, number],
    };

    return (
        <AnimatedWrapper>
            <section className="py-16 px-6  text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-light mb-12 text-left">Contact Information</h2>

                    <div className="flex flex-col md:flex-row gap-10">
                        {/* Contact Info Column */}
                        <div className="flex-1 flex flex-col space-y-4 gap-4 text-lg">
                            <div className=" border border-gray-700 rounded-xl p-4 py-6 shadow">
                                <p className="font-semibold text-gray-300">Phone:</p>
                                <p className="text-white">{contactDetails.phone}</p>
                            </div>

                            <div className=" border border-gray-700 rounded-xl p-4 py-6 shadow">
                                <p className="font-semibold text-gray-300">Email:</p>
                                <a
                                    href={`mailto:${contactDetails.email}`}
                                    className="text-gray-400 underline"
                                >
                                    {contactDetails.email}
                                </a>
                            </div>

                            <div className=" border border-gray-700 rounded-xl p-4 py-6 shadow">
                                <p className="font-semibold text-gray-300">Address:</p>
                                <p className="text-white">{contactDetails.address}</p>
                            </div>
                        </div>


                        {/* Map Column */}
                        <div className="flex-1">
                            <Suspense fallback={<div>Loading map...</div>}>
                                <MapComponent position={contactDetails.coordinates} />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedWrapper>
    );
};

export default ContactInfo;
