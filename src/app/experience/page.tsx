"use client";

import React, { useState, useEffect } from "react";

// Static experience data
const experienceList = [
  {
    id: 1,
    role: "Junior Software Developer",
    company: "IIDE, Mumbai",
    period: "Jan 2022 - Present",
  },
  {
    id: 2,
    role: "Web Development Intern",
    company: "Tech Solutions Inc., Remote",
    period: "Jun 2021 - Dec 2021",
  },
];

// Skeleton card
function SkeletonExperienceCard() {
  return (
    <div className="animate-pulse mb-12 relative">
      <div className="absolute w-4 h-4 bg-gray-400 rounded-full -left-2 top-1 border-2 border-white"></div>
      <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-400 rounded w-1/2 mb-1"></div>
      <div className="h-3 bg-gray-400 rounded w-1/4"></div>
    </div>
  );
}

export default function ExperiencePage() {
  const [loading, setLoading] = useState(true);

  // Fake loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-1 justify-center py-10 sm:py-16 md:py-20 bg-[var(--background-color)] text-[var(--text-primary)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 gap-16">

        {/* Hero / Title Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
          <div className="w-40 h-40 min-w-40 mx-auto md:mx-0">
            <img
              alt="Fareena Iqbal Shah"
              className="rounded-full object-cover w-full h-full shadow-lg border-4 border-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjlNq0CZFuTGJmDaA8hY77uZE6AHLIwKSOgxTAZLY45G8esa2SNlUp7SdXO1sape3DHYk7sjtx89trVRNMao7QHMQOJEIKQu0ngrvlmz3suMUzcvD3lNbllDiPfDxog7V-tYZldUDpJX74edciTQ_5ke17LvqEZUanGDp0pE9mET70FDrmfQZSmkreZ5iy58AUNR_hivTJa8defpPxr5LzctlopPAQoiZCiBUiCxWgYSN5O-146Od0EtW7cCRSlBb5QUrCs489C3Nu"
            />
          </div>
          <div>
            <h1 className="frozen-text text-3xl font-bold tracking-tight">
              Experience
            </h1>
            <p className="frozen-secondary-text text-base mt-4 max-w-2xl">
              Passionate Software Developer with nearly 2 years of experience,
              specializing in creating innovative and responsive web
              applications. Committed to clean UI/UX, accessibility, and
              performance optimization.
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience">
          <div className="relative border-l-2 frozen-border pl-8">
            {loading
              ? Array(2)
                  .fill(0)
                  .map((_, i) => <SkeletonExperienceCard key={i} />)
              : experienceList.map((exp) => (
                  <div key={exp.id} className="mb-12 relative">
                    <div className="absolute w-4 h-4 frozen-highlight-bg rounded-full -left-2 top-1 border-2 border-white"></div>
                    <p className="frozen-text text-lg font-semibold">{exp.role}</p>
                    <p className="frozen-secondary-text text-base font-medium">{exp.company}</p>
                    <p className="frozen-secondary-text text-sm">{exp.period}</p>
                  </div>
                ))}
          </div>
        </section>

      </div>
    </main>
  );
}
