"use client";

import React from "react";

// Static education data
const educationList = [
  {
    id: 1,
    degree: "Bachelor of Science - Information Technology",
    institution: "Chetana College",
    period: "2020 - 2023",
    details: "CGPA: 9.1",
  },
  {
    id: 2,
    degree: "HSC & SSC",
    institution: "MSBSHSE",
    period: "2017 - 2020",
    details: "",
  },
];

export default function EducationPage() {
  return (
    <main className="flex flex-1 justify-center py-10 sm:py-16 md:py-20 bg-[var(--background-color)] text-[var(--text-primary)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 gap-16">

        {/* About / Education Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Education
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
            Overview of my academic qualifications and achievements during my studies.
          </p>
        </section>

        {/* Education List */}
        <section>
          <div className="relative border-l-2 frozen-border pl-8">
            {educationList.map((edu) => (
              <div key={edu.id} className="mb-12 relative">
                <div className="absolute w-4 h-4 frozen-highlight-bg rounded-full -left-2 top-1 border-2 border-white"></div>
                <p className="text-lg font-semibold text-[var(--text-primary)]">{edu.degree}</p>
                <p className="text-base font-medium text-[var(--text-secondary)]">{edu.institution}</p>
                <p className="text-sm text-[var(--text-secondary)]">{edu.period}</p>
                {edu.details && (
                  <p className="text-sm text-[var(--text-secondary)] mt-1">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
