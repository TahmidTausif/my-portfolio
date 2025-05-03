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
            <section className="text-gray-100 md:px-24 my-16 ">
                <h2 className="text-4xl font-light mb-10 text-left">Education</h2>

                <div className="relative border-l-4 border-gray-700 pl-6 ml-4">
                    {educationData.map((item, index) => (
                        <div key={index} className="mb-12 relative">
                            {/* Year marker */}
                            <div className="absolute -left-10 top-0 bg-gray-700 text-white font-bold py-1 px-3 rounded shadow-md text-sm">
                                {item.year}
                            </div>

                            {/* Education Cards */}
                            <div className="grid md:grid-cols-2 gap-6 mt-4">
                                {item.degrees.map((degree, i) => (
                                    <div
                                        key={i}
                                        className="bg-[#111] p-6 rounded-xl shadow-md border border-gray-700 hover:border-gray-700 transition-all duration-300"
                                    >
                                        <h3 className="text-xl mt-4 font-bold text-gray-500 mb-1">{degree.title}</h3>
                                        <p className="text-gray-300 font-medium mb-2">{degree.institution}</p>
                                        <p className="text-gray-400 text-sm">{degree.details}</p>
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
