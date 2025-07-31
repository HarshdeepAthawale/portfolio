"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function AnimationExamples() {

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">1. Subtle Lift</h3>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">2. Scale Effect</h3>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">3. Gentle Rotation</h3>
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out hover:rotate-12"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out hover:-rotate-12"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">4. Border Highlight</h3>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:border-black dark:hover:border-white transition-all duration-300 ease-in-out"
            >
              Resume
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white transition-all duration-300 ease-in-out"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">5. Pulse Effect</h3>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:animate-pulse transition-all duration-300 ease-in-out"
            >
              Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:animate-pulse transition-all duration-300 ease-in-out"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">6. Background Fill</h3>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-black dark:text-white relative overflow-hidden group"
            >
              <span className="relative z-10">Resume</span>
              <span className="absolute inset-0 bg-gray-200 dark:bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-gray-600 dark:text-gray-400 relative overflow-hidden group"
            >
              <span className="relative z-10">
                <Linkedin className="h-5 w-5" />
              </span>
              <span className="absolute inset-0 bg-gray-200 dark:bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">7. Shadow Expansion</h3>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-black dark:text-white shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">8. Color Transition</h3>
          <div className="flex space-x-4">
            <Button
              variant="outline"
              className="border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all duration-300 ease-in-out"
            >
              Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 ease-in-out"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">9. Combined Effects</h3>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            Resume
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:rotate-12"
          >
            <Mail className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:-rotate-12"
          >
            <Github className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 hover:shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <Linkedin className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">10. Text Animations</h3>
        <div className="space-y-4">
          <p className="text-xl font-bold relative group cursor-default">
            <span>Harshdeep Athawale</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
          </p>

          <p className="text-xl font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300 cursor-default">
            Harshdeep Athawale
          </p>

          <p className="text-xl font-bold relative overflow-hidden cursor-default">
            <span className="hover:skew-x-6 inline-block transition-transform duration-300">Harshdeep</span>{" "}
            <span className="hover:skew-x-6 inline-block transition-transform duration-300">Athawale</span>
          </p>
        </div>
      </div>
    </div>
  )
}
