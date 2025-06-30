import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./components/theme-toggle"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Page() {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors">
        <div className="container mx-auto px-4 py-8">
          {/* Header/Navigation */}
          <header className="flex justify-between items-center mb-16">
            <div>
              <Link
                href="/"
                className="text-xl font-bold hover:scale-105 transition-transform duration-300 ease-in-out inline-block"
              >
                harshdeep.
              </Link>
            </div>
            <nav className="flex items-center space-x-8">
              <Link
                href="#experience"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                experience
              </Link>
              <Link
                href="#skills"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                skills
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                projects
              </Link>
              <Link
                href="#certifications"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                certifications
              </Link>
              <ThemeToggle />
            </nav>
          </header>

          {/* Hero Section */}
          <section className="mb-20 max-w-3xl">
            <div className="flex items-center mb-4">
              <Avatar className="h-20 w-20 mr-6">
                <AvatarImage src="/speech.jpg.jpeg" alt="Harshdeep Athawale" />
                <AvatarFallback>HA</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">hi there 👋, I'm</p>
                <h1 className="text-5xl font-bold mb-2">Harshdeep Athawale</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-4">19, he/him</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Passionate about cybersecurity, ethical hacking, and building secure network infrastructures.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Resume
              </Button>
              <Link href="mailto:harshdeepathawale27@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://github.com/harshdeepathawale" target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/harshdeepathawale" target="_blank">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-20 max-w-3xl">
            <h2 className="text-xl font-medium mb-6 text-gray-600 dark:text-gray-400">about me.</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey! I'm a cybersecurity enthusiast with a keen interest in ethical hacking, Cloud Computing, and
              network security. I love diving into networks, analyzing traffic, and using tools to uncover hidden
              insights.I'm currently studying Computer Engineering at Thapar Institute while actively contributing to the OWASP
              Student Chapter.
            </p>
          </section>

          {/* Technical Skills Section */}
          <section id="skills" className="mb-20 max-w-3xl">
            <h2 className="text-xl font-medium mb-6 text-gray-600 dark:text-gray-400">technical skills.</h2>

            <div className="grid grid-cols-[180px_1fr] gap-y-6">
              <div className="text-gray-600 dark:text-gray-400">Languages:</div>
              <div className="text-gray-700 dark:text-gray-300">Python, C</div>

              <div className="text-gray-600 dark:text-gray-400">Security Tools:</div>
              <div className="text-gray-700 dark:text-gray-300">
                Nmap, Wireshark, Burp Suite, Metasploit, OWASP ZAP
              </div>

              <div className="text-gray-600 dark:text-gray-400">Platforms & OS:</div>
              <div className="text-gray-700 dark:text-gray-300">Windows, Kali Linux, VMware</div>

              <div className="text-gray-600 dark:text-gray-400">Cloud & Deployment:</div>
              <div className="text-gray-700 dark:text-gray-300">Microsoft Azure, Vercel</div>

              <div className="text-gray-600 dark:text-gray-400">Specializations:</div>
              <div className="text-gray-700 dark:text-gray-300">
                Network Security, SIEM(Security Information and Event Management)
              </div>
               <div className="text-gray-600 dark:text-gray-400">Designing Tools:</div>
              <div className="text-gray-700 dark:text-gray-300">Figma, Canva</div>
              
              <div className="text-gray-600 dark:text-gray-400">Other Tools:</div>
              <div className="text-gray-700 dark:text-gray-300">Git, GitHub, AutoCAD, Visual Studio Code</div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-20 max-w-3xl">
            <h2 className="text-xl font-medium mb-6 text-gray-600 dark:text-gray-400">experience.</h2>

            <div className="border-l border-gray-300 dark:border-gray-800 pl-8 relative mb-12">
              <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-medium">Executive Member</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    at{" "}
                    <Link href="#" className="underline">
                      OWASP Student Chapter TIET
                    </Link>
                  </p>
                </div>
                <span className="text-gray-500">Oct 2024 - Present</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-4">
                <li>
                  Contributed to the Organizing Team for HACKOWASP 7.0, a premier national-level hackathon with 3000+
                  participants.
                </li>
                <li>Collaborated with cross-functional teams to manage event logistics and participant support.</li>
                <li>
                  Helped ensure smooth execution through real-time coordination and seamless on-ground operations.
                </li>
              </ul>
            </div>

            <div className="border-l border-gray-300 dark:border-gray-800 pl-8 relative">
              <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-medium">Computer Engineering Student</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    at{" "}
                    <Link href="#" className="underline">
                      Thapar Institute of Engineering & Technology
                    </Link>
                  </p>
                </div>
                <span className="text-gray-500">2024 - 2028</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-4">
                <li>Bachelor of Engineering in Computer Engineering with a focus on cybersecurity.</li>
                <li>Actively participating in cybersecurity workshops, hackathons, and hands-on projects.</li>
              </ul>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20 max-w-3xl">
            <h2 className="text-xl font-medium mb-6 text-gray-600 dark:text-gray-400">projects.</h2>
            <div className="flex items-center justify-center py-12 border border-gray-300 dark:border-gray-800 rounded-md">
              <p className="text-gray-500">Coming soon</p>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="mb-20 max-w-3xl">
            <h2 className="text-xl font-medium mb-6 text-gray-600 dark:text-gray-400">certifications.</h2>

            <div className="space-y-8">
              <div className="border-l border-gray-300 dark:border-gray-800 pl-8 relative">
                <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">Microsoft Cybersecurity Analyst</h3>
                  <span className="text-gray-500">Jul 2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Microsoft</p>
                <p className="text-gray-500 text-sm mt-1">Credential ID: 2QH68DEGQHC9</p>
              </div>

              <div className="border-l border-gray-300 dark:border-gray-800 pl-8 relative">
                <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">IIT DELHI CYBERSECURITY & ETHICAL HACKING WORKSHOP</h3>
                  <span className="text-gray-500">May 2025</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Indian Institute of Technology, Delhi</p>
                <p className="text-gray-500 text-sm mt-1">Credential ID: UJVHC4BKZJ3BB9F</p>
              </div>

              <div className="border-l border-gray-300 dark:border-gray-800 pl-8 relative">
                <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">Advanced Digital Transformation (Part 1)</h3>
                  <span className="text-gray-500">Jul 2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Indian Institute of Management Ahmedabad</p>
                <p className="text-gray-500 text-sm mt-1">Credential ID: TYFL5K3ZTLF8</p>
              </div>

              <div className="border-l border-gray-300 dark:border-gray-800 pl-8 relative">
                <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">Career Essentials in Generative AI</h3>
                  <span className="text-gray-500">Jul 2024</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">Microsoft & LinkedIn</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="max-w-3xl py-8 mt-20 border-t border-gray-300 dark:border-gray-800">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">© 2024 Harshdeep Athawale</p>
              <div className="flex items-center">
                <Link href="#" className="text-gray-500 hover:text-black dark:hover:text-white">
                  <Button variant="ghost" size="sm" className="text-xs">
                    Elevate to the top ↑
                  </Button>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
