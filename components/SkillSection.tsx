"use client";

import Image from "next/image";
import AnimatedWrapper from "./AnimatedWrapper";

const techSkills = [
    { name: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", iconUrl: "https://api.iconify.design/logos:tailwindcss-icon.svg" },
    { name: "MongoDB", iconUrl: "https://api.iconify.design/logos:mongodb-icon.svg" },
    { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Express", iconUrl: "/express-js.svg" },
    { name: "Redux", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "Postman", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Firebase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "VS Code", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const softSkills = [
    {
        name: "Teamwork",
        icon: "🤝",
        description: "Collaborate effectively with others to achieve common goals.",
    },
    {
        name: "Communication",
        icon: "🗣️",
        description: "Clearly express ideas and actively listen in team discussions.",
    },
    {
        name: "Problem Solving",
        icon: "🧠",
        description: "Identify issues, think critically, and devise practical solutions.",
    },
    {
        name: "Adaptability",
        icon: "🔄",
        description: "Quickly adjust to changing environments and priorities.",
    },
    {
        name: "Time Management",
        icon: "⏰",
        description: "Efficiently organize tasks and meet project deadlines.",
    },
    {
        name: "Leadership",
        icon: "🎯",
        description: "Guide and motivate team members toward achieving goals.",
    },
];


export default function SkillsSection() {
    return (
        <AnimatedWrapper>
            <section className="py-16 px-6 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-light mb-8 text-left">My Skills</h2>

                    {/* Tech Skills */}
                    <div>
                        <h3 className="text-2xl font-extralight mb-8 text-white">Technical Skills</h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
                            {techSkills.map((skill, idx) => (
                                <div key={idx} className="flex flex-col items-center text-sm">
                                    <div className="w-12 h-12 relative mb-2">
                                        <Image
                                            src={skill.iconUrl}
                                            alt={skill.name}
                                            fill
                                            className="object-contain"
                                            sizes="48px"
                                        />
                                    </div>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-extralight mb-8 text-white">Soft Skills</h3>
                        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                            {softSkills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="bg-gray-800 px-6 py-4 rounded-xl flex flex-col items-start text-white hover:bg-gray-700 transition max-w-xs text-left"
                                >
                                    <span className="text-2xl mb-2">{skill.icon}</span>
                                    <span className="text-lg font-semibold">{skill.name}</span>
                                    <p className="text-sm text-gray-300 mt-1">{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedWrapper>
    );
}
