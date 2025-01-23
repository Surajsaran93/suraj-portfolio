import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 font-sans relative">
      {/* Navigation Bar */}
      <div className="absolute top-4 left-4">
        <h1 className="text-2xl font-bold">Suraj Kumar</h1>
      </div>
      <div className="absolute top-4 right-4">
        <nav className="flex space-x-6">
        <Link href="/home" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Home
          </Link>
          <Link href="/work" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Work
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Services
          </Link>
          <Link href="/resume" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Resume
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Contact
          </Link>
          
        </nav>
      </div>

      {/* Main Section */}
      <h1 className="text-6xl font-extrabold mb-4 text-center leading-tight">
        <span className="text-yellow-400">Hi, I'm M.Suraj Kumar</span>
      </h1>
      <p className="text-xl text-gray-400 text-center mb-6 max-w-2xl italic leading-relaxed">
        Dynamic Mechatronics Engineer with expertise in software and web
        development, content writing. Passionate about creating innovative
        solutions with collaborative ideas.
      </p>
      <Link href="/SURAJKUMAR RESUME.pdf" passHref>
        <button className="bg-blue-200 text-black font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-300 transition duration-200">
          Download CV
        </button>
      </Link>
      <div className="flex items-center mt-8">
        <p className="text-lg mr-4">LinkedIn:</p>
        <a
          href="https://www.linkedin.com/in/suraj-kumar-6b4057228?utm_source=share&ut"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            src="/linkedin-logo.png"
            alt="LinkedIn"
            width={40}
            height={40}
            className="hover:opacity-80 transition duration-200"
          />
        </a>
      </div>
    </div>
  );
}
