"use client"; // 👈 Required for using useState

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react'; // ✅ This will now work in a Client Component
import './globals.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Head>
        <title>Vinaybhaskar Prathi - Portfolio</title>
      </Head>

      {/* Navigation Bar */}
      <nav className="absolute top-0 w-full flex justify-between p-5 shadow-lg bg-gray-800 text-white">
        <h1 className="text-2xl font-bold text-blue-400">Vinaybhaskar Prathi</h1>
        <div className="space-x-4">
          <Link className="hover:text-blue-400" href="/about">About</Link>
          <Link className="hover:text-blue-400" href="/resume">Resume</Link>
          <Link className="hover:text-blue-400" href="/projects">Projects</Link>
          <Link className="hover:text-blue-400" href="/contact">Contact</Link>
          <Link className="hover:text-blue-400" href="/blog">Blog</Link>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center mt-16 p-6">
        <Image 
          src="/profile.jpg" 
          alt="Vinaybhaskar Prathi" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-blue-400 shadow-lg"
        />
        <h2 className="text-4xl font-bold text-blue-400 mt-4">Data Scientist | ML Engineer | Researcher</h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Passionate about AI-driven solutions, predictive modeling, and NLP innovations.
          I specialize in building machine learning models and optimizing AI workflows.
        </p>
        <Link href="/contact" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-transform transform hover:scale-110">
          Get In Touch
        </Link>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-5 text-gray-500 text-center w-full">
        <p>&copy; 2025 Vinaybhaskar Prathi. All rights reserved.</p>
      </footer>
    </div>
  );
}
