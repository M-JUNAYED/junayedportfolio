"use client";

import { motion } from "framer-motion";
import { useDarkMode } from "../contaxt/DarkModeContext";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const HomePage = ({ data }) => {
  const { darkMode } = useDarkMode(); // Access dark mode state

  return (
    <div
      className={`flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:px-16 lg:py-20 min-h-screen ${darkMode ? "bg-gray-600 text-white" : "bg-gray-100 text-black"
        }`}
    >
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <motion.p
          className="text-md uppercase tracking-wide text-gray-500 dark:text-gray-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to my world
        </motion.p>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          👋Hi, I'm &nbsp;
          <span className="text-red-500">{data[0].first_title || "Md. Junayed"}</span>
          <br />
          <span className="text-blue-500">{data[0].second_title || "a Developer"}</span>
        </motion.h1>
        <motion.h3
          className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-red-500">{data[0].thirt_title || 'this is title'}</span>
          <br />
          <span className="text-blue-500">{data[0].last_title || 'this is title'}</span>
        </motion.h3>
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-md mx-auto lg:mx-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {data[0].sub_title ||
            "I use animation as a third dimension by which to simplify experiences and guide through each and every interaction."}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center lg:justify-start space-x-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition">
            <Link href="/contact">Contact Me</Link>
          </button>
          <button
            className={`px-6 py-3 rounded-lg shadow-lg ${darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              } transition`}
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={data[0].home_img || "/default-image.png"}
          alt="Profile"
          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </motion.div>

      {/* Social Media Links */}
      {/* Social Media Links */}
      <motion.div
        className="lg:absolute mt-10 lg:bottom-8 w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center space-x-6">
          {[
            { href: data[0].facebook || 'facebook.com', icon: <FaFacebook />, color: 'text-blue-600' },
            { href: data[0].twiter || 'twitter.com', icon: <FaTwitter />, color: 'text-blue-400' },
            { href: data[0].linkdin || 'linkedin.com', icon: <FaLinkedin />, color: 'text-blue-700' },
            { href: data[0].github || 'github.com', icon: <FaGithub />, color: 'text-gray-900 dark:text-white' },
          ].map((social, index) => (
            <Link key={index} href={social.href} target="_blank">
              <motion.div
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -10, 0], // Bounce effect
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 2,
                  delay: index * 0.3, // Staggered delay for each icon
                }}
                className={`${social.color} text-3xl`}
              >
                {social.icon}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="w-full text-center mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center space-x-12">
          {/* Projects */}
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.2 }}
            animate={{
              y: [0, -10, 0], // Bounce effect
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
            }}
          >
            <p className="text-4xl font-bold text-red-500">{data[0].project || 'this is project'}+</p>
            <p className="text-gray-500 dark:text-gray-300">Projects</p>
          </motion.div>
          {/* Clients */}
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.2 }}
            animate={{
              y: [0, -10, 0], // Bounce effect
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              delay: 0.5, // Adds slight delay to make the motion staggered
            }}
          >
            <p className="text-4xl font-bold text-blue-500">{data[0].client || 'this is client'}+</p>
            <p className="text-gray-500 dark:text-gray-300">Clients</p>
          </motion.div>
          {/* Services */}
          <motion.div
            className="flex flex-col items-center"
            whileHover={{ scale: 1.2 }}
            animate={{
              y: [0, -10, 0], // Bounce effect
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              delay: 1, // Adds slight delay for staggered motion
            }}
          >
            <p className="text-4xl font-bold text-green-500">{data[0].service || 'this is service'}+</p>
            <p className="text-gray-500 dark:text-gray-300">Services</p>
          </motion.div>
        </div>
      </motion.div>


    </div>
  );
};

export default HomePage;
