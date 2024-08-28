"use client";
import { Motion } from "@/components/motion-div";
import { motion } from "framer-motion";
import { LucideGithub, LucideInfo } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <Motion
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-3xl">
        <div className="w-full h-[90vh] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
          <div className="rounded-3xl bg-white dark:bg-gray-800 p-12 shadow-2xl h-full flex flex-col items-center overflow-auto">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Dock App Demo
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* About This App Section */}
              <motion.div
                className="flex flex-col items-center p-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LucideInfo className="text-blue-500 mb-4 w-10 h-10 md:w-12 md:h-12" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  About This App
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                  This app showcases a modern MacOS-inspired Dock component with theme support. It&apos;s designed to provide a seamless user experience and is open source on GitHub.
                </p>
              </motion.div>

              {/* Open Source Section */}
              <motion.div
                className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LucideGithub className="text-green-500 mb-4 w-10 h-10 md:w-12 md:h-12" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  Open Source
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                  Explore the source code and contribute to the project on GitHub. Your feedback and contributions are welcome!
                </p>
              </motion.div>
            </div>
            <div className="mt-8 text-center">
              <motion.div
                className="relative inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white p-6 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-50 rounded-lg -z-10"></div>
                <div className="relative z-10">
                  <p className="text-base md:text-lg font-semibold">
                    Built with {" "}
                    <Link href="https://nextjs.org/" target="_blank" className="hover:bg-sky-700">
                      NextJS {" "}
                    </Link>
                    14&apos;s App Router,{" "}
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link href="https://www.cult-ui.com/" target="_blank" className="hover:bg-sky-700">
                        Cult/UI&apos;s
                      </Link>
                    </motion.span>{" "}
                    libraries, and written in TSX. Enjoy exploring the demo!
                  </p>
                </div>
                <motion.div
                  className="absolute bottom-0 right-0 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </Motion>
  );
}
