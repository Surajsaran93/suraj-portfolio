import Link from "next/link";

export default function Work() {
  const projects = [
    {
      title: "Rewriting the Banking Application",
      description: "Handled database management and backend technology for an efficient and secure banking system.",
    },
    {
      title: "Emudy Learning Platform",
      description: "Led frontend development with expertise, creating a seamless and interactive user interface.",
    },
    {
      title: "Goli Taxi App",
      description: "Managed backend development, ensuring robust performance and scalable architecture.",
    },
    {
      title: "Restaurant-Based Web Application",
      description: "Designed the backend using HTML, CSS, and updated databases for efficient operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-jetbrains relative p-6">
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
      <div className="flex flex-col items-center justify-center mt-12 animate-fadeIn">
        
        <p className="text-xl text-gray-400 mb-12 text-center max-w-2xl">
          Here are some of the projects and achievements I've worked on. These highlight my skills and contributions in various domains.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-400 transition-shadow duration-200"
            >
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
