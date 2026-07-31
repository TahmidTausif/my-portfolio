"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedWrapper from "./AnimatedWrapper";



export default function AboutMe() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <AnimatedWrapper>
            <section className="px-6 pt-20 text-gray-100 md:px-24">
                <div className="mb-10 flex items-end justify-between gap-4 border-b border-gray-800 pb-5">
                    <div>
                        <p className="mb-2 text-sm uppercase tracking-[0.28em] text-gray-500">Summary</p>
                        <h2 className="text-left text-4xl font-light">About Me</h2>
                    </div>
                </div>

                <div className="mb-16">
                    <p className="text-left text-lg leading-8 text-gray-300">
                        Hi, I&apos;m Tahmid! A frontend developer focused on building clean, responsive, and user-friendly web applications with React, Next.js, TypeScript, and Tailwind CSS. I enjoy turning complex product requirements into intuitive interfaces that feel polished, fast, and reliable.
                        <br />
                        <br />
                        Currently, I work as a Junior Frontend Developer at World Tech Soft, where I contribute to enterprise-scale products including a Hospital ERP and Resource Management System, and lead frontend development for an Inventory Management System. My work involves building reusable UI components, integrating large sets of REST API endpoints, improving UI and UX quality, and creating secure, scalable frontend architecture with tools like React Query, Zustand, JWT, and Backend-for-Frontend patterns.
                        <br />
                        <br />
                        Alongside frontend development, I also have experience with the MERN stack, which helps me think across the full product flow from database and API design to the final user interface. I&apos;m always exploring better ways to write maintainable code, improve user experience, and build products that solve real-world problems.
                    </p>

                    <div className="mt-8 flex justify-start">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="rounded-full cursor-pointer border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-gray-600 hover:bg-[#151515] hover:text-gray-100"
                        >
                            My Resume
                        </button>
                    </div>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
                        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg max-w-3xl w-full relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-300 hover:text-red-500 text-xl cursor-pointer hover:scale-105 transition-all duration-300"
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
