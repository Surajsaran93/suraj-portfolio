import Link from "next/link";

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white font-jetbrains relative">
      {/* Top Navigation */}
      <div className="absolute top-4 left-4">
        <h1 className="text-2xl font-bold">Suraj Kumar</h1>
      </div>
      <div className="absolute top-4 right-4">
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-yellow-400 transition duration-200">
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

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 w-full h-screen p-6 max-w-6xl mx-auto items-center">
        {/* Service 1 */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between group">
          <h2 className="text-2xl font-bold text-white flex items-center group-hover:text-yellow-400 group-hover:animate-pulse transition-all duration-200">
            Web Development
            <span className="ml-4 bg-yellow-400 h-1 w-10 inline-block group-hover:animate-pulse"></span>
          </h2>
          <p className="text-gray-400 mt-2">
            Building responsive and dynamic websites tailored to your needs,
            ensuring optimal user experience.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between group">
          <h2 className="text-2xl font-bold text-white flex items-center group-hover:text-yellow-400 group-hover:animate-pulse transition-all duration-200">
            Content Writing
            <span className="ml-4 bg-yellow-400 h-1 w-10 inline-block group-hover:animate-pulse"></span>
          </h2>
          <p className="text-gray-400 mt-2">
            Crafting engaging and impactful content to convey your ideas
            effectively and creatively.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between group">
          <h2 className="text-2xl font-bold text-white flex items-center group-hover:text-yellow-400 group-hover:animate-pulse transition-all duration-200">
            Software Development
            <span className="ml-4 bg-yellow-400 h-1 w-10 inline-block group-hover:animate-pulse"></span>
          </h2>
          <p className="text-gray-400 mt-2">
            Designing and implementing software solutions to solve complex
            business challenges efficiently.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col justify-between group">
          <h2 className="text-2xl font-bold text-white flex items-center group-hover:text-yellow-400 group-hover:animate-pulse transition-all duration-200">
            Framework Development
            <span className="ml-4 bg-yellow-400 h-1 w-10 inline-block group-hover:animate-pulse"></span>
          </h2>
          <p className="text-gray-400 mt-2">
            Creating robust frameworks to streamline your development
            processes and ensure scalability.
          </p>
        </div>
      </div>
    </div>
  );
}
