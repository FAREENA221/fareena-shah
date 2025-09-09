export default function EducationPage() {
  return (
    <main className="px-4 md:px-10 lg:px-40 py-16 lg:py-24 bg-[var(--frozen-white)] min-h-screen">
      <div className="layout-content-container mx-auto flex max-w-[960px] flex-col gap-16">
        <section id="education">
          <h2 className="text-[var(--frozen-dark-blue)] text-3xl font-bold leading-tight tracking-[-0.015em] pb-6">
            Education
          </h2>
          <div className="border-l-2 border-[var(--frozen-blue)] pl-6 space-y-8">
            <div>
              <p className="text-[var(--frozen-dark-blue)] text-lg font-bold leading-normal">
                BSc in Information Technology
              </p>
              <p className="text-[var(--frozen-text)] text-base font-normal leading-normal">
                Chetana College
              </p>
            </div>
            <div>
              <p className="text-[var(--frozen-dark-blue)] text-lg font-bold leading-normal">
                HSC
              </p>
              <p className="text-[var(--frozen-text)] text-base font-normal leading-normal">
                MSBSHSE
              </p>
            </div>
            <div>
              <p className="text-[var(--frozen-dark-blue)] text-lg font-bold leading-normal">
                SSC
              </p>
              <p className="text-[var(--frozen-text)] text-base font-normal leading-normal">
                MSBSHSE
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
