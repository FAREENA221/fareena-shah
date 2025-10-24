"use client";
import React, { useState, useEffect } from "react";

// Skeleton Loader for Project Cards
function SkeletonProjectCard() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white/40 backdrop-blur-md p-6 shadow-md animate-pulse border border-white/30">
      <div className="w-full aspect-video bg-gray-300/50 rounded-lg"></div>
      <div className="h-6 bg-gray-300/50 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300/50 rounded w-full mt-2"></div>
    </div>
  );
}

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

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
      className="min-h-screen bg-[linear-gradient(135deg,#f9fafb,#e2e8f0)] text-[var(--frozen-text)]"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <main className="px-4 md:px-20 lg:px-40 py-14 flex flex-col gap-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl p-10 shadow-md">
          <h1 className="text-5xl md:text-6xl font-black mb-3 text-gray-900">
            Fareena Iqbal Shah
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Web Developer · WordPress · MERN · Next.js
          </p>
          <p className="mt-6 text-[var(--frozen-secondary-text)] text-base md:text-lg">
            I am a dedicated web developer with a strong foundation in front-end
            and back-end technologies. My experience spans across e-commerce,
            portfolio, and interactive applications, with a focus on precision,
            performance, and clean design.
          </p>
          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-[#dbeafe] text-[#1e3a8a] font-bold shadow-lg hover:bg-[#bfdbfe] transition-colors"
          >
            View Projects
          </a>
        </section>

        {/* Skills */}
        <section className="bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl p-10 shadow-md">
          <h2 className="text-3xl font-bold pb-6 text-center text-gray-900">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Front-End", desc: "HTML, CSS, JavaScript, React" },
              { title: "Back-End", desc: "Node.js, Express, Python" },
              { title: "Database", desc: "MySQL, MongoDB" },
              { title: "Version Control", desc: "Git, Github" },
            ].map((skill, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-6 text-center bg-white/60 backdrop-blur-sm rounded-2xl shadow-md border border-white/30 hover:-translate-y-1 transition-transform"
              >
                <h3 className="font-semibold text-gray-900">{skill.title}</h3>
                <p className="text-sm text-gray-700">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl p-10 shadow-md"
        >
          <h2 className="text-3xl font-bold pb-6 text-center text-gray-900">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading
              ? Array(3)
                  .fill(0)
                  .map((_, i) => <SkeletonProjectCard key={i} />)
              : projects.map((proj, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 rounded-2xl bg-white/60 backdrop-blur-sm shadow-md overflow-hidden border border-white/30 group"
                  >
                    <div
                      className="w-full aspect-video bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${proj.img})` }}
                    ></div>
                    <div className="p-6 pt-0">
                      <h3 className="text-lg font-bold text-gray-900">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-gray-700">{proj.desc}</p>
                    </div>
                  </div>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
}
