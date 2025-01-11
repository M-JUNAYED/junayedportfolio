"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// ProjectPage Component
const ProjectPage = ({ data }) => {
    // Framer Motion Variants for Container and Items
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            className="py-10 bg-gray-50 dark:bg-gray-900"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto">
                {/* Section Title */}
                <motion.h2
                    className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>

                {/* Project Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                >
                    {data.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-white dark:bg-gray-600 shadow-lg rounded-lg p-4"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.img
                                src={project.project_img}
                                alt={project.project_name}
                                className="w-full h-40 object-cover rounded-md mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                {project.project_name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                {project.short_des}
                            </p>
                            <Link href={project.social_link} className="block text-center py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">
                                View Project
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* See All Projects Button */}
                <motion.div
                    className="text-center mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <a
                        href="#"
                        className="inline-block py-2 px-6 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                        See All Projects
                    </a>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectPage;
