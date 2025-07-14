"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, Code2 } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white bg-slate-900 dark:bg-slate-950">
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
        {/* Main Footer Content */}
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-600">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Geovanny Edgardo
              </span>
            </div>
            <p className="max-w-md leading-relaxed text-slate-400">
              Desarrollador Web apasionado por crear experiencias web modernas y
              escalables. Especializado en Vue y tecnologías de vanguardia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#sobre-mi", label: "Sobre mí" },
                { href: "#habilidades", label: "Habilidades" },
                { href: "#proyectos", label: "Proyectos" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="transition-colors duration-200 text-slate-400 hover:text-teal-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contacto</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="mailto:alex@alexrivera.dev"
                  className="transition-colors duration-200 hover:text-teal-400"
                >
                  geovannyed.pe.va@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+34123456789"
                  className="transition-colors duration-200 hover:text-teal-400"
                >
                  +52 984 164 0454
                </a>
              </li>
              <li className="text-slate-500">
                Playa del Carmen, Quintana Roo, México
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between py-6 border-t border-slate-800 sm:flex-row">
          <p className="mb-4 text-sm text-slate-400 sm:mb-0">
            © {currentYear} Geovanny Edgardo. Todos los derechos reservados.
          </p>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-teal-400 hover:bg-slate-800"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
