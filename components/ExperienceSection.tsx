import AnimatedWrapper from "./AnimatedWrapper";

const experienceData = [
    {
        role: "Junior Frontend Developer",
        company: "World Tech Soft",
        period: "July 2025 - Present",
        location: "Mohammadpur, Dhaka",
        highlights: [
            "Contributed to an enterprise Hospital ERP and Resource Management System using React.js, Tailwind CSS, React Query, Axios, REST APIs, and Lexical Editor by building reusable UI components, integrating 50+ API endpoints, and resolving 100+ UI and UX issues.",
            "Led frontend development of an Inventory Management System with Next.js, TypeScript, Tailwind CSS, Zustand, React Query, Shadcn/UI, and Lexical Editor to deliver scalable product features.",
            "Implemented JWT-based authentication and authorization, adopted a Backend-for-Frontend architecture with proxy routes, and built reusable API hooks and state management patterns for secure, maintainable applications.",
            "Collaborated closely with backend developers and QA teams to ship production-ready features with responsive interfaces, clean code, and an optimized user experience.",
        ],
    },
];

export default function ExperienceSection() {
    return (
        <AnimatedWrapper>
            <section className="px-6 md:px-24 my-16 text-gray-100">
                <div className="mb-10 flex items-end justify-between gap-4 border-b border-gray-800 pb-5">
                    <div>
                        <p className="mb-2 text-sm uppercase tracking-[0.28em] text-gray-500">Professional Journey</p>
                        <h2 className="text-4xl font-light text-left">Experience</h2>
                    </div>
                </div>

                <div className="space-y-6">
                    {experienceData.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-gray-800 bg-[#111] p-6 transition-all duration-300 hover:border-gray-700"
                        >
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-200">{item.role}</h3>
                                    <p className="mt-2 text-base text-gray-400">{item.company}</p>
                                </div>

                                <div className="flex flex-col gap-2 text-sm text-gray-400 md:items-end">
                                    <span className="w-fit rounded-full border border-gray-700 px-4 py-1 text-gray-300">
                                        {item.period}
                                    </span>
                                    <span>{item.location}</span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </AnimatedWrapper>
    );
}
