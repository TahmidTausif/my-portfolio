"use client";

import Image from "next/image";
import AnimatedWrapper from "./AnimatedWrapper";

export default function Hero() {
  return (
    <AnimatedWrapper>
      <section className="flex flex-col md:flex-row items-center justify-between max-h-screen mx-auto my-auto gap-6 p-6 md:p-12">
        {/* Left side: Text */}
        <div className="flex-1 text-center md:text-left">
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

        {/* Right side: Profile Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-white">
            <Image
              src="/images/my-photo-1.png"
              alt="Your Name"
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>
    </AnimatedWrapper>
  );
}
