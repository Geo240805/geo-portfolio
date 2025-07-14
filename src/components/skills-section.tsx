"use client";

import { Code, Database, Palette, Server } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Vue", level: 70 },
        { name: "TypeScript", level: 30 },
        { name: "Tailwind CSS", level: 50 },
        { name: "JavaScript", level: 75 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Express", level: 20 },
      ],
    },
    {
      icon: Database,
      title: "Base de Datos",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 50 },
        { name: "MongoDB", level: 50 },
      ],
    },
    {
      icon: Palette,
      title: "Design & UX",
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Figma", level: 60 },
        { name: "UI/UX Design", level: 50 },
      ],
    },
  ];

  return (
    <section
      id="habilidades"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950/20"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
              Habilidades <span className="gradient-text">Técnicas</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
              Tecnologías y herramientas que domino para crear soluciones
              completas y escalables
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 ${
                  isVisible ? "animate-slide-up" : ""
                }`}
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6 space-x-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700">
                        <div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${
                              categoryIndex * 100 + skillIndex * 50
                            }ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl p-8 mx-auto bg-white border shadow-lg dark:bg-slate-800 rounded-2xl border-slate-200/50 dark:border-slate-700/50">
              <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Siempre Aprendiendo
              </h3>
              <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
                La tecnología evoluciona constantemente, y yo también.
                Actualmente explorando:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Nuxt.js", "Angular", "React.js", "Next.js"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-teal-600 border border-teal-200 rounded-full bg-gradient-to-r from-teal-500/10 to-emerald-500/10 dark:text-teal-400 dark:border-teal-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
