"use client";

import React, { useState, useEffect } from "react";

// Static achievements data
const achievements = [
  { id: 1, title: "Java Workshop", description: "Java Workshop held at Chetana College." },
  { id: 2, title: "Machine Learning Workshop", description: "Machine Learning held at Chetana College." },
  { id: 3, title: "Event Organizer - ISKRA.TECH", description: "Event Organizer ISKRA.TECH event, drawing 300+ attendees." },
  { id: 4, title: "Event Organizer - TECHRITI", description: "Event Organizer the TECHRITI at Chetana College, involving 200+ participants." },
  { id: 5, title: "Presentation Team Lead", description: "Lead the Presentation team for the Chetana BScIT events." },
];

// Skeleton card
function SkeletonAchievementCard() {
  return (
    <div className="animate-pulse relative flex flex-col gap-4 rounded-2xl bg-[var(--secondary-color)] p-6 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-400"></div>
        <div className="h-6 bg-gray-400 rounded w-3/4"></div>
      </div>
      <div className="mt-2 h-4 bg-gray-400 rounded w-full"></div>
    </div>
  );
}

export default function AchievementsPage() {
  const [loading, setLoading] = useState(true);

  // Fake loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-1 justify-center py-10 sm:py-16 md:py-20 bg-[var(--background-color)] text-[var(--text-primary)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8 gap-16">

        {/* Hero / Title Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Achievements
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-secondary)]">
            Here are some of my key achievements and certifications highlighting my academic and event management accomplishments.
          </p>
        </section>

        {/* Achievements Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? Array(5).fill(0).map((_, i) => <SkeletonAchievementCard key={i} />)
            : achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="relative flex flex-col gap-4 rounded-2xl bg-[var(--secondary-color)] p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-lg">
                      {ach.id}
                    </div>
                    <h3 className="text-2xl font-bold">{ach.title}</h3>
                  </div>
                  <p className="mt-2 text-[var(--text-secondary)]">{ach.description}</p>
                </div>
              ))}
        </div>
      </div>
    </main>
  );
}
