"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [processing, setProcessing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 Sending form data:", formData);

    setProcessing(true);
    const toastId = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("🔎 API response:", result);

      if (result.success) {
        toast.success("Message sent successfully!", { id: toastId });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(result.error || "Failed to send");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to send", { id: toastId });
      console.error("❌ Contact submit error:", err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto py-12 px-6">
      <Toaster
        position="top-right"
        toastOptions={{ style: { background: "#333", color: "#fff" } }}
      />
      <h1 className="text-3xl font-bold mb-6 text-teal-800">Contact Us</h1>

      <div className="flex gap-6">
        {/* Left Column */}
        <div className="w-1/3 space-y-6 bg-teal-50 p-6 rounded-md border">
          <h2 className="text-xl font-semibold text-teal-900">Get in Touch</h2>
          <p className="text-sm text-teal-700">
            Have a question or want to collaborate? Reach out directly or use
            the form.
          </p>
          <ul className="space-y-2 text-teal-800">
            <li>📍 Bandra, Mumbai, India</li>
            <li>
              📞{" "}
              <a
                href="tel:+919967651474"
                className="text-teal-600 hover:underline"
              >
                +91-9967651474
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:fareenashah00@gmail.com"
                className="text-teal-600 hover:underline"
              >
                fareenashah00@gmail.com
              </a>
            </li>
          </ul>
          <div className="pt-4">
            <h3 className="font-semibold text-teal-700">Important Links</h3>
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/fareena-shah-b349b7358/"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                🌐 LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 bg-white p-6 rounded-md border shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-teal-700">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-md focus:ring-2 outline-none"
              required
              disabled={processing}
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-md focus:ring-2 outline-none"
              required
              disabled={processing}
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 border rounded-md focus:ring-2 outline-none"
              required
              disabled={processing}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border rounded-md focus:ring-2 outline-none"
              required
              disabled={processing}
            />
            <button
              type="submit"
              disabled={processing}
              className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 rounded-md hover:opacity-90 transition"
            >
              {processing ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
