// src/app/about/page.tsx
"use client";
import React from "react";

export default function AboutPage() {
  return (
    <div
      className="bg-gradient-to-br from-[var(--frozen-bg-start)] to-[var(--frozen-bg-end)]"
      style={{
        fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif',
      }}
    >
      <div className="relative flex size-full min-h-screen flex-col text-[var(--frozen-text)] overflow-x-hidden">
        <main className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-5xl flex-1 gap-16">
            {/* Hero Section */}
            <section id="hero">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-10 md:px-12 md:pb-12"
                  style={{
                    backgroundImage:
                      'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBOok9vVTJvdCXJaQq657aDEeIr34XlUefZNzj7zmdS3BjIKZu0f48WU6e1HxW_UYVtll7Gkst44XZnft8eoCM6MhO4VU9p0ZziiO1rRurYw42kddcH1T0Sig-Vt4GLPPuli9vlAHmH57fNj-6NJBtpJBZZuUm_EutEazBYpNgKdVCDcczBKDg6NQwFK_vmcw0M-M7JUJc4dyategP6H_FVU-TkRCSX_4hI43ohCPJA0LaTGo86RfTJsb4RdNEkYtCk-DZLx7ZTfpt")',
                  }}
                >
                  <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-white text-5xl font-black leading-tight tracking-tighter md:text-6xl">
                      Fareena Iqbal Shah
                    </h1>
                    <p className="text-gray-200 text-base font-normal leading-relaxed max-w-2xl md:text-lg">
                      Web Developer with nearly 2 years of experience,
                      specializing in creating innovative and user-friendly web
                      applications. Passionate about clean code and elegant
                      design.
                    </p>
                  </div>
                  <a
                    href="#projects"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--frozen-accent)] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[var(--frozen-accent-dark)] transition-colors shadow-lg mt-4"
                  >
                    <span className="truncate">View Projects</span>
                  </a>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="scroll-mt-20">
              <h2 className="text-[var(--frozen-text)] text-3xl font-bold leading-tight tracking-[-0.015em] pb-6 text-center">
                About Me
              </h2>
              <p className="text-[var(--frozen-secondary-text)] text-lg font-normal leading-relaxed text-center max-w-3xl mx-auto">
                I am a dedicated web developer with a strong foundation in
                front-end and back-end technologies. My experience spans across
                various projects, from e-commerce platforms to interactive web
                applications. I am committed to continuous learning and staying
                updated with the latest industry trends to deliver high-quality
                solutions.
              </p>
            </section>

            {/* Skills Section */}
            <section id="skills" className="scroll-mt-20">
              <h2 className="text-[var(--frozen-text)] text-3xl font-bold leading-tight tracking-[-0.015em] pb-6 text-center">
                Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Front-End",
                    desc: "HTML, CSS, JavaScript, React",
                  },
                  {
                    title: "Back-End",
                    desc: "Node.js, Express, Python",
                  },
                  {
                    title: "Database",
                    desc: "MySQL, MongoDB",
                  },
                  {
                    title: "Version Control",
                    desc: "Git, Github",
                  },
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 rounded-2xl border border-[var(--frozen-border)] bg-[var(--frozen-card-bg)] p-6 text-center items-center shadow-lg transition-transform hover:-translate-y-1"
                  >
                    <div className="text-[var(--frozen-accent)]">
                      <i className="ri-code-line text-3xl"></i>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-[var(--frozen-text)] text-lg font-bold leading-tight">
                        {skill.title}
                      </h3>
                      <p className="text-[var(--frozen-secondary-text)] text-sm font-normal leading-normal">
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-20">
              <h2 className="text-[var(--frozen-text)] text-3xl font-bold leading-tight tracking-[-0.015em] pb-6 text-center">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
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
                ].map((proj, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-4 rounded-2xl bg-[var(--frozen-card-bg)] shadow-lg overflow-hidden group"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${proj.img})` }}
                    ></div>
                    <div className="p-6 pt-0">
                      <h3 className="text-[var(--frozen-text)] text-lg font-bold leading-normal">
                        {proj.title}
                      </h3>
                      <p className="text-[var(--frozen-secondary-text)] text-sm font-normal leading-relaxed">
                        {proj.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
