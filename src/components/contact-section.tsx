"use client";

import { Github, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ContactSection() {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "geovannyed.pe.va@gmail.com",
      href: "mailto:geovannyed.pe.va@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+52 984 164 0454",
      href: "tel:+529841640454",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Playa del Carmen, Quintana Roo, México",
      href: "https://maps.google.com",
      color: "from-red-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Geo240805",
      color: "hover:text-slate-900 dark:hover:text-white",
    },
  ];

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-white dark:bg-slate-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-emerald-600/10 blur-3xl"></div>
        <div className="absolute rounded-full -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/10 to-teal-600/10 blur-3xl"></div>
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
              Hablemos de tu <span className="gradient-text">Proyecto</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400">
              ¿Tienes una idea increíble? Me encantaría escucharla y ayudarte a
              hacerla realidad
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-teal-600 to-emerald-600"></div>
          </div>

          <div className="flex items-center justify-center gap-12 ">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 group ${
                        isVisible ? "animate-slide-in-left" : ""
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold transition-colors duration-300 text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                  Sígueme en Redes
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 ${
                        social.color
                      } transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${
                        isVisible ? "animate-slide-in-left" : ""
                      }`}
                      style={{ animationDelay: `${(index + 3) * 100}ms` }}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div
                className={`bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-teal-200/50 dark:border-teal-700/50 ${
                  isVisible ? "animate-slide-in-left" : ""
                }`}
                style={{ animationDelay: "700ms" }}
              >
                <div className="flex items-center mb-3 space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Disponible para Proyectos
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Actualmente acepto nuevos proyectos. Tiempo de respuesta
                  promedio: 24 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
