"use client";

import { useState } from "react";
import Link from "next/link";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("skills");

  const aboutInfo =
    "Hi, I'm Suraj Kumar, a passionate Software developer with over 1.2 years of professional experience in software and web development. I specialize in building applications and software with efficient frameworks, ensuring flawless performance. With hands-on expertise in SQL, MySQL, JavaScript, HTML, CSS, I’ve collaborated on diverse projects, enhancing product quality.";

  const educationInfo = [
    {
      degree: "Bachelors in Mechatronics Engineering",
      duration: "2016 - 2020",
      place: "Bannari Amman Institute of Technology",
    },
  ];

  const experienceInfo = [
    {
      company: "Tata Consultancy Services",
      duration: "Mar 2020 - Nov 2022",
      role: "Assistant System Engineer Trainee",
    },
    {
      company: "Freelancer",
      duration: "Jan 2023 - Mar 2024",
      role: "Web Developer and Content Writer",
    },
    {
      company: "Moxman Digital Pvt Ltd",
      duration: "Aug 2024 - Present",
      role: "Backend Developer and Content Writer",
    },
  ];

  const skillsInfo = [
    { name: "SQL", icon: "/sql-icon.png" },
    { name: "MySQL", icon: "/mysql-icon.png" },
    { name: "JavaScript", icon: "/javascript-icon.png" },
    { name: "Dot Net", icon: "/dotnet-icon.png" },
    { name: "Next.js", icon: "/nextjs-icon.png" },
    { name: "HTML", icon: "/html-icon.png" },
    { name: "CSS", icon: "/css-icon.png" },
    { name: "MATLAB", icon: "/matlab-icon.png" },
    { name: "Git", icon: "/git-icon.png" },
    { name: "Tailwind CSS", icon: "/tailwind-icon.png" },
    { name: "Embedded C", icon: "/embeddedc-icon.png" },
    { name: "Node.js", icon: "/nodejs-icon.png" },
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
          <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Services
          </Link>
          <Link href="/resume" className="text-yellow-400 font-bold transition duration-200">
            Resume
          </Link>
          <Link href="/work" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Work
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Contact
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
        {/* Left Side Navigation */}
        <div className="flex flex-col space-y-4">
          <button
            className={`py-4 px-6 rounded-lg font-bold text-left ${
              activeSection === "experience" ? "bg-yellow-400 text-black" : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("experience")}
          >
            Experience
          </button>
          <button
            className={`py-4 px-6 rounded-lg font-bold text-left ${
              activeSection === "education" ? "bg-yellow-400 text-black" : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("education")}
          >
            Education
          </button>
          <button
            className={`py-4 px-6 rounded-lg font-bold text-left ${
              activeSection === "skills" ? "bg-yellow-400 text-black" : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("skills")}
          >
            Skills
          </button>
          <button
            className={`py-4 px-6 rounded-lg font-bold text-left ${
              activeSection === "about" ? "bg-yellow-400 text-black" : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("about")}
          >
            About Me
          </button>
        </div>

        {/* Right Side Dynamic Content */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-4 capitalize">
            {activeSection === "about" && "About Me"}
            {activeSection === "education" && "My Education"}
            {activeSection === "experience" && "My Experience"}
            {activeSection === "skills" && "My Skills"}
          </h2>

          {/* About Me Section */}
          {activeSection === "about" && (
            <p className="text-gray-300 text-lg leading-relaxed">{aboutInfo}</p>
          )}

          {/* Education Section */}
          {activeSection === "education" && (
            <div className="space-y-4">
              {educationInfo.map((edu, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-yellow-400 font-bold">{edu.degree}</p>
                  <p className="text-gray-300">{edu.duration}</p>
                  <p className="text-gray-400">{edu.place}</p>
                </div>
              ))}
            </div>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <div className="space-y-4">
              {experienceInfo.map((exp, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-yellow-400 font-bold">{exp.role}</p>
                  <p className="text-gray-300">{exp.duration}</p>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
              ))}
            </div>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {skillsInfo.map((skill, index) => (
                <div key={index} className="group relative flex flex-col items-center cursor-pointer">
                  {/* Skill Icon */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 hover:scale-110 transition-transform duration-200"
                  />
                  {/* Tooltip */}
                  <div className="absolute bottom-16 bg-gray-900 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
