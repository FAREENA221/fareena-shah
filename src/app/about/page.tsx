export default function AboutPage() {
  return (
    <main className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-10 bg-gradient-to-br from-[#a8dff4] to-[#d8f3ff] text-[#0b3d4f] font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif] min-h-screen">
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
                  Web Developer with nearly 2 years of experience, specializing
                  in creating innovative and user-friendly web applications.
                  Passionate about clean code and elegant design.
                </p>
              </div>
              <a
                href="#projects"
                className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-[#68c3e8] text-white text-base font-bold tracking-[0.015em] hover:bg-[#3b9ac8] transition-colors shadow-lg"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-3xl font-bold pb-6 text-center">About Me</h2>
          <p className="text-[#3c7a95] text-lg leading-relaxed text-center max-w-3xl mx-auto">
            I am a dedicated web developer with a strong foundation in
            front-end and back-end technologies. My experience spans across
            various projects, from e-commerce platforms to interactive web
            applications. I am committed to continuous learning and staying
            updated with the latest industry trends to deliver high-quality
            solutions.
          </p>
        </section>
      </div>
    </main>
  )
}
