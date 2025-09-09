export default function ContactPage() {
  return (
    <main className="flex-1 px-10 py-12 md:px-20 lg:px-40 bg-[var(--frozen-bg)] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="frozen-heading tracking-tight text-4xl md:text-5xl font-bold leading-tight">
              Get in Touch
            </h1>
            <p className="frozen-text text-lg font-normal leading-relaxed mt-4">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
          </div>

          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full frozen-bg-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--frozen-heading)]">
                  mail
                </span>
              </div>
              <div>
                <h3 className="frozen-heading font-semibold text-lg">Email</h3>
                <a
                  href="mailto:fareenashah00@gmail.com"
                  className="frozen-text hover:text-[var(--frozen-primary)] transition-colors"
                >
                  fareenashah00@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full frozen-bg-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--frozen-heading)]">
                  call
                </span>
              </div>
              <div>
                <h3 className="frozen-heading font-semibold text-lg">Phone</h3>
                <a
                  href="tel:+919324258669"
                  className="frozen-text hover:text-[var(--frozen-primary)] transition-colors"
                >
                  +91 9324258669
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full frozen-bg-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--frozen-heading)]">
                  location_on
                </span>
              </div>
              <div>
                <h3 className="frozen-heading font-semibold text-lg">
                  Location
                </h3>
                <p className="frozen-text">Santacruz East, Mumbai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="form-input w-full rounded-lg text-[var(--frozen-text)] 
              focus:outline-none focus:ring-2 focus:ring-[var(--frozen-primary)] 
              border frozen-border bg-white h-14 p-4 text-base frozen-placeholder"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input w-full rounded-lg text-[var(--frozen-text)] 
              focus:outline-none focus:ring-2 focus:ring-[var(--frozen-primary)] 
              border frozen-border bg-white h-14 p-4 text-base frozen-placeholder"
            />
            <input
              type="text"
              placeholder="Subject"
              className="form-input w-full rounded-lg text-[var(--frozen-text)] 
              focus:outline-none focus:ring-2 focus:ring-[var(--frozen-primary)] 
              border frozen-border bg-white h-14 p-4 text-base frozen-placeholder"
            />
            <textarea
              placeholder="Your Message"
              className="form-input w-full rounded-lg text-[var(--frozen-text)] 
              focus:outline-none focus:ring-2 focus:ring-[var(--frozen-primary)] 
              border frozen-border bg-white min-h-36 p-4 text-base frozen-placeholder"
            ></textarea>
            <button
              type="submit"
              className="w-full h-12 px-6 rounded-lg frozen-button 
              text-base font-bold leading-normal tracking-wide flex items-center justify-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-center py-8 mt-12 border-t frozen-border">
        <div className="text-center">
          <p className="frozen-text text-base font-normal leading-normal">
            © 2024 Fareena Iqbal Shah. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
