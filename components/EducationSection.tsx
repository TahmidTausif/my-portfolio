import AnimatedWrapper from "./AnimatedWrapper";

const educationData = [
    {
        year: "2025 - present",
        degrees: [
            {
                title: "Master of Business Administration (MBA)",
                institution: "IBA - Jahangirnagar University",
                details: "Specialized in business strategy, marketing, and data-driven decision making.",
            },
        ],
    },
    {
        year: "2019 - 2024",
        degrees: [
            {
                title: "Bachelor of Science in Physics",
                institution: "Shahjalal University of Science and Technology",
                details: "Focused on Computational Physics, Reactor physics, and advanced mathematics.",
            },
        ],
    },

];

export default function EducationSection() {
    return (
        <AnimatedWrapper>
            <section className="px-6 md:px-24 my-16 text-gray-100">
                <div className="mb-10 flex items-end justify-between gap-4 border-b border-gray-800 pb-5">
                    <div>
                        <p className="mb-2 text-sm uppercase tracking-[0.28em] text-gray-500">Academic Background</p>
                        <h2 className="text-4xl font-light text-left">Education</h2>
                    </div>
                </div>

                <div className="space-y-6">
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className="rounded-3xl border border-gray-800 bg-[#111] p-6 transition-all duration-300 hover:border-gray-700"
                        >
                            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <span className="w-fit rounded-full border border-gray-700 px-4 py-1 text-sm font-medium text-gray-300">
                                    {item.year}
                                </span>
                            </div>

                            <div className="grid gap-5">
                                {item.degrees.map((degree, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl border border-gray-800 bg-[#0d0d0d] p-5"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-200">{degree.title}</h3>
                                        <p className="mt-2 text-base text-gray-400">{degree.institution}</p>
                                        <p className="mt-3 text-sm leading-7 text-gray-500">{degree.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </AnimatedWrapper>
    );
}
