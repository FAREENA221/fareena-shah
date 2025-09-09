export default function ExperiencePage() {
  return (
    <main className="flex-1 px-10 md:px-20 lg:px-40 py-16 bg-[var(--frozen-bg)] min-h-screen">
      <div className="layout-content-container mx-auto flex max-w-4xl flex-col gap-16">
        <section id="experience">
          <h2 className="frozen-text text-3xl font-bold tracking-tight mb-12 text-center md:text-left">
            Experience
          </h2>

          <div className="relative border-l-2 frozen-border pl-8 space-y-12">
            {/* Job 1 */}
            <div className="relative">
              <div className="absolute w-4 h-4 frozen-highlight-bg rounded-full -left-2 top-1 border-2 border-white"></div>
              <p className="frozen-text text-lg font-semibold">
                Junior Software Developer
              </p>
              <p className="frozen-secondary-text text-base font-medium">
                IIDE, Mumbai
              </p>
              <p className="frozen-secondary-text text-sm">
                Jan 2022 – Present
              </p>
            </div>

            {/* Job 2 */}
            <div className="relative">
              <div className="absolute w-4 h-4 frozen-highlight-bg rounded-full -left-2 top-1 border-2 border-white"></div>
              <p className="frozen-text text-lg font-semibold">
                Web Development Intern
              </p>
              <p className="frozen-secondary-text text-base font-medium">
                Tech Solutions Inc., Remote
              </p>
              <p className="frozen-secondary-text text-sm">
                Jun 2021 – Dec 2021
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
