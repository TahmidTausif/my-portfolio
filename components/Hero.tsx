"use client";

import Image from "next/image";
import AnimatedWrapper from "./AnimatedWrapper";
import Link from "next/link";

// Tech icons for floating
const floatingSkills = [
  {
    name: "React",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Next.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    iconUrl: "https://api.iconify.design/logos:mongodb-icon.svg",
  },
];

const iconPositions = [
  "top-0 left-1/2 -translate-y-1/2",
  "top-1/3 left-0 -translate-x-1/2",
  "top-1/3 right-0 translate-x-1/2",
  "bottom-0 left-2/3 translate-y-1/2",
  "bottom-0 right-2/3 translate-y-1/2",
];

const randomDelays = floatingSkills.map(() => {
  // Random delay between 0 and 2 seconds
  return `${(Math.random() * 2).toFixed(2)}s`;
});

export default function Hero() {
  return (
    <AnimatedWrapper>
      <section className="flex flex-col md:flex-row items-center justify-between max-h-screen mx-auto my-auto gap-6 p-6 md:p-12">
        {/* Left side: Text */}
        <div className="flex-1 text-left md:text-left">
          <h1 className="text-3xl md:text-5xl font-light text-gray-100 mb-4">
            Hi, I&apos;m <span className="text-gray-300">Tahmidul Islam</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-400 mb-4">
            Full-Stack Developer
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
            I design and build scalable full-stack applications using modern web technologies. My passion lies in crafting intuitive user experiences and solving real-world problems.
          </p>
        </div>

        {/* Right side: Profile Image with Floating Icons */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg hover:shadow-white/30 border-8 transition-all duration-300 border-white">
            {/* Floating Icons */}
            {floatingSkills.map((skill, index) => {

              const isNextJs = skill.name.toLowerCase() === "next.js";
              return (

                <div
                  key={skill.name}
                  className={`absolute z-20  w-8 h-8 md:w-10 md:h-10 ${iconPositions[index]} animate-float ${
                    isNextJs ? "rounded-full border-2 border-white" : ""
                  }` }
                  style={{ animationDelay: randomDelays[index] }}
                >
                  <Image
                    src={skill.iconUrl}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )
            })}

            {/* Profile Image */}
            <div className="w-full h-full rounded-full overflow-hidden ">
              <Image
                src="/images/my-photo-1.png"
                alt="Your Name"
                fill
                className="rounded-full w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="flex justify-start gap-6 mt-8 px-6 md:px-12">
        <Link href="/about" className="px-6 py-2 border-2 bg-transparent border-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300">
          About
        </Link>
        <Link href="/projects" className="px-6 py-2 border-2 bg-transparent border-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300">
          Projects
        </Link>
      </section>
    </AnimatedWrapper>
  );
}
