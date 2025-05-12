'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedWrapper from './AnimatedWrapper';
import { HiArrowLongRight } from 'react-icons/hi2';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
};

const AllProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // Fetch projects data dynamically from the public directory
    const fetchProjects = async () => {
      const response = await fetch('/data/projects.json');
      const data: Project[] = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.tech.includes(filter)
  );

  return (
    <AnimatedWrapper>
      <div className="px-6 py-16 ">
      <h2 className="text-4xl font-light mb-8 text-left">My Projects</h2>
        <div className="mb-6 space-x-4">
          {['All', 'React', 'Next.js'].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-4 py-2 rounded-full border-2 border-gray-700 ${filter === btn ? 'bg-gray-700 text-white' : 'bg-transparent text-white'
                }`}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <div className="flex flex-col h-full border rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/50 transition cursor-pointer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap mt-3 gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <div
                      className="inline-flex items-center gap-1 text-gray-300  font-semibold hover:scale-105 transition-all duration-300"
                    >
                      Project Details <HiArrowLongRight className="mt-[1px] text-2xl" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            
          ))}
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default AllProjects;
