import { Skull } from "lucide-react"
import { Twitter, Dribbble, Github, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20 px-4 bg-black text-white font-mono">
      <div className="w-full max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex justify-left mb-16">
          <Skull className="h-12 w-12 text-white" />
        </div>

        {/* Introduction */}
        <div className="mb-16 text-left">
          <p className="text-neutral-400 text-sm">
            Aditya is man based in Tangerang, Indonesia.
            <br />
            Graduated from communication in 2024.
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-6 mb-16">
          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Kraken Studios</h3>
              <p className="text-neutral-400 text-sm">Creative Director</p>
            </div>
            <p className="text-neutral-400 text-sm">2020 — Present</p>
          </div>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Black Pearl Digital</h3>
              <p className="text-neutral-400 text-sm">Lead Designer</p>
            </div>
            <p className="text-neutral-400 text-sm">2018—2020</p>
          </div>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Tortuga Interactive</h3>
              <p className="text-neutral-400 text-sm">Senior Designer</p>
            </div>
            <p className="text-neutral-400 text-sm">2016—2018</p>
          </div>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Davy Jones Media</h3>
              <p className="text-neutral-400 text-sm">UI/UX Designer</p>
            </div>
            <p className="text-neutral-400 text-sm">2015—2016</p>
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h2 className="text-lg mb-6">Awards</h2>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4 mb-4">
            <div>
              <h3 className="font-medium">Awwwards</h3>
              <p className="text-neutral-400 text-sm">Site of the Day | Excellence in Design</p>
            </div>
            <p className="text-neutral-400 text-sm">Dec 15, 2023</p>
          </div>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">CSS Design Awards</h3>
              <p className="text-neutral-400 text-sm">Best UI Design | Special Kudos</p>
            </div>
            <p className="text-neutral-400 text-sm">Aug 3, 2022</p>
          </div>
        </div>

        {/* Featured */}
        <div className="mb-16">
          <h2 className="text-lg mb-6">Featured</h2>

          <div className="border-b border-neutral-800 pb-4 mb-4">
            <p className="text-neutral-400 text-sm">2024 — Featured in "Digital Design Masters" by Web Artisan Press</p>
          </div>

          <div className="border-b border-neutral-800 pb-4">
            <p className="text-neutral-400 text-sm">2023 — Interview in "The Future of Web" by DesignHub Magazine</p>
          </div>
        </div>

        {/* Investments Section */}
        <div className="mb-16">
          <h2 className="text-lg mb-6">Treasure Hunter</h2>

          <p className="text-neutral-400 text-sm mb-8">
            Invests in promising ventures across the seven seas, focusing on innovative tools for digital explorers and
            creative buccaneers.
          </p>

          <div className="space-y-4">
            <div className="border-b border-neutral-800 pb-2">
              <p className="font-medium">Sea Chart</p>
            </div>
            <div className="border-b border-neutral-800 pb-2">
              <p className="font-medium">Compass Point</p>
            </div>
            <div className="border-b border-neutral-800 pb-2">
              <p className="font-medium">Mariner's Log</p>
            </div>
            <div className="border-b border-neutral-800 pb-2">
              <p className="font-medium">Siren's Call Studio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with social icons */}
      <footer className="w-full border-t border-neutral-800 mt-auto">
        <div className="max-w-2xl mx-auto py-8 px-4 flex flex-wrap justify-between items-center">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-white hover:text-neutral-400 transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-neutral-400 transition-colors">
              <Dribbble size={20} />
              <span className="sr-only">Dribbble</span>
            </a>
            <a href="#" className="text-white hover:text-neutral-400 transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-white hover:text-neutral-400 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <div className="text-neutral-400 text-sm">© 2025</div>
        </div>
      </footer>
    </main>
  )
}
