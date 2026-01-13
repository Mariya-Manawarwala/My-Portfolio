import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Download,
  ChevronRight,
  Terminal,
  Database,
  Cpu,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- CONTENT DATA ---
  const projects = [
    {
      title: "Pokémon Guessing Game",
      desc: "An interactive game built with React allowing users to guess Pokémon names based on silhouettes.",
      tags: ["React", "API", "CSS"],
      link: "#",
    },
    {
      title: "AimForTech Website",
      desc: "Responsive landing page layouts created with semantic HTML and modern CSS grid systems.",
      tags: ["HTML5", "CSS3", "Responsive"],
      link: "#",
    },
    {
      title: "Portfolio V1",
      desc: "Personal portfolio website featuring smooth scrolling and a dark-themed UI.",
      tags: ["React", "Tailwind"],
      link: "#",
    },
  ];

  const skills = [
    {
      icon: <Code size={24} />,
      title: "Frontend",
      desc: "React.js, Tailwind, HTML/CSS",
    },
    {
      icon: <Terminal size={24} />,
      title: "JavaScript",
      desc: "ES6+, DOM Manipulation, Async",
    },
    {
      icon: <Cpu size={24} />,
      title: "Tools",
      desc: "Git, GitHub, VS Code, Postman",
    },
    {
      icon: <Database size={24} />,
      title: "CS Basics",
      desc: "OOP, DBMS, Data Structures",
    },
  ];

  return (
    // MASTER CONTAINER - Midnight Background (#090F15)
    <div className="min-h-screen bg-[#090F15] text-[#D3D1CE] font-sans selection:bg-teal-400 selection:text-[#090F15]">
      {/* --- 1. NAVBAR (Sticky & Glass) --- */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#090F15]/80 border-b border-[#6C6D74]/20">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-[#D3D1CE]">
            Mariya<span className="text-teal-400">.dev</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-[#6C6D74]">
            {["Home", "About", "Skills", "Projects", "Experience"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-teal-400 transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <a
            href="#contact"
            className="hidden md:block px-5 py-2 bg-[#D3D1CE] text-[#090F15] text-sm font-bold rounded hover:bg-white transition-all"
          >
            Contact Me
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#D3D1CE]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#262E36] border-b border-[#6C6D74]/20">
            <div className="flex flex-col p-4 space-y-4 text-center">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#D3D1CE] py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <section
        id="home"
        className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12"
      >
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-teal-400 bg-teal-400/10 rounded-full border border-teal-400/20">
            WEB DEVELOPER & DESIGNER
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#D3D1CE]">
            Crafting Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D3D1CE] to-[#6C6D74]">
              Experiences
            </span>
          </h1>
          <p className="text-[#6C6D74] text-lg max-w-md leading-relaxed">
            I'm Mariya, a Software Engineering student building responsive,
            high-performance web applications with React and Tailwind CSS.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#262E36] border border-[#6C6D74]/50 text-[#D3D1CE] font-medium rounded hover:border-teal-400 hover:text-teal-400 transition-all flex items-center gap-2"
            >
              View My Work <ChevronRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-transparent text-[#6C6D74] hover:text-[#D3D1CE] flex items-center gap-2 transition-all"
            >
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>

        {/* Abstract Visual (Right Side) */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="absolute inset-0 bg-teal-400/20 blur-[100px] rounded-full opacity-20"></div>
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-[#262E36] border border-[#6C6D74]/20 rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            {/* Mock Code Interface */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="space-y-3 font-mono text-sm text-[#6C6D74]">
              <div className="flex">
                <span className="text-teal-400 mr-2">const</span> Developer ={" "}
                <span className="text-[#D3D1CE] ml-2">{"{"}</span>
              </div>
              <div className="pl-4">
                name: <span className="text-teal-400">'Mariya'</span>,
              </div>
              <div className="pl-4">
                role: <span className="text-teal-400">'Frontend Intern'</span>,
              </div>
              <div className="pl-4">
                skills: [<span className="text-teal-400">'React'</span>,{" "}
                <span className="text-teal-400">'Tailwind'</span>],
              </div>
              <div className="pl-4">
                hardWorker: <span className="text-teal-400">true</span>
              </div>
              <div>{"}"};</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SKILLS GRID (The 3x2 Layout) --- */}
      <section id="skills" className="py-20 px-6 bg-[#090F15]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#D3D1CE]">
              Technical Arsenal
            </h2>
            <div className="w-16 h-1 bg-teal-400 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-[#262E36] border border-[#6C6D74]/20 rounded-xl hover:border-teal-400/50 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-[#6C6D74] group-hover:text-teal-400 mb-4 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-[#D3D1CE] mb-2">
                  {skill.title}
                </h3>
                <p className="text-[#6C6D74] text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. PROJECTS (Card Layout) --- */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#D3D1CE]">
              Featured Projects
            </h2>
            <p className="text-[#6C6D74] mt-2">
              Some things I've built recently
            </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-teal-400 text-sm font-medium hover:underline flex items-center gap-1"
          >
            View Github <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#262E36] border border-[#6C6D74]/20 rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(45,212,191,0.1)] transition-all"
            >
              {/* Placeholder Image */}
              <div className="h-48 bg-[#090F15] relative overflow-hidden">
                <div className="absolute inset-0 bg-teal-400/5 group-hover:bg-teal-400/10 transition-colors"></div>
                {/* Simulated content inside image */}
                <div className="absolute inset-0 flex items-center justify-center text-[#6C6D74]/30 font-bold text-4xl">
                  {index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#D3D1CE] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#6C6D74] text-sm mb-4 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#090F15] text-[#D3D1CE] rounded border border-[#6C6D74]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="text-sm font-medium text-teal-400 hover:text-teal-300 flex items-center gap-1">
                    Live Demo <ExternalLink size={14} />
                  </button>
                  <button className="text-sm font-medium text-[#6C6D74] hover:text-[#D3D1CE] flex items-center gap-1">
                    Code <Github size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. EXPERIENCE (Vertical Timeline) --- */}
      <section id="experience" className="py-20 px-6 bg-[#262E36]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#D3D1CE] mb-12 text-center">
            My Journey
          </h2>

          <div className="relative border-l border-[#6C6D74]/30 ml-4 md:ml-1/2 space-y-12">
            {/* Item 1 */}
            <div className="relative pl-8 md:pl-0">
              {/* Dot */}
              <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] w-3 h-3 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>

              <div className="md:flex justify-between items-center group">
                <div className="md:w-[45%] md:text-right pr-8">
                  <h4 className="text-lg font-bold text-[#D3D1CE]">
                    Web Development Intern
                  </h4>
                  <p className="text-teal-400 text-sm">Eskills Web</p>
                  <p className="text-[#6C6D74] text-xs mt-1">
                    Aug 2025 - Present
                  </p>
                </div>
                <div className="hidden md:block md:w-[45%] pl-8">
                  <p className="text-[#6C6D74] text-sm">
                    Building frontend interfaces, fixing UI bugs, and
                    implementing responsive layouts.
                  </p>
                </div>
                {/* Mobile view description */}
                <div className="md:hidden mt-2">
                  <p className="text-[#6C6D74] text-sm">
                    Building frontend interfaces, fixing UI bugs, and
                    implementing responsive layouts.
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 md:pl-0">
              <div className="absolute -left-[5px] md:left-1/2 md:-ml-[5px] w-3 h-3 bg-[#6C6D74] rounded-full border border-[#090F15]"></div>

              <div className="md:flex justify-between items-center group">
                <div className="hidden md:block md:w-[45%] md:text-right pr-8">
                  <p className="text-[#6C6D74] text-sm">
                    Specialization in AI. Learning Core CS fundamentals and
                    Advanced React.
                  </p>
                </div>
                <div className="md:w-[45%] pl-8">
                  <h4 className="text-lg font-bold text-[#D3D1CE]">
                    Bachelor's in Software Engineering
                  </h4>
                  <p className="text-teal-400 text-sm">Medicaps University</p>
                  <p className="text-[#6C6D74] text-xs mt-1">2024 - 2028</p>
                </div>
                <div className="md:hidden mt-2">
                  <p className="text-[#6C6D74] text-sm">
                    Specialization in AI. Learning Core CS fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. CONTACT SECTION --- */}
      <section
        id="contact"
        className="py-20 px-6 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-[#D3D1CE] mb-6">
          Let's Work Together
        </h2>
        <p className="text-[#6C6D74] mb-10 max-w-lg mx-auto">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, my inbox is always open!
        </p>

        <div className="bg-[#262E36] p-8 rounded-2xl border border-[#6C6D74]/20 max-w-2xl mx-auto shadow-2xl">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#090F15] border border-[#6C6D74]/30 rounded p-3 text-[#D3D1CE] focus:outline-none focus:border-teal-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#090F15] border border-[#6C6D74]/30 rounded p-3 text-[#D3D1CE] focus:outline-none focus:border-teal-400"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full bg-[#090F15] border border-[#6C6D74]/30 rounded p-3 text-[#D3D1CE] focus:outline-none focus:border-teal-400"
            ></textarea>
            <button className="w-full bg-teal-400 hover:bg-teal-300 text-[#090F15] font-bold py-3 rounded transition-colors">
              Send Message
            </button>
          </form>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="mailto:email@example.com"
              className="text-[#6C6D74] hover:text-teal-400 transition-colors"
            >
              <Mail />
            </a>
            <a
              href="#"
              className="text-[#6C6D74] hover:text-teal-400 transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="text-[#6C6D74] hover:text-teal-400 transition-colors"
            >
              <Github />
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-[#6C6D74] text-sm border-t border-[#6C6D74]/10">
        <p>© 2026 Mariya Manawarwala. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
