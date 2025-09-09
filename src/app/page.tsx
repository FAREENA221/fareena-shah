// app/page.tsx
export default function Home() {
  return (
    <main className="bg-frozen-white text-frozen-dark-text font-sans min-h-screen flex flex-col">
      <section className="relative flex items-center justify-center min-h-[calc(100vh-80px)] bg-frozen-hero bg-cover bg-center p-6">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Crafting Digital Experiences with Precision and Passion
          </h1>
          <p className="text-lg text-frozen-silver leading-relaxed mb-8">
            Hi, I’m <span className="font-semibold">Fareena Iqbal Shah</span> —
            Web Developer with nearly 2 years of experience…
          </p>
          <a className="inline-flex items-center justify-center rounded-lg h-12 px-6 bg-frozen-blue hover:bg-frozen-dark-blue text-white shadow-lg hover:shadow-xl transition-all">
            View Projects
          </a>
          <a
            href="/fs/assets/FareenaShah_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full h-12 px-8 border-2 border-frozen-dark-blue text-frozen-dark-blue font-medium hover:bg-frozen-dark-blue hover:text-white shadow-sm transition-all"
          >
            <span>Download Resume</span>
            <span className="material-symbols-outlined ml-2">download</span>
          </a>
        </div>
      </section>
    </main>
  );
}
