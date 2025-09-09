"use client";
import React, { useState, useEffect } from "react";

// Skeleton Card Component
function SkeletonProjectCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-[var(--frozen-card-bg)] p-6 shadow-lg animate-pulse">
      <div className="w-full aspect-video bg-gray-300 rounded-lg"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
    </div>
  );
}

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  // Fake loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      desc: "Developed a full-fledged e-commerce platform with user authentication, product management, and payment gateway integration.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Klgr6D-A5UVAuTsL91fzm-5OsrGlHtsRosw8JoQCfhCi-Szi5vZu7JkWt0WgTYP2QucMS4tqlU_XmgkazUnkSpw5zXlnAz9XdusCr1TYmX0Kmg3U3_IaA89P4d5wwp0oBQmWPD5MNAf-RIShblHyhvwxfOE-WKvx0RXtL-zCivNR1pKrXJAbXiTObHI4-S6kgyYrfFSL9QAOX6Lsk6Il-PDBHEzZmNVrAJveJ1EnC6VFfqp3YziibdP-zlazVPA7zViKcCYiPv64",
    },
    {
      title: "Interactive Web App",
      desc: "Created an interactive web application with real-time data updates and dynamic user interfaces.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVMbo36QtoD7p994-tNGFF4Z_ylc50npFJuXaT7oa6Vg0krgjaPMguOTl0nnSXiCT0NigZDp8DDOs0AzJjmuQaV1uTI81OTWClerX4El7bdLVy_sbsWEso5JfiHeXgy6cW93eWXQANfUe02Mg6AKqOKk2-51GWBVsj5ec7Qpbfbwa9YUc7_Gz4Z__BBTuseBR373bdTTNhCzQNfRd2D4RACk5pIEhFZ4dqlHphYrjViRh2pYBwIlsD6w0E8ZMotf_0bdTsCN4sWH4T",
    },
    {
      title: "Portfolio Website",
      desc: "Designed and developed a personal portfolio website to showcase skills and projects.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk3y4GTsvTyGW-TJpzUl8NYVoKc0wYXfcPdwJK1ZD52iHE7SAqMc4MLUuxhUig6t-xR_ZbWYGkTC1JKU3d4AAkJjFnGcul1qDWoIX5MUrfO_ZY-WDySTq3-zlP6Kg19N1N0REn0F0OEvU8ZX8kyz2nkZlaHrggRJnjvm1ga1fUZ2PhFwgav_j3RifX_FqLEJBeaMWq1-sKh2xuXNqAz1kHiPqKpIAcM2L69Oyho0igrSgdufZ8iiETJ1ngvPzC7DzSiM9aPrNET-RI",
    },
  ];

  return (
    <div
      className="bg-gradient-to-br from-[var(--frozen-bg-start)] to-[var(--frozen-bg-end)] min-h-screen text-[var(--frozen-text)]"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <main className="px-4 md:px-20 lg:px-40 py-10 flex flex-col gap-16">
        {/* Hero */}
        <section id="hero" className="flex flex-col items-center text-center gap-6">
          <h1 className="text-5xl md:text-6xl font-black">Fareena Iqbal Shah</h1>
          <p className="text-lg md:text-xl text-[var(--frozen-secondary-text)] max-w-3xl">
            Web Developer with nearly 2 years of experience, specializing in creating innovative and user-friendly web applications.
          </p>
          <a
            href="#projects"
            className="mt-4 px-6 py-3 rounded-full bg-[var(--frozen-accent)] text-white font-bold shadow-lg hover:bg-[var(--frozen-accent-dark)] transition-colors"
          >
            View Projects
          </a>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold pb-6">About Me</h2>
          <p className="text-lg text-[var(--frozen-secondary-text)] leading-relaxed">
            I am a dedicated web developer with a strong foundation in front-end and back-end technologies. My experience spans across various projects, from e-commerce platforms to interactive web applications.
          </p>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20">
          <h2 className="text-3xl font-bold pb-6 text-center">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Front-End", desc: "HTML, CSS, JavaScript, React" },
              { title: "Back-End", desc: "Node.js, Express, Python" },
              { title: "Database", desc: "MySQL, MongoDB" },
              { title: "Version Control", desc: "Git, Github" },
            ].map((skill, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-6 text-center bg-[var(--frozen-card-bg)] rounded-2xl shadow-lg hover:-translate-y-1 transition-transform"
              >
                <h3 className="font-bold">{skill.title}</h3>
                <p className="text-sm text-[var(--frozen-secondary-text)]">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-3xl font-bold pb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array(3).fill(0).map((_, i) => <SkeletonProjectCard key={i} />)
              : projects.map((proj, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 rounded-2xl bg-[var(--frozen-card-bg)] shadow-lg overflow-hidden group"
                  >
                    <div
                      className="w-full aspect-video bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${proj.img})` }}
                    ></div>
                    <div className="p-6 pt-0">
                      <h3 className="text-lg font-bold">{proj.title}</h3>
                      <p className="text-sm text-[var(--frozen-secondary-text)]">{proj.desc}</p>
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
}
