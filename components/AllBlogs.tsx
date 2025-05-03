'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimatedWrapper from './AnimatedWrapper';

type Blog = {
    id: string;
    title: string;
    summary: string;
    image: string;
    date: string;
    author: string;
    tags: string[];
};

export default function AllBlogs() {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        // Fetch blogs data dynamically from the public directory
        const fetchBlogs = async () => {
            const response = await fetch('/data/blogs.json');
            const data: Blog[] = await response.json();
            setBlogs(data);
        };

        fetchBlogs();
    }, []);

    return (
        <AnimatedWrapper>
            <section className="py-16 px-6 bg-[#0a0a0a] text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-light mb-8 text-left">My Blogs</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {blogs.map((blog) => (
                            <div key={blog.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/50 transition">
                                <div className="relative w-full h-52">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        className="object-cover rounded"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        priority
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                                    <p className="text-gray-300 text-sm mb-4">{blog.summary}</p>
                                    <div className="text-xs text-gray-500 mb-2">
                                        <span>{blog.date}</span> | <span>{blog.author}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map((tag, idx) => (
                                            <span key={idx} className="bg-gray-800 text-blue-100 px-2 py-1 rounded text-xs">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedWrapper>
    );
}
