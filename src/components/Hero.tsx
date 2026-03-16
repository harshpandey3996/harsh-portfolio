import { Github, Linkedin, Code2, Mail, Phone, MapPin } from "lucide-react";
import profile from "../assets/harsh.png"; // apni image yaha import karna

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-4"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div className="relative">

            {/* Glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl opacity-30 rounded-full"></div>

            {/* Image */}
            <img
              src={profile}
              alt="Harsh Pandey"
              className="relative w-40 h-40 md:w-52 md:h-52 object-cover object-top rounded-full border-4 border-slate-700 shadow-xl"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Harsh Pandey
        </h1>

        {/* Role */}
        <p className="text-xl md:text-2xl text-slate-300 mb-6">
          Full-Stack Developer
        </p>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
          Building scalable web applications using React.js, Node.js, and PostgreSQL with a strong focus on backend architecture and performance optimization. Passionate about solving real-world problems through efficient system design and modern frontend technologies. Actively strengthening problem-solving skills through Data Structures and Algorithms using Java and regularly practicing coding challenges on platforms like LeetCode.
        </p>

        {/* Contact */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:erharshpandey22@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105"
          >
            <Mail size={18} />
            <span className="text-sm">erharshpandey22@gmail.com</span>
          </a>

          <a
            href="tel:8957666492"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105"
          >
            <Phone size={18} />
            <span className="text-sm">8957666492</span>
          </a>

          <a 
            href="https://www.google.com/maps/place/India/@20.7570573,72.1055199,5z/data=!3m1!4b1!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all hover:scale-105"
          >
            <MapPin size={18} />
            <span className="text-sm">India</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="https://github.com/harshpandey3996"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-pandey-76a5ba346"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all hover:scale-110"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://leetcode.com/u/i_am_harsh_pandit_/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-all hover:scale-110"
          >
            <Code2 size={24} />
          </a>
        </div>

        {/* Button */}
        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-12 flex-wrap">

          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            View My Work
          </a>

          <a
            href="https://drive.google.com/file/d/1LCl-rW9DrIzu8ntjoWUp3BR3Jw2-b7X7/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all hover:scale-105"
          >
            My Resume
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;