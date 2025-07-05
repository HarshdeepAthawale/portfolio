import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./components/theme-toggle"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header/Navigation */}
      <header className="flex justify-between items-center mb-16">
        <div>
          <Link
            href="/"
            className="flex items-center hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <span className="text-2xl font-bold tracking-tight text-black dark:text-white">harshdeep.</span>
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
          Passionate about cybersecurity, cloud computing, and building secure network infrastructures.
        </p>
        <div className="flex space-x-4 items-center justify-start">
          <Button
            asChild
            variant="outline"
            className="flex items-center justify-center border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <Link href="https://drive.google.com/file/d/1bm1IEtqYeuJzmlxbFYkBIElps0njEpok/view?usp=sharing" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="flex items-center">Resume</a>
            </Link>
          </Button>
          <div className="flex items-center space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="mailto:harshdeepathawale27@gmail.com?subject=Hello%20Harshdeep&body=I%20saw%20your%20portfolio%20and%20wanted%20to%20reach%20out.">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-md"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>harshdeepathawale27@gmail.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
        </div>
      </section>

      {/* About Section */}
      <section className="mb-20 max-w-3xl">
        <h2 className="text-xl font-medium mb-6 text-gray-600 dark:text-gray-400">about me.</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Sophomore at Thapar Institute of Engineering and Technology (TIET), pursuing Computer Engineering. A passionate cybersecurity enthusiast with a keen interest in network security and cloud computing. Currently serving as an Executive Member at the OWASP Student Chapter, where I actively engage in learning and contributing to the cybersecurity community. Currently preparing for the CCNA certification exam to strengthen my networking fundamentals and practical skills.
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
          <div className="text-gray-700 dark:text-gray-300">Git, GitHub, AutoCAD, Visual Studio Code, Cisco Packet Tracer</div>
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
              <h3 className="text-lg font-medium">Content Creator</h3>
              <p className="text-gray-600 dark:text-gray-400">
                at{" "}
                <Link href="https://www.instagram.com/cybersecwithharsh" className="underline">
                  CyberSecWithHarsh
                </Link>
              </p>
            </div>
            <span className="text-gray-500">2025 - Present</span>
          </div>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-4">
            <li>
              Founder and creator of CyberSecWithHarsh, an educational content brand sharing weekly insights on
              cybersecurity, networking, and cloud computing via Instagram and YouTube.
            </li>
            <li>
              Develop and post short-form videos, tutorials, and awareness content on topics such as phishing, TCP/IP,
              firewalls, Azure services, and threat detection and more.
            </li>
            <li>
              Deliver practical, easy-to-understand content that bridges the gap between academic learning and industry
              expectations.
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20 max-w-3xl">
        <h2 className="text-xl font-medium mb-6 text-gray-600 dark:text-gray-400">projects.</h2>
        <div className="space-y-8">
          <div className="border-l border-gray-300 dark:border-gray-800 pl-8 relative">
            <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-medium">🔗 Personal Portfolio Website</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Personal Project</p>
              </div>
              <span className="text-gray-500">2025</span>
            </div>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-4">
              <li>Designed and built a personal portfolio using V0 (AI UI builder) and Cursor (AI coding IDE).</li>
              <li>Developed with TypeScript, JavaScript, and CSS using a component-based structure.</li>
              <li>Used Git for version control and pushed the code to GitHub.</li>
              <li>Deployed on Vercel with automated CI/CD for fast and reliable hosting.</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link 
                href="https://harshdeepathawale-tech.vercel.app/" 
                target="_blank" 
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                🌐 Live Site
              </Link>
              <Link 
                href="https://github.com/harshdeepathawale/portfolio" 
                target="_blank" 
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                💻 GitHub Repo
              </Link>
            </div>
          </div>

          {/* DoS/DDoS Attack Detector Project */}
          <div className="border-l border-gray-300 dark:border-gray-800 pl-8 relative">
            <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-medium">🔒 DoS/DDoS Attack Detector</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Personal Project</p>
              </div>
              <span className="text-gray-500">2025</span>
            </div>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2 mt-4">
              <li>Built a real-time network traffic monitor to detect DoS and DDoS attacks.</li>
              <li>Implemented detection for UDP flood, ICMP flood, and Slowloris attacks using Python.</li>
              <li>Developed an interactive Flask dashboard with live traffic stats, alert logs, and dark/light mode.</li>
              <li>Deployed locally with simple setup; detection thresholds customizable via <code>analysis.py</code>.</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link 
                href="https://github.com/HarshdeepAthawale/DOS-DDOS-Attack-Detector" 
                target="_blank" 
                className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
              >
                💻 GitHub Repo
              </Link>
            </div>
          </div>
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

          <div className="border-l border-gray-300 dark:border-gray-800 pl-8 relative">
            <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-700 rounded-full -left-[6.5px] top-1"></div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium">The Complete Networking Fundamentals Course for CCNA</h3>
              <span className="text-gray-500">Jun 2025 - Ongoing</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Udemy</p>
            <p className="text-gray-500 text-sm mt-1">Instructor: David Bombal</p>
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
  )
}
