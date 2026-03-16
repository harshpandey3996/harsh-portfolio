import { Award, ShoppingCart, Calculator, Cloud, ListTodo, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  icon: JSX.Element;
  color: "blue" | "green" | "cyan" | "sky" | "orange";
  date?: string;
  github: string;
};

const colorClasses = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
  cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200" },
  sky: { bg: "bg-sky-50", text: "text-sky-600", border: "border-sky-200" },
  orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
};

const Projects = () => {

  const projects: Project[] = [

    {
      title: "Certificate Management System",
      description:
        "Full-stack web application for students to earn authorized certificates by completing course-based assessments across Web Development, Cyber Security, Data Science, and AI/ML domains.",
      features: [
        "Multi-level certification system (Beginner, Intermediate, Advanced)",
        "MCQ-based evaluations",
        "Secure authentication and certificate generation",
        "Responsive React.js interfaces",
      ],
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
      icon: <Award className="w-8 h-8" />,
      color: "blue",
      date: "Feb 2026",
      github: "https://github.com/harshpandey3996/skill-proof",
    },

    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce platform enabling users to browse and purchase products including medicines, books, and mobile phones.",
      features: [
        "Product listing and search",
        "User authentication system",
        "Shopping cart functionality",
        "Order management",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "green",
      date: "Sep 2025",
      github: "#",
    },

    {
      title: "Advanced Calculator",
      description:
        "Feature-rich calculator application with scientific functions, history tracking, and a clean user interface.",
      features: [
        "Basic and scientific operations",
        
        "Keyboard support",
        "Responsive design",
      ],
      tech: ["React.js", "JavaScript", "CSS"],
      icon: <Calculator className="w-8 h-8" />,
      color: "cyan",
      github: "https://github.com/harshpandey3996/Scientific-Calculator-By-Harsh-Pandey",
    },

    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application providing current conditions, forecasts, and weather alerts for any location worldwide.",
      features: [
        "Real-time weather data",
        "Location-based search",
    
        "Weather animations",
      ],
      tech: ["React.js", "OpenWeather API", "Tailwind CSS"],
      icon: <Cloud className="w-8 h-8" />,
      color: "sky",
      github: "https://github.com/harshpandey3996/Weather-Web-",
    },

    {
      title: "Todo List Manager",
      description:
        "Intuitive task management application with categorization, priority levels, and local storage persistence.",
      features: [
        "Add, edit, delete tasks",
        "Priority and category tags",
      
        "Local storage sync",
      ],
      tech: ["React.js", "JavaScript", "LocalStorage"],
      icon: <ListTodo className="w-8 h-8" />,
      color: "orange",
      github: "https://github.com/harshpandey3996/Add-your-daily-task-TO-DO-List-",
    },

  ];

  return (
    <section id="projects" className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Projects
        </h2>

        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => {

            const color = colorClasses[project.color];

            return (

              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 border-2 ${color.border}`}
              >

                <div className={`${color.bg} p-6`}>

                  <div className={`${color.text} mb-3`}>
                    {project.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  {project.date && (
                    <p className="text-sm text-slate-600">
                      {project.date}
                    </p>
                  )}

                </div>

                <div className="p-6">

                  <p className="text-slate-700 mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">

                    <h4 className="font-semibold text-slate-900 mb-2">
                      Key Features:
                    </h4>

                    <ul className="space-y-1">

                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-600 flex items-start"
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}

                    </ul>

                  </div>

                  <div className="mb-4">

                    <div className="flex flex-wrap gap-2">

                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 ${color.bg} ${color.text} rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                  <div className="flex gap-3">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>

                  </div>

                </div>

              </div>

            );

          })}

        </div>
      </div>
    </section>
  );
};

export default Projects;