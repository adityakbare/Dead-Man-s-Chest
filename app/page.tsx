import { IoTriangleSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20 px-4 bg-black text-white font-mono">
      <div className="w-full max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex justify-left mb-16">
          <IoTriangleSharp className="h-12 w-12 text-white" />
        </div>

        {/* Introduction */}
        <div className="mb-14 text-left">
          <h1 className="text-white text-2xl font-bold mb-4">Aditya Akbar</h1>
          <p className="text-neutral-500 text-sm mt-2">Based in Tangerang, Indonesia.</p>
        </div>

        {/* Recognition */}
        <div className="space-y-6 mb-8">
          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Communications Assistant</h3>
              <p className="text-neutral-500 text-sm">Dept. of Communication & Informatics</p>
            </div>
            <p className="text-neutral-500 text-sm">2023</p>
          </div>
        </div>

        {/* Awards */}
        <div className="mb-8">
          <h2 className="text-lg mb-6">Education</h2>
          <div className="flex justify-between items-start border-b border-neutral-800 pb-4 mb-4">
            <div>
              <h3 className="font-medium">BA in Communication</h3>
              <p className="text-neutral-500 text-sm">Syekh Yusuf Islamic University</p>
            </div>
            <p className="text-neutral-500 text-sm">2020 — 2024</p>
          </div>
        </div>

        {/* Featured */}
<div className="mb-20">
  <h2 className="text-lg mb-4">Featured</h2>
  <div className="space-y-10">
    {[
      {
        title: "Invoice Generator",
        desc: "2025",
        images: ["Invoise.png", "Invoise1.png"],
      },
      {
        title: "Newsletter Signup",
        desc: "2025",
        images: ["Tickr.png"],
      },
      {
        title: "Blueprint",
        desc: "2025",
        images: ["Blueprint.png"],
      },
    ].map((project, idx) => (
      <div key={idx}>
        {/* Title and Year */}
        <div className="mb-4">
          <p className="text-neutral-500 text-sm">
            {project.desc} — <span className="text-white">{project.title}</span>
          </p>
        </div>

        {/* Images */}
        <div className="space-y-8">
          {project.images.map((img, i) => (
            <div key={i} className="w-full border border-neutral-800">
              <Image
                src={`/images/${img}`}
                alt={`${project.title} ${i + 1}`}
                width={1000}
                height={600}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Activity */}
        <div className="mb-20">
          <h2 className="text-lg mb-4">Activity</h2>
          <p className="text-neutral-500 text-sm mb-4">
            Exploring how technology can streamline processes and improve work efficiency.
          </p>

          <div className="space-y-4">
            {["Cloud-Based Deployment", "AI-Assisted Development", "Web Application Architecture"].map((skill, idx) => (
              <div key={idx} className="border-b border-neutral-800 pb-2">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-800 mt-auto">
  <div className="max-w-2xl mx-auto py-20 px-4 flex justify-between items-center">
    <div className="flex space-x-8">
      <a href="https://www.twitter.com/adityakbare" className="text-white hover:text-neutral-400 transition-colors">
        <FaXTwitter size={18} />
        <span className="sr-only">X</span>
      </a>
      <a href="https://www.instagram.com/adityakbare" className="text-white hover:text-neutral-400 transition-colors">
        <FaInstagram size={18} />
        <span className="sr-only">Instagram</span>
      </a>
      <a href="https://www.linkedin.com/in/adityakbare" className="text-white hover:text-neutral-400 transition-colors">
        <FaLinkedinIn size={18} />
        <span className="sr-only">LinkedIn</span>
      </a>
    </div>
    <div className="text-neutral-400 text-sm whitespace-nowrap">© 2025</div>
  </div>
</footer>
    </main>
  );
}
