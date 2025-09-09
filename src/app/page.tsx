import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* ❄️ Hero Section */}
        <section className="py-20 sm:py-32 relative">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center section-glass">
              {/* Name + Tagline */}
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-frozen">
                Fareena Iqbal Shah
              </h1>
              <p className="mt-4 text-xl font-semibold text-frozen">
                Web Developer | WordPress • MERN • Next.js
              </p>

              {/* Short Bio */}
              <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed text-[var(--text-primary)]">
                I’m a passionate Web Developer with nearly 2 years of experience
                building modern, responsive, and user-friendly applications.
                Skilled in React, Node.js, WordPress, Git, Figma, HTML/CSS,
                JavaScript, Bootstrap, and AngularJS — I love crafting clean,
                innovative, and accessible digital experiences.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                {/* Download Resume Button */}
                <a
                  href="/FareenaShah_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-frozen w-full sm:w-auto flex items-center justify-center"
                >
                  Download Resume
                </a>

                <Link href="/contact" passHref>
                  <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-[var(--secondary-color)] text-base font-semibold rounded-full text-[var(--text-primary)] bg-transparent hover:bg-[var(--secondary-color)] hover:text-white transition-all duration-300 transform hover:scale-105">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
