"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToNext = () => {
    const element = document.querySelector("#sobre-mi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <section
      id="inicio"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-emerald-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-teal-600/20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 p-1 rounded-full sm:w-40 sm:h-40 bg-gradient-to-br from-teal-500 to-emerald-600 pulse-glow">
                <div className="flex items-center justify-center w-full h-full rounded-full bg-slate-100 dark:bg-slate-800">
                  {/* <span className="text-4xl font-bold sm:text-5xl gradient-text">
                    GE
                  </span> */}
                  <Image
                    src="/profile.png"
                    alt="Profile Image"
                    objectFit="cover"
                    className="rounded-full"
                    width={160}
                    height={160}
                  />
                </div>
              </div>
              <div className="absolute flex items-center justify-center w-8 h-8 bg-green-500 border-4 border-white rounded-full -bottom-2 -right-2 dark:border-slate-900">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-medium text-teal-600 sm:text-xl dark:text-teal-400 animate-slide-in-left">
                ¡Hola! Soy
              </p>
              <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl text-slate-900 dark:text-white animate-slide-up">
                Geovanny <span className="gradient-text">Edgardo</span>
              </h1>
            </div>

            <div className="space-y-4 animate-slide-in-right">
              <h2 className="text-xl font-light sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300">
                Desarrollador{" "}
                <span className="font-semibold gradient-text">Web</span>
              </h2>
              <p className="max-w-3xl mx-auto text-lg leading-relaxed sm:text-xl text-slate-600 dark:text-slate-400">
                Especializado en crear experiencias web modernas y escalables
                con{" "}
                <span className="font-semibold text-teal-600 dark:text-teal-400">
                  Vue{" "}
                </span>
                y{" "}
                <span className="font-semibold text-teal-600 dark:text-teal-400">
                  TypeScript
                </span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row animate-slide-up">
              <Button
                size="lg"
                className="px-8 py-3 text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 hover:shadow-xl hover:scale-105"
                onClick={() =>
                  document
                    .querySelector("#proyectos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver Proyectos
              </Button>
              <Button
                onClick={() => {
                  window.open("/cv.pdf", "_blank");
                }}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-teal-600 transition-all duration-300 transform bg-transparent border-2 border-teal-600 rounded-full hover:bg-teal-600 hover:text-white hover:scale-105"
              >
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center pt-8 mt-8 space-x-6 animate-fade-in">
              <a
                href="https://github.com/Geo240805"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 transform rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </a>

              <a
                href="mailto:geovannyed.pe.va@gmail.com"
                className="flex items-center justify-center w-12 h-12 transition-all duration-300 transform rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-900/30 hover:scale-110 hover:shadow-lg"
              >
                <Mail className="w-5 h-5 text-slate-700 dark:text-slate-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-14 left-1/2 animate-bounce-gentle">
          <button
            onClick={scrollToNext}
            className="flex items-center justify-center w-8 h-8 transition-all duration-300 border-2 border-teal-600 rounded-full dark:border-teal-400 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-400 dark:hover:text-slate-900"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
