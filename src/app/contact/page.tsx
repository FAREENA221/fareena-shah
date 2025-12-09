"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub size={28} />,
      link: "https://github.com/FAREENA221",
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={28} />,
      link: "https://www.linkedin.com/in/fareena-shah-b349b7358/",
      color: "hover:text-blue-700",
    },
    {
      name: "Email",
      icon: <FaEnvelope size={28} />,
      link: "mailto:fareenashah00@gmail.com",
      color: "hover:text-red-600",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 px-6 py-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 text-center">
        Get in Touch
      </h1>
      <p className="text-center text-gray-600 max-w-xl mb-12">
        I’m always open to collaborating, discussing ideas, or just saying hi! Connect with me through the links below.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        {contacts.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 bg-white shadow-md rounded-lg px-6 py-4 transition-transform transform hover:-translate-y-1 hover:shadow-xl ${c.color}`}
          >
            <span className="text-2xl">{c.icon}</span>
            <span className="font-semibold text-gray-800">{c.name}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
