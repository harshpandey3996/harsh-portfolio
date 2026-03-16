import { GraduationCap, Award, Trophy, ExternalLink } from "lucide-react";

const Education = () => {

  const certifications = [
    {
      name: "Introduction to DevOps Tools",
      icon: <Award className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/13ssPYwxcauU7MTcRLtvTYOPMYiHLwbUy/view",
    },
    {
      name: "Full Stack Development",
      icon: <Award className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/1sl1ZTqvMr6cT_GK7W8tp6XkltpvqU5Ed/view",
    },
    {
      name: "SIET Hackathon (Runner-Up)",
      icon: <Trophy className="w-5 h-5" />,
      link: "https://drive.google.com/file/d/1VFpH2PRle4gcqrW4O2nk_l8nL1IodFQK/view",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Education & Certifications
        </h2>

        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Education */}

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-lg border-2 border-blue-200">

            <div className="flex items-center gap-3 mb-4">

              <div className="p-3 bg-blue-600 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Education
              </h3>

            </div>

            <div className="space-y-4">

              <div>

                <h4 className="text-xl font-semibold text-slate-900 mb-2">
                  Bachelor of Computer Applications (BCA)
                </h4>

                <p className="text-slate-700 mb-1">
                  Prof. Rajendra Singh (Rajju Bhaiya) University, Prayagraj
                </p>

                <p className="text-slate-600 mb-2">
                  August 2024 - May 2027
                </p>

                <div className="flex items-center gap-4">

                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    CGPA: 7.87
                  </span>

                </div>

              </div>

              <div className="pt-4 border-t border-blue-200">

                <div className="grid grid-cols-2 gap-4">

                  <div>
                    <p className="text-sm text-slate-600 mb-1">
                      Intermediate
                    </p>
                    <p className="font-semibold text-slate-900">
                      87%
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-600 mb-1">
                      High School
                    </p>
                    <p className="font-semibold text-slate-900">
                      88%
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Certifications */}

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-lg border-2 border-green-200">

            <div className="flex items-center gap-3 mb-6">

              <div className="p-3 bg-green-600 rounded-full">
                <Award className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Certifications
              </h3>

            </div>

            <div className="space-y-3">

              {certifications.map((cert, index) => (

                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-green-200 hover:shadow-md transition-all"
                >

                  <div className="flex items-center gap-3">

                    <div className="text-green-600">
                      {cert.icon}
                    </div>

                    <p className="text-slate-800 font-medium">
                      {cert.name}
                    </p>

                  </div>

                  {/* Certificate Button */}

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >

                    <ExternalLink size={14} />

                    Check Certificate

                  </a>

                </div>

              ))}

            </div>

            <div className="mt-6 pt-6 border-t border-green-200">

              <h4 className="font-semibold text-slate-900 mb-3">
                Trainings
              </h4>

              <div className="space-y-2">

                <p className="text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  DevOps Tools
                </p>

                <p className="text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Full-Stack Development
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;