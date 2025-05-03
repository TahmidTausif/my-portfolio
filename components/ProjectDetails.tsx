// components/ProjectDetails.tsx
"use client";

import { useParams } from 'next/navigation';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  features?: string[];
  live?: string;
  frontend?: string;
  backend?: string;
};

// Fetch project details based on project ID
async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/projects.json`, {
    next: { revalidate: 3600 } // ISR: Revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
}

export default function ProjectDetails({ projectId }: { projectId: string }) {
  const { id } = useParams(); // Use useParams to get the dynamic ID from the URL
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projects = await getProjects();
        const foundProject = projects.find((p) => p.id === id || p.id === projectId);
        
        if (foundProject) {
          setProject(foundProject);
        } else {
          notFound();
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        notFound();
      }
    };

    if (id || projectId) {
      fetchProject();
    }
  }, [id, projectId]);

  if (!project) return <div>Loading...</div>;

  return (
    <AnimatedWrapper>
      <div className="px-6 py-10 w-full mx-auto flex flex-col gap-6">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={800}
          priority
          className="w-full h-96 object-cover rounded"
        />

        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="text-lg text-gray-300">{project.description}</p>

        <div>
          <h3 className="text-xl font-semibold mt-6">Technologies Used:</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.features && (
          <div>
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-white">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {(project.live || project.frontend || project.backend) && (
          <div className="mt-10 flex flex-wrap gap-4 justify-start">
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded shadow"
              >
                <FaExternalLinkAlt />
                Live Site
              </Link>
            )}
            {project.frontend && (
              <Link
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded shadow"
              >
                <FaGithub />
                Frontend Code
              </Link>
            )}
            {project.backend && (
              <Link
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded shadow"
              >
                <FaGithub />
                Backend Code
              </Link>
            )}
          </div>
        )}
      </div>
    </AnimatedWrapper>
  );
}
