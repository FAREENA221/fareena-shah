"use client";

import React, { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Developed a full-fledged e-commerce platform with authentication, product management, and integrated payments.",
    image:
      "https://images.unsplash.com/photo-1612831665766-c0378e03e09b?auto=format&fit=crop&w=800&q=80",
    year: 2023,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Designed and deployed a personal portfolio with responsive UI and smooth animations using Next.js and Tailwind.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4430b7?auto=format&fit=crop&w=800&q=80",
    year: 2022,
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "Built a clean and modern task management app with drag-and-drop, progress tracking, and analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1590608897129-79dca8f4f5ff?auto=format&fit=crop&w=800&q=80",
    year: 2023,
  },
];

function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-xl bg-gray-200/70 h-56"></div>
  );
}

export default function ProjectsPage() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#f9fafb] text-gray-800 py-16 px-6 md:px-12">
      <section className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Projects
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          A selection of projects that highlight my work in full-stack
          development, UI/UX, and web technologies.
        </p>
      </section>

      {/* Project Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : projects.map((project) => (
              <div
                key={project.id}
                className="group cursor-pointer rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                onClick={() => setSelected(project)}
              >
                <div
                  className="h-48 w-full bg-cover bg-center rounded-t-xl"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description}
                  </p>
                  <span className="block text-xs text-gray-500 mt-2">
                    📅 {project.year}
                  </span>
                </div>
              </div>
            ))}
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl p-6">
            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setSelected(null)}
            >
              &times;
            </button>

            <div className="flex flex-col gap-4">
              <div
                className="h-48 w-full rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${selected.image})` }}
              ></div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selected.title}
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                {selected.description}
              </p>
              <span className="text-xs text-gray-500">
                📅 {selected.year}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
