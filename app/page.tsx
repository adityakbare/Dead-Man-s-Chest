import { IoTriangleSharp } from "react-icons/io5";
import { Instagram, Dribbble, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20 px-4 bg-black text-white font-mono">
      <div className="w-full max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex justify-left mb-8">
          <IoTriangleSharp className="h-12 w-12 text-white" />
        </div>

        {/* Introduction */}
        <div className="mb-16 text-left">
          <h1 className="text-white text-2xl font-bold mb-4">Aditya Akbar Prasetyanto</h1>
          <p className="text-neutral-500 text-sm">
            A deep sea diver.
            <br />From Tangerang, Indonesia.
          </p>
        </div>

        {/* Recognition */}
        <div className="space-y-6 mb-16">
          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Communications Assistant</h3>
              <p className="text-neutral-500 text-sm">Department of Communication Tangerang</p>
            </div>
            <p className="text-neutral-500 text-sm">Sept 2023 — Nov 2023</p>
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h2 className="text-lg mb-6">Recognition</h2>
          <div className="flex justify-between items-start border-b border-neutral-800 pb-4 mb-4">
            <div>
              <h3 className="font-medium">Bachelor's of Communication</h3>
              <p className="text-neutral-500 text-sm">Public Relations, Syekh Yusuf Islamic University</p>
            </div>
            <p className="text-neutral-500 text-sm">2020 — 2024</p>
          </div>
        </div>

        {/* Featured */}
        <div className="mb-16">
  <h2 className="text-lg mb-6">Featured</h2>
  <div className="space-y-6">
    {[
      { title: "6 Feet Beneath The Moon", desc: "2025", image: "aap1.png" },
      { title: "6 Feet Beneath The Moon", desc: "2025", image: "aap2.png" },
      { title: "6 Feet Beneath The Moon", desc: "2025", image: "aap3.png" },
      { title: "6 Feet Beneath The Moon", desc: "2025", image: "aap4.png" },
    ].map((project, idx) => (
      <div key={idx} className="border border-neutral-800 p-2">
        <div className="relative w-full" style={{ paddingTop: "60%" }}>
          <Image
            src={`/images/${project.image}`}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="pt-2">
          <h3 className="text-sm font-medium">{project.title}</h3>
          <p className="text-neutral-500 text-xs mt-1">{project.desc}</p>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Activity */}
        <div className="mb-16">
          <h2 className="text-lg mb-6">Activity</h2>
          <p className="text-neutral-500 text-sm mb-8">
            Inspired by Wikipedia’s take on the Pareto Principle, I’m all about investing in skills that pack a big punch. Just like how 1% of Wikipedia editors drive 70% of its content, I focus on high impact areas—design, coding, and trend spotting—to make waves in my creative and techy pursuits, whether I’m browsing social media or diving into a good read.
          </p>

          <div className="space-y-4">
            {["UI Design", "HTML5 + CSS", "Social Media Trends", "Content Curation"].map((skill, idx) => (
              <div key={idx} className="border-b border-neutral-800 pb-2">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-neutral-800 mt-auto">
        <div className="max-w-2xl mx-auto py-8 px-4 flex flex-wrap justify-between items-center">
          <div className="flex space-x-8 mb-4 md:mb-0">
            {[Instagram, Dribbble, Github, Linkedin].map((Icon, idx) => (
              <a key={idx} href="#" className="text-white hover:text-neutral-500 transition-colors">
                <Icon size={20} />
                <span className="sr-only">{Icon.name}</span>
              </a>
            ))}
          </div>
          <div className="text-neutral-500 text-sm">© 2025</div>
        </div>
      </footer>
    </main>
  );
}
