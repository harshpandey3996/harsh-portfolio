import { Code2, Server, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with React.js and modern web technologies',
    },
    {
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      title: 'Backend Development',
      description: 'Designing RESTful APIs and authentication systems using Node.js and Express.js',
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'Database Management',
      description: 'Working with PostgreSQL, MongoDB, and MySQL for efficient data handling',
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I'm a passionate Full-Stack Developer with hands-on experience building scalable web applications. Currently pursuing my Bachelor of Computer Applications (BCA) with a CGPA of 7.87, I combine academic knowledge with practical development skills.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            My expertise lies in creating efficient backend systems and modern frontend interfaces that solve real-world problems. Alongside development, I actively strengthen my problem-solving abilities by practicing Data Structures and Algorithms using Java and solving coding challenges to improve algorithmic thinking. I'm always eager to learn new technologies and take on challenging projects that push my boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
