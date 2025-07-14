"use client";

import { Heart, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function AboutSection() {
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

  return (
    <section
      id="sobre-mi"
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-white dark:bg-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2314b8a6' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-teal-600 to-emerald-600"></div>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full max-w-md p-8 mx-auto border aspect-square rounded-2xl bg-gradient-to-br from-teal-500/20 to-emerald-600/20 backdrop-blur-sm border-teal-200/20 dark:border-teal-700/20">
                  <div className="flex items-center justify-center w-full h-full rounded-xl bg-slate-100 dark:bg-slate-800">
                    <div className="space-y-4 text-center">
                      <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-emerald-600">
                        <Image
                          src="/profile.png"
                          alt="Profile Image"
                          objectFit="cover"
                          className="rounded-full"
                          width={160}
                          height={160}
                        />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Desarrollador desde
                        </p>
                        <p className="text-2xl font-bold gradient-text">2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute w-20 h-20 rounded-full -top-4 -right-4 bg-gradient-to-br from-cyan-400/30 to-teal-500/30 blur-xl animate-pulse"></div>
              <div className="absolute w-16 h-16 delay-1000 rounded-full -bottom-4 -left-4 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 blur-xl animate-pulse"></div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Bio */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  ¡Hola! Soy Geovanny Edgardo
                </h3>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Desarrollador Web apasionado por crear soluciones digitales
                  innovadoras y escalables. Con más de 1 año de experiencia, me
                  especializo en tecnologías modernas como Vue, Node.js y
                  TypeScript.
                </p>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                  Mi enfoque se centra en escribir código limpio, crear
                  experiencias de usuario excepcionales y mantenerme actualizado
                  con las últimas tendencias tecnológicas.
                </p>
              </div>

              {/* Values */}
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="p-4 text-center transition-colors duration-300 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-teal-50 dark:hover:bg-teal-900/20">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Objetivos
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Crear productos que impacten positivamente en la vida de las
                    personas
                  </p>
                </div>

                <div className="p-4 text-center transition-colors duration-300 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-teal-50 dark:hover:bg-teal-900/20">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Pasión
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Aprendizaje continuo y resolución creativa de problemas
                    complejos
                  </p>
                </div>

                <div className="p-4 text-center transition-colors duration-300 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-teal-50 dark:hover:bg-teal-900/20">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                    Innovación
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Implementar soluciones modernas con las mejores prácticas
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Proyectos
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">2</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Años Exp.
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">4</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    Tecnologías
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
