"use client";
import { Motion } from "@/components/motion-div";
import { motion } from "framer-motion";
import { LucideActivity, LucideBell, LucidePalette, LucideZap } from "lucide-react"; // Added new icons

export default function Dashboard() {
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
                            Dashboard
                        </motion.h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                            {/* Stats Overview Card */}
                            <motion.div
                                className="flex flex-col items-center p-6 bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 rounded-xl shadow-lg cursor-pointer border border-teal-200 dark:border-teal-600"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <LucideZap className="text-teal-500 mb-4 w-12 h-12" />
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                    Stats Overview
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                                    Total Users: <span className="font-bold">1,230</span>
                                    <br />
                                    Active Sessions: <span className="font-bold">890</span>
                                </p>
                            </motion.div>

                            {/* Recent Activity Card */}
                            <motion.div
                                className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-lg cursor-pointer border border-blue-200 dark:border-blue-600"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <LucideActivity className="text-blue-500 mb-4 w-12 h-12" />
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                    Recent Activity
                                </h2>
                                <ul className="text-gray-600 dark:text-gray-300 text-center mt-2 list-disc list-inside">
                                    <li>User John Doe logged in</li>
                                    <li>Report generated at 10:00 AM</li>
                                    <li>System update applied</li>
                                </ul>
                            </motion.div>

                            {/* Notifications Card */}
                            <motion.div
                                className="flex flex-col items-center p-6 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 rounded-xl shadow-lg cursor-pointer border border-red-200 dark:border-red-600"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <LucideBell className="text-red-500 mb-4 w-12 h-12" />
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                    Notifications
                                </h2>
                                <ul className="text-gray-600 dark:text-gray-300 text-center mt-2 list-disc list-inside">
                                    <li>Server maintenance scheduled</li>
                                    <li>New message from admin</li>
                                    <li>Security alert: login attempt</li>
                                </ul>
                            </motion.div>

                            {/* Quick Actions Card */}
                            <motion.div
                                className="flex flex-col items-center p-6 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl shadow-lg cursor-pointer border border-green-200 dark:border-green-600"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <LucidePalette className="text-green-500 mb-4 w-12 h-12" />
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                                    Quick Actions
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 text-center mt-2">
                                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Create New</button>
                                    <br />
                                    <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mt-2">View Reports</button>
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
                                        Additional features will be added soon. Stay tuned!
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </main>
        </Motion>
    );
}
