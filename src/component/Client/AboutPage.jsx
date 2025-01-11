"use client";

import { motion } from "framer-motion";

const AboutPage = ({ data }) => {
    if (!data || data.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-gray-500 text-lg">No About Data Found</p>
            </div>
        );
    }

    const about = data[0]; // Assuming only one entry for about page

    return (
        <div className="">
            <motion.h1
                className="sm:text-5xl font-bold  text-red-500 text-center italic underline text-6xl"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h1>
            <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-16 lg:py-20 min-h-screen bg-gray-50 dark:bg-gray-600">
                {/* Left Section: Image */}
                <motion.div
                    className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={about.about_img || "/default-about-image.png"}
                        alt="Profile Image"
                        className="rounded-full w-48 h-48 shadow-lg"
                    />
                </motion.div>

                {/* Right Section: Text */}
                <div className="lg:w-2/3 space-y-6 text-center lg:text-left">
                    <motion.h1
                        className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {"Hi there!"}
                    </motion.h1>
                    <motion.p
                        className="text-lg sm:text-xl text-gray-700 dark:text-gray-300"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {about.title ||
                            "Fuelled by a passion for designing compelling products, I have a deep desire to excel and continuously improve in my work. Learn more about my journey below."}
                    </motion.p>

                    <motion.div
                        className="text-gray-700 dark:text-gray-300 text-sm space-y-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-semibold text-xl text-gray-900 dark:text-white">
                            My Career So Far
                        </h2>
                        <p>
                            {about.short_des ||
                                "Always up for a challenge, I have worked for lean start-ups and was a member of the first New Zealand start-up to attend Y Combinator. Currently, I lead UI/UX design at SaaS start-up VideoMyJob."}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {(about.skills ? about.skills.split(',') : []).map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-lg text-gray-600 dark:text-gray-300 text-xs font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
