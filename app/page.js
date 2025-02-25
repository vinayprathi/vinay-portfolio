import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Vinaybhaskar Prathi - Data Scientist Portfolio</title>
      </Head>

      {/* Header Section */}
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vinaybhaskar Prathi</h1>
          <div className="space-x-4">
            <Link href="/about">About</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="mt-10 mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold">Data Scientist | ML Engineer | Researcher</h2>
        <p className="mt-4 text-lg text-gray-600">
          Passionate about AI-driven solutions, predictive modeling, and NLP innovations.
        </p>
        <Link href="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg">
          Get In Touch
        </Link>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500">
        <p>&copy; 2025 Vinaybhaskar Prathi. All rights reserved.</p>
      </footer>
    </div>
  );
}
