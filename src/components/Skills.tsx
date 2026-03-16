const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript (ES6+)', 'Java', 'C'],
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS' , `Bootstrap`],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      category: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render'],
    },
    {
      category: 'CS Fundamentals',
      skills: ['Data Structures & Algorithms (Java)', 'OOP', 'Authentication', 'CRUD Operations'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Skills</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 p-6 rounded-xl border-2 border-slate-200 hover:border-blue-400 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-900">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
