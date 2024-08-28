"use client";
import { Motion } from "@/components/motion-div";
import { motion } from "framer-motion";
import { LucideUser } from "lucide-react"; // Import only the used icon

export default function Profile() {
    return (
        <Motion
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-white dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-3xl">
                <div className="w-full h-[90vh] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]">
                    <div className="rounded-3xl bg-white dark:bg-gray-800 p-12 shadow-2xl h-full flex flex-col items-center overflow-auto">
                        <motion.div
                            className="relative mb-6 md:mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-teal-500 to-blue-500">
                                <img
                                    src="/me.png" // Placeholder path to avatar image
                                    alt="Profile Avatar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 p-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full shadow-lg">
                                <LucideUser className="text-white w-5 h-5 md:w-6 md:h-6" />
                            </div>
                        </motion.div>
                        <motion.h1
                            className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white text-center"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Dana Davis
                        </motion.h1>
                        <motion.p
                            className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            A passionate developer with a love for creating beautiful and functional web applications.
                        </motion.p>
                        <motion.div
                            className="w-full max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md mb-4">
                                <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    Contact Information
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    <strong>Email:</strong> dana@danadavis.dev
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    <strong>Phone:</strong> (123) 456-7890
                                </p>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                                <h2 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    About Me
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300">
                                    I am a full-stack developer specializing in modern web technologies. I enjoy working on complex problems and delivering elegant solutions.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="mt-6 flex items-center justify-center"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <a
                                href="https://www.danadavis.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out hover:shadow-xl"
                            >
                                Check Out My Work
                            </a>
                        </motion.div>
                    </div>
                </div>
            </main>
        </Motion>
    );
}
