import { Skull } from "lucide-react"
import { Twitter, Dribbble, Github, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-20 px-4 bg-black text-white font-mono">
      <div className="w-full max-w-2xl mx-auto">
        {/* Logo */}
        <div className="flex justify-left mb-8">
          <Skull className="h-12 w-12 text-white" />
        </div>

        {/* Introduction */}
        <div className="mb-16 text-left">
          <h1 className="text-white text-2xl font-bold mb-4">Dead Man&apos;s Chest</h1>
          <p className="text-neutral-500 text-sm">
            A creative studio based in the depths of the digital ocean.
            <br />
            Crafting legendary experiences since 2015.
          </p>
        </div>

        {/* Experience */}
        <div className="space-y-6 mb-16">
          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Kraken Studios</h3>
              <p className="text-neutral-500 text-sm">Creative Director</p>
            </div>
            <p className="text-neutral-500 text-sm">2020 — Present</p>
          </div>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Black Pearl Digital</h3>
              <p className="text-neutral-500 text-sm">Lead Designer</p>
            </div>
            <p className="text-neutral-500 text-sm">2018—2020</p>
          </div>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Tortuga Interactive</h3>
              <p className="text-neutral-500 text-sm">Senior Designer</p>
            </div>
            <p className="text-neutral-500 text-sm">2016—2018</p>
          </div>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">Davy Jones Media</h3>
              <p className="text-neutral-500 text-sm">UI/UX Designer</p>
            </div>
            <p className="text-neutral-500 text-sm">2015—2016</p>
          </div>
        </div>

        {/* Awards */}
        <div className="mb-16">
          <h2 className="text-lg mb-6">Awards</h2>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4 mb-4">
            <div>
              <h3 className="font-medium">Awwwards</h3>
              <p className="text-neutral-500 text-sm">Site of the Day | Excellence in Design</p>
            </div>
            <p className="text-neutral-500 text-sm">Dec 15, 2023</p>
          </div>

          <div className="flex justify-between items-start border-b border-neutral-800 pb-4">
            <div>
              <h3 className="font-medium">CSS Design Awards</h3>
              <p className="text-neutral-500 text-sm">Best UI Design | Special Kudos</p>
            </div>
            <p className="text-neutral-500 text-sm">Aug 3, 2022</p>
          </div>
        </div>

        {/* Featured - Now with a single large showcase */}
        <div className="mb-16">
          <h2 className="text-lg mb-6">Featured</h2>

          <div className="space-y-6">
            {/* Project 1 */}
            <div className="border border-neutral-800 p-2">
              <div className="relative w-full" style={{ paddingTop: "70.3125%" }}>
                {" "}
                {/* 900/1280 = 0.703125 */}
                <Image
                  src="/placeholder.svg?height=900&width=1280"
                  alt="The Kraken Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-2">
                <h3 className="text-sm font-medium">The Kraken Dashboard</h3>
                <p className="text-neutral-500 text-xs mt-1">UI/UX Design • 2023</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-neutral-800 p-2">
              <div className="relative w-full" style={{ paddingTop: "70.3125%" }}>
                {" "}
                {/* 900/1280 = 0.703125 */}
                <Image
                  src="/placeholder.svg?height=900&width=1280"
                  alt="Siren's Call Mobile App"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-2">
                <h3 className="text-sm font-medium">Siren's Call Mobile App</h3>
                <p className="text-neutral-500 text-xs mt-1">Mobile Design • 2022</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-neutral-800 p-2">
              <div className="relative w-full" style={{ paddingTop: "70.3125%" }}>
                {" "}
                {/* 900/1280 = 0.703125 */}
                <Image
                  src="/placeholder.svg?height=900&width=1280"
                  alt="Treasure Map Interactive Experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-2">
                <h3 className="text-sm font-medium">Treasure Map Interactive Experience</h3>
                <p className="text-neutral-500 text-xs mt-1">Web Design • 2023</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="border border-neutral-800 p-2">
              <div className="relative w-full" style={{ paddingTop: "70.3125%" }}>
                {" "}
                {/* 900/1280 = 0.703125 */}
                <Image
                  src="/placeholder.svg?height=900&width=1280"
                  alt="Black Pearl Corporate Website"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-2">
                <h3 className="text-sm font-medium">Black Pearl Corporate Website</h3>
                <p className="text-neutral-500 text-xs mt-1">Web Design • 2022</p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="border border-neutral-800 p-2">
              <div className="relative w-full" style={{ paddingTop: "70.3125%" }}>
                {" "}
                {/* 900/1280 = 0.703125 */}
                <Image
                  src="/placeholder.svg?height=900&width=1280"
                  alt="Compass Navigation System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-2">
                <h3 className="text-sm font-medium">Compass Navigation System</h3>
                <p className="text-neutral-500 text-xs mt-1">Product Design • 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Investments Section */}
        <div className="mb-16">
          <h2 className="text-lg mb-6">Treasure Hunter</h2>

          <p className="text-neutral-500 text-sm mb-8">
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
            <a href="#" className="text-white hover:text-neutral-500 transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-white hover:text-neutral-500 transition-colors">
              <Dribbble size={20} />
              <span className="sr-only">Dribbble</span>
            </a>
            <a href="#" className="text-white hover:text-neutral-500 transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-white hover:text-neutral-500 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          <div className="text-neutral-500 text-sm">© 2025</div>
        </div>
      </footer>
    </main>
  )
}
