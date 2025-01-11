'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SkillPage = ({ data }) => {
    const barVariants = {
        hidden: { width: 0 },
        visible: (custom) => ({
            width: `${custom}%`,
            transition: { duration: 1 },
        }),
    };

    return (
        <div className="skills-section dark:bg-gray-800 dark:text-white bg-gray-100 p-8">
            <h1 className="text-center text-4xl text-blue-600 mb-4 dark:text-blue-400">My Skills</h1>
            <p className="text-center text-gray-600 mb-8 dark:text-gray-300">
                I Like To Craft Beautiful And Scalable Web Products
            </p>
            <div className="skills-container flex justify-between">
                {/* Skills Info Section */}
                <div className="skills-info flex-1 mr-8">
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Design + Development</h3>
                        <p className="text-gray-700 dark:text-gray-400">
                            Clean, modern designs - optimized for performance, search engines, and converting users to customers.
                        </p>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold">Technology</h3>
                        <p className="text-gray-700 dark:text-gray-400">
                            Combined all the latest technologies to a progressive website.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Always Responsive</h3>
                        <p className="text-gray-700 dark:text-gray-400">
                            A responsive design makes your website accessible to all users, regardless of their device.
                        </p>
                    </div>
                </div>

                {/* Skills Bars Section */}
                <div className="skills-bars flex-1">
                    {data.map((skill) => (
                        <div key={skill.id} className="mb-4">
                            {/* Skill Name and Percent */}
                            <div className="flex justify-between mb-2">
                                <span>{skill.skill_name}</span>
                                <span>{skill.skill_parsent || 0}%</span>
                            </div>

                            {/* Skill Bar */}
                            <div className="bg-gray-200 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
                                <motion.div
                                    className="skill-bar bg-blue-500 h-full rounded-full"
                                    variants={barVariants}
                                    custom={skill.skill_parsent || 0}
                                    initial="hidden"
                                    animate="visible"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillPage;
