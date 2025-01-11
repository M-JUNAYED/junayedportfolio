"use client";

import React from "react";
import { motion } from "framer-motion";

const EducationExperiencePage = ({ educationData, experienceData }) => {
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="py-10 bg-gray-50 dark:bg-gray-900"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-green-600 mb-6">Education</h2>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {educationData.map((education) => (
              <motion.div
                key={education.id}
                className="relative bg-white dark:bg-gray-600 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-4 left-0 w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="ml-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {education.session}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {education.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {education.institute_name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-green-600 mb-6">Experience</h2>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experienceData.map((experience) => (
              <motion.div
                key={experience.id}
                className="relative bg-white dark:bg-gray-600 shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-4 left-0 w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="ml-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {experience.project_name}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {experience.company_name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EducationExperiencePage;
