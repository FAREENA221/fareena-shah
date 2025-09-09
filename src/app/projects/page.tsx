"use client";

import React, { useState, useEffect } from "react";

// Sample static projects data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Developed a fully functional e-commerce platform with user authentication, product management, and payment gateway integration.",
    image:
      "https://images.unsplash.com/photo-1612831665766-c0378e03e09b?auto=format&fit=crop&w=800&q=80",
    year: 2023,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase skills and projects, focusing on clean UI/UX and responsiveness.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4430b7?auto=format&fit=crop&w=800&q=80",
    year: 2022,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Built a full-stack task management app with drag-and-drop interface, notifications, and analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1590608897129-79dca8f4f5ff?auto=format&fit=crop&w=800&q=80",
    year: 2023,
  },
];

// Skeleton card
function SkeletonProjectCard() {
  return (
    <div className="animate-pulse flex flex-col gap-4 rounded-2xl bg-gray-200 p-6">
      <div className="h-64 w-full rounded-lg bg-gray-300"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
    </div>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [loading, setLoading] = useState(true);

  // Fake loading effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-1 justify-center py-10 sm:py-16 md:py-20 bg-[var(--background-color)] text-[var(--text-primary)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 gap-16">

        {/* About / Projects Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
            Explore a collection of my projects showcasing web development, full-stack applications, and innovative solutions.
          </p>
        </section>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {loading
            ? Array(3)
                .fill(0)
                .map((_, i) => <SkeletonProjectCard key={i} />)
            : projects.map((project) => (
                <div
                  key={project.id}
                  className="relative flex flex-col gap-4 rounded-2xl bg-[var(--secondary-color)] p-6 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div
                    className="h-64 w-full rounded-lg bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>

                  {/* Details */}
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="mt-2 text-[var(--text-secondary)] line-clamp-3">
                      {project.description}
                    </p>
                    <span className="mt-2 text-sm font-medium text-gray-500">
                      📅 {project.year}
                    </span>
                  </div>
                </div>
              ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="relative w-full max-w-3xl rounded-xl bg-white p-8 shadow-xl">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <div className="flex flex-col gap-6">
                <div
                  className="h-64 w-full rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                ></div>
                <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {selectedProject.description}
                </p>
                <span className="text-sm font-medium text-gray-500">
                  📅 {selectedProject.year}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
