"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
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

  const projects = [
    {
      id: 1,
      title: "GO-AM-Reality-Horizons",
      description:
        "Plataforma de Realidad Aumentada y Virtual para experiencias inmersivas en educación y entretenimiento.",
      image: "/proyectos/GO-AM-Reality-Horizons.png",
      technologies: ["Vue.js", "TypeScript", "Firebase", "Tailwind", "Node.js"],
      category: "fullstack",
      github: "https://github.com/Geo240805/GO-AM-Reality-Horizons.git",
      demo: "https://go-am-reality-horizons.vercel.app/",
      date: "2024",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones y análisis de productividad.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2024",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Dashboard meteorológico con pronósticos detallados, mapas interactivos y alertas personalizadas.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2023",
      featured: false,
    },
    {
      id: 4,
      title: "API REST Microservices",
      description:
        "Arquitectura de microservicios escalable con autenticación JWT, rate limiting y documentación automática.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Node.js", "Express", "Docker", "Redis", "Swagger"],
      category: "backend",
      github: "https://github.com",
      demo: null,
      date: "2023",
      featured: false,
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description:
        "Herramienta de análisis de redes sociales con visualización de datos en tiempo real y reportes automatizados.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Django", "D3.js", "PostgreSQL", "Celery"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2023",
      featured: true,
    },
    {
      id: 6,
      title: "Mobile Fitness App",
      description:
        "Aplicación móvil de fitness con seguimiento de ejercicios, planes personalizados y comunidad social.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "React Native",
        "Expo",
        "Firebase",
        "Redux",
        "Styled Components",
      ],
      category: "mobile",
      github: "https://github.com",
      demo: "https://demo.com",
      date: "2022",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "Todos" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-slate-900"
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
              Proyectos <span className="gradient-text">Destacados</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
              Una selección de mis trabajos más recientes y significativos
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600"></div>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="mb-8 text-2xl font-bold text-center text-slate-900 dark:text-white">
              Proyectos Principales
            </h3>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <div
                  key={project.id}
                  className={`group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 ${
                    isVisible ? "animate-slide-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></div>
                    <div className="absolute flex space-x-2 top-4 right-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800"
                        >
                          <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 transition-colors duration-200 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800"
                        >
                          <ExternalLink className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h4>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                    </div>

                    <p className="mb-4 leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded-full dark:bg-teal-900/30 dark:text-teal-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      {project.demo && (
                        <Button
                          size="sm"
                          className="text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-teal-600 bg-transparent border-teal-600 hover:bg-teal-600 hover:text-white"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 ${
                  isVisible ? "animate-slide-up" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/30 to-transparent group-hover:opacity-100"></div>
                </div>

                {/* Project Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {project.date}
                    </span>
                  </div>

                  <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium text-teal-700 bg-teal-100 rounded dark:bg-teal-900/30 dark:text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-200 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors duration-200 text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.category === "fullstack"
                          ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          : project.category === "frontend"
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                          : project.category === "backend"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                          : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                      }`}
                    >
                      {
                        categories.find((cat) => cat.id === project.category)
                          ?.label
                      }
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
              ¿Interesado en ver más proyectos?
            </p>
            <Button
              size="lg"
              className="px-8 py-3 text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 hover:shadow-xl hover:scale-105"
              asChild
            >
              <a
                href="https://github.com/Geo240805"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                Ver GitHub Completo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
