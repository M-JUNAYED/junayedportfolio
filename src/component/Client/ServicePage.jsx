"use client";

import { motion } from "framer-motion";

const ServicePage = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">No Service Data Found</p>
      </div>
    );
  }

  return (
    <div className="px-6 py-12 lg:px-16 lg:py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600 dark:text-blue-400">
          What I Do.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-4">
          I offer the full spectrum of services to help organizations work
          better.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white dark:bg-gray-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <img
                src={service.logo_img || "/default-icon.png"}
                alt={service.title || "Service"}
                className="w-20 h-20 object-contain"
              />
            </div>
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white text-center mb-4">
              {service.title || "Service Title"}
            </h2>
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
              {service.short_des ||
                "This is a placeholder description for the service. Learn more about what we offer."}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
