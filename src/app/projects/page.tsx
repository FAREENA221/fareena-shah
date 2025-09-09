// app/projects/page.tsx
"use client";

import React from "react";

export default function ProjectsPage() {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[var(--c-ice-blue)] text-gray-800 font-['Plus Jakarta Sans','Noto Sans',sans-serif]">
      {/* Main */}
      <main className="flex-1 px-4 sm:px-10 md:px-20 lg:px-40 py-12">
        <div className="layout-content-container flex flex-col max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="@container">
            <div
              className="flex min-h-[480px] flex-col gap-6 rounded-2xl bg-cover bg-center bg-no-repeat p-8 @[480px]:gap-8 items-start justify-end shadow-xl"
              style={{
                backgroundImage:
                  'linear-gradient(to top, rgba(70, 130, 180, 0.7) 0%, rgba(0, 0, 139, 0.3) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgUCpmolLEfLy4Rl6j4MGTTXzAIB9q36Morjx-EE8gMFOFWMG2zwixreDj-PZDKSf6HVqroXgOTm1oF_k5K_DAO8n4zBw7mTnuJEaQvmSUEddymO7Hl-I8QOTGWIn_hH0Mjme1wrHRmI1MWQXGQKrW9alQD3S0q7xCNi5KKXftlNZ7kDo6k1HESvQnF6bBgW-a6wOk7mCIL_4eMU4CQk-lbsIYUKpn3p0caKAesnbtIM36n94LMV3iXQRKl8hl-FjD7tUoo5t3eu6t")',
              }}
            >
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-white text-5xl font-extrabold leading-tight tracking-tighter @[480px]:text-6xl">
                  Fareena Iqbal Shah
                </h1>
                <p className="text-[var(--c-ice-blue)] text-base font-light leading-relaxed max-w-2xl @[480px]:text-lg">
                  Web Developer with nearly 2 years of experience, specializing
                  in creating innovative and responsive web applications.
                  Passionate about clean UI/UX and performance optimization.
                </p>
              </div>
              <a
                href="#projects"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--c-deep-sky-blue)] text-white text-base font-bold leading-normal tracking-wide shadow-lg transition-transform hover:scale-105"
              >
                <span className="truncate">View Projects</span>
              </a>
            </div>
          </section>

          {/* Projects */}
          {/* (keep your Featured + Other Projects sections as-is, same structure as your HTML) */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--c-light-blue)] mt-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 px-5 py-10 text-center">
          <p className="text-[var(--c-steel-blue)] text-sm font-normal leading-normal">
            © 2024 Fareena Iqbal Shah. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
