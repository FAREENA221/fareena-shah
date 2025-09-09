// src/app/experience/page.tsx
"use client";
import React from "react";

export default function ExperiencePage() {
  return (
    <main className="flex-1 px-10 md:px-20 lg:px-40 py-12">
      <div className="layout-content-container mx-auto flex max-w-5xl flex-col gap-16">

        {/* About Section with Page Title */}
        <section
          className="flex flex-col md:flex-row items-center gap-10"
          id="about"
        >
          <div className="w-40 h-40 min-w-40">
            <img
              alt="Fareena Iqbal Shah"
              className="rounded-full object-cover w-full h-full shadow-lg border-4 border-white"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjlNq0CZFuTGJmDaA8hY77uZE6AHLIwKSOgxTAZLY45G8esa2SNlUp7SdXO1sape3DHYk7sjtx89trVRNMao7QHMQOJEIKQu0ngrvlmz3suMUzcvD3lNbllDiPfDxog7V-tYZldUDpJX74edciTQ_5ke17LvqEZUanGDp0pE9mET70FDrmfQZSmkreZ5iy58AUNR_hivTJa8defpPxr5LzctlopPAQoiZCiBUiCxWgYSN5O-146Od0EtW7cCRSlBb5QUrCs489C3Nu"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="frozen-text text-3xl font-bold tracking-tight">
              Experience
            </h1>
            <p className="frozen-secondary-text text-base mt-4 max-w-2xl">
              Passionate web developer with nearly 2 years of experience,
              specializing in creating innovative and responsive web
              applications. Committed to clean UI/UX, accessibility, and
              performance optimization.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <div className="relative border-l-2 frozen-border pl-8">
            <div className="mb-12 relative">
              <div className="absolute w-4 h-4 frozen-highlight-bg rounded-full -left-2 top-1 border-2 border-white"></div>
              <p className="frozen-text text-lg font-semibold">
                Junior Software Developer
              </p>
              <p className="frozen-secondary-text text-base font-medium">
                IIDE, Mumbai
              </p>
              <p className="frozen-secondary-text text-sm">
                Jan 2022 - Present
              </p>
            </div>
            <div className="relative">
              <div className="absolute w-4 h-4 frozen-highlight-bg rounded-full -left-2 top-1 border-2 border-white"></div>
              <p className="frozen-text text-lg font-semibold">
                Web Development Intern
              </p>
              <p className="frozen-secondary-text text-base font-medium">
                Tech Solutions Inc., Remote
              </p>
              <p className="frozen-secondary-text text-sm">
                Jun 2021 - Dec 2021
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
