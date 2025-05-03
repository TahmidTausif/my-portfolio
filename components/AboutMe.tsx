"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";



export default function AboutMe() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <AnimatedWrapper>
            <section className=" items-center justify-items-center pt-20 px-6 md:px-24 mx-auto">
                {/* About Me Section */}
                <div className=" flex flex-col  gap-8   text-center mb-16">
                    <h2 className="text-4xl font-light text-left  text-gray-100 mb-6 md:mb-0 ">About Me</h2>
                    <div className="w-full ">
                        <p className="text-lg text-left text-gray-300 mb-8">
                        Hi, I&apos;m Tahmid! A passionate web developer with a strong focus on creating clean, responsive, and user-friendly interfaces. I specialize in building dynamic web applications using React, Next.js, and TypeScript.<br/> <br/> In addition to these frontend technologies, I am well-versed in the MERN stack (MongoDB, Express, React, Node.js) for full-stack development, enabling me to build end-to-end solutions from the database to the UI. I&apos;m constantly exploring new technologies and tools to stay at the forefront of development, and I&apos;m always excited about the opportunity to solve complex problems and bring ideas to life through code.
                        </p>

                        {/* CV Preview and Download Button */}
                        <div className="flex justify-center md:justify-start mb-8">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-transparent border-2 border-gray-700 text-gray-400 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gradient-to-l transform transition-all duration-300"
                            >
                                My Resume
                            </button>
                        </div>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
                            >
                                &times;
                            </button>

                            <h3 className="text-2xl font-bold text-gray-100 mb-4">CV Preview</h3>

                            <div className="w-full h-[500px] overflow-hidden mb-4 rounded">
                                <iframe
                                    src="/tahmid_CV.pdf"
                                    className="w-full h-full rounded"
                                    title="CV Preview"
                                />
                            </div>

                            <div className="text-right">
                                <Link
                                    href="/tahmid_CV.pdf"
                                    download="tahmid_CV.pdf"
                                    className="bg-transparent border-2 border-gray-700 hover:bg-gray-700 text-white px-6 py-2 rounded-md font-medium transition"
                                >
                                    Download CV
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </AnimatedWrapper>
    );
}
