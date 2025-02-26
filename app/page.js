"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      {/* Left Side: Bio Section */}
      <motion.div 
        className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-400">
          Data Scientist <span className="text-gray-300">|</span> ML Engineer
        </h1>
        <p className="mt-4 text-lg text-gray-300 max-w-md">
          Passionate about AI-driven solutions, predictive modeling, and NLP innovations. 
          Transforming data into actionable insights through cutting-edge ML techniques.
        </p>
        <a 
          href="#projects" 
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 transition-transform transform hover:scale-110 text-white px-6 py-3 rounded-lg"
        >
          View My Work
        </a>
      </motion.div>

      {/* Right Side: Profile Image */}
      <motion.div 
        className="w-full md:w-1/2 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent opacity-50"></div>
        <Image 
          src="/profile.jpg" 
          alt="Vinaybhaskar Prathi" 
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}
