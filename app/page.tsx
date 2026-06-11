"use client";
import Carousel from "@/components/Carousel";
import FadeIn from "@/components/FadeIn";
import { GuitarIcon, LockIcon } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import SunsetScrollEffect from "@/components/SunsetScrollEffect";
import ThemeToggle from "@/components/ThemeToggle";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#FFF7F0] dark:bg-[#2F1F1A] text-[#2F221D] dark:text-[#FFF7F0] font-sans selection:bg-[#F3B37A] selection:text-[#2F221D] transition-colors duration-300">
      <SunsetScrollEffect />
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF7F0]/80 dark:bg-[#2F1F1A]/80 backdrop-blur-md border-b border-[#E7C7B3]/50 dark:border-[#5A4A40]/50 transition-colors duration-300">
        <div className="max-w-screen-lg mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-[#C95E2D] dark:text-[#E68A57] hover:text-[#A94A20] dark:hover:text-[#F5C895] transition-colors">
              CL
            </a>
            <div className="flex items-center gap-6">
              <ul className="flex items-center gap-8">
                <li>
                  <a
                    href="#home"
                    className={`text-sm font-medium transition-all hover:text-[#C95E2D] dark:hover:text-[#E68A57] ${
                      activeSection === "home" || activeSection === ""
                        ? "text-[#C95E2D] dark:text-[#E68A57]"
                        : "text-[#2F221D] dark:text-[#D9CCBC]"
                    }`}
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a
                    href="#projets-vedette"
                    className={`text-sm font-medium transition-all hover:text-[#C95E2D] dark:hover:text-[#E68A57] ${
                      activeSection === "projets-vedette"
                        ? "text-[#C95E2D] dark:text-[#E68A57]"
                        : "text-[#2F221D] dark:text-[#D9CCBC]"
                    }`}
                  >
                    Top Projets
                  </a>
                </li>
                <li>
                  <a
                    href="#competences"
                    className={`text-sm font-medium transition-all hover:text-[#C95E2D] dark:hover:text-[#E68A57] ${
                      activeSection === "competences"
                        ? "text-[#C95E2D] dark:text-[#E68A57]"
                        : "text-[#2F221D] dark:text-[#D9CCBC]"
                    }`}
                  >
                    Compétences
                  </a>
                </li>
                <li>
                  <a
                    href="#projets"
                    className={`text-sm font-medium transition-all hover:text-[#C95E2D] dark:hover:text-[#E68A57] ${
                      activeSection === "projets"
                        ? "text-[#C95E2D] dark:text-[#E68A57]"
                        : "text-[#2F221D] dark:text-[#D9CCBC]"
                    }`}
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a
                    href="#formation"
                    className={`text-sm font-medium transition-all hover:text-[#C95E2D] dark:hover:text-[#E68A57] ${
                      activeSection === "formation"
                        ? "text-[#C95E2D] dark:text-[#E68A57]"
                        : "text-[#2F221D] dark:text-[#D9CCBC]"
                    }`}
                  >
                    Formation
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className={`text-sm font-medium transition-all hover:text-[#C95E2D] dark:hover:text-[#E68A57] ${
                      activeSection === "contact"
                        ? "text-[#C95E2D] dark:text-[#E68A57]"
                        : "text-[#2F221D] dark:text-[#D9CCBC]"
                    }`}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
      {/* SECTION HERO */}
      <section id="home" className="relative max-w-screen-lg mx-auto px-6 pt-32 pb-24 scroll-mt-20">
        {/* Gradient animé en arrière-plan - subtil, palette sunset */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#E68A57] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#F3B37A] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#C95E2D] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-screen-md animate-fade-in">
          <h1 className="text-5xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-4">
            Corantin Louchard
          </h1>
          <h2 className="text-2xl text-[#C95E2D] dark:text-[#E68A57] font-semibold mb-6">
            Ingénieur en Technologies de l&apos;Information
          </h2>
          <p className="text-[#2F221D] dark:text-[#D9CCBC] text-lg leading-relaxed mb-8 max-w-2xl">
            Étudiant en 2ème année à l&apos;<strong>ÉTS Montréal</strong>, passionné par le développement logiciel et la cybersécurité. 
            J&apos;apprends à développer des applications web en explorant les bonnes pratiques de sécurité et d&apos;architecture backend.
          </p>
          <p className="text-[#C95E2D] dark:text-[#E68A57] font-semibold text-lg mb-8">
            À la recherche d&apos;un stage pour l&apos;automne 2026
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/cv-corantin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-[#C95E2D] dark:bg-[#E68A57] text-[#FFF7F0] dark:text-[#2F1F1A] font-bold hover:bg-[#A94A20] dark:hover:bg-[#F5C895] transition-all"
            >
              Mon CV
            </a>
            <a
              href="https://github.com/CorantinETS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-[#E7C7B3] dark:border-[#5A4A40] text-[#2F221D] dark:text-[#D9CCBC] hover:border-[#C95E2D] dark:hover:border-[#E68A57] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-all"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/corantin-louchard-03b3142a2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-[#E7C7B3] dark:border-[#5A4A40] text-[#2F221D] dark:text-[#D9CCBC] hover:border-[#C95E2D] dark:hover:border-[#E68A57] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* SECTION PROJETS EN VEDETTE */}
      <section id="projets-vedette" className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up scroll-mt-20">
        <FadeIn>
          <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Projets en Vedette
          </h3>
        </FadeIn>
        
        <FadeIn delay={100}>
          <Carousel autoPlayInterval={12000}>
          <ProjectCard
            title="SecureVault"
            description="Application web de partage sécurisé de secrets avec chiffrement AES-256 côté client. Les données sont automatiquement détruites après une lecture unique, garantissant une confidentialité maximale."
            technologies={["React 18", "TypeScript", "Node.js", "Express", "MongoDB", "AES-256", "Vercel", "Tailwind CSS"]}
            accentColor="orange"
            iconComponent={<LockIcon color="#C95E2D" />}
            date="Janvier 2026"
            image="/SecureVault.png"
            link="https://secure-vault-client-seven.vercel.app/"
            isExternal={true}
            isFeatured={true}
            features={[
              { icon: "•", text: "<strong>Chiffrement AES-256</strong> - Sécurité cryptographique côté client" },
              { icon: "•", text: "<strong>Autodestruction</strong> - Lecture unique puis suppression automatique" },
              { icon: "•", text: "<strong>Expiration configurable</strong> - Durée de vie personnalisable" },
              { icon: "•", text: "<strong>Interface moderne</strong> - UX/UI optimisée et responsive" },
            ]}
            buttons={[
              { text: "Démo Live", href: "https://secure-vault-client-seven.vercel.app/", primary: true, external: true },
              { text: "Code Source", href: "https://github.com/Corantinets/secure-vault", external: true },
            ]}
          />

          <ProjectCard
            title="Contrôleur Guitar Hero Custom"
            description="Développement d'un contrôleur USB HID personnalisé pour Clone Hero avec Raspberry Pi Pico. Implémentation complète du protocole USB HID en CircuitPython avec performance gaming optimale."
            technologies={["CircuitPython", "USB HID", "Raspberry Pi Pico", "Python", "Embedded Systems", "Hardware", "3D Printing"]}
            accentColor="orange"
            iconComponent={<GuitarIcon color="#C95E2D" />}
            date="Février 2026"
            image="/guitar-final.jpg"
            link="/guitar-hero"
            isExternal={false}
            isFeatured={true}
            features={[
              { icon: "•", text: "<strong>USB HID Custom</strong> - Implémentation complète du protocole" },
              { icon: "•", text: "<strong>Latence &lt;2ms</strong> - Performance gaming optimale" },
              { icon: "•", text: "<strong>Polling 1000Hz</strong> - Taux de rafraîchissement maximal" },
              { icon: "•", text: "<strong>Open Source</strong> - Code CircuitPython disponible sur GitHub" },
            ]}
            buttons={[
              { text: "Voir le Projet", href: "/guitar-hero", primary: true },
              { text: "Code Source", href: "https://github.com/Corantinets/portfolio/tree/main/public/code/guitar-hero", external: true },
            ]}
          />
        </Carousel>
        </FadeIn>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section id="competences" className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up scroll-mt-20">
        <FadeIn>
          <h3 className="text-3xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-8">
            Compétences Techniques
          </h3>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-6 items-stretch auto-rows-fr">
          {/* Langages */}
          <FadeIn delay={100}>
            <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-6 hover:border-[#C95E2D]/50 dark:hover:border-[#E68A57]/50 transition-all h-full">
              <h4 className="text-xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-4">
                Langages
              </h4>
              <ul className="space-y-2 text-[#2F221D] dark:text-[#D9CCBC]">
                <li>• JavaScript / TypeScript</li>
                <li>• Java</li>
                <li>• Python</li>
                <li>• PHP</li>
                <li>• HTML / CSS</li>
              </ul>
            </div>
          </FadeIn>

          {/* Développement Web */}
          <FadeIn delay={200}>
            <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-6 hover:border-[#C95E2D]/50 dark:hover:border-[#E68A57]/50 transition-all h-full">
              <h4 className="text-xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-4">
                Développement Web
              </h4>
              <ul className="space-y-2 text-[#2F221D] dark:text-[#D9CCBC]">
                <li>• React / Next.js</li>
                <li>• Node.js / Express</li>
                <li>• Pug</li>
                <li>• REST APIs</li>
              </ul>
            </div>
          </FadeIn>

          {/* Bases de Données */}
          <FadeIn delay={300}>
            <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-6 hover:border-[#C95E2D]/50 dark:hover:border-[#E68A57]/50 transition-all h-full">
              <h4 className="text-xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-4">
                Bases de Données
              </h4>
              <ul className="space-y-2 text-[#2F221D] dark:text-[#D9CCBC]">
                <li>• PostgreSQL</li>
                <li>• MongoDB</li>
                <li>• SQL / PL/SQL</li>
              </ul>
            </div>
          </FadeIn>

          {/* Analyse & Conception */}
          <FadeIn delay={400}>
            <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-6 hover:border-[#C95E2D]/50 dark:hover:border-[#E68A57]/50 transition-all h-full">
              <h4 className="text-xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-4">
                Analyse & Conception
              </h4>
              <ul className="space-y-2 text-[#2F221D] dark:text-[#D9CCBC]">
                <li>• UML</li>
                <li>• Modélisation Orientée Objet</li>
                <li>• Architecture MVC</li>
                <li>• Documentation technique</li>
              </ul>
            </div>
          </FadeIn>

          {/* Outils & Tests */}
          <FadeIn delay={500}>
            <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-6 hover:border-[#C95E2D]/50 dark:hover:border-[#E68A57]/50 transition-all h-full">
              <h4 className="text-xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-4">
                Outils & Tests
              </h4>
              <ul className="space-y-2 text-[#2F221D] dark:text-[#D9CCBC]">
                <li>• Git / GitHub</li>
                <li>• Jest (tests unitaires)</li>
                <li>• Visual Studio / Eclipse</li>
                <li>• Wireshark / Packet Tracer</li>
              </ul>
            </div>
          </FadeIn>

          {/* Qualités */}
          <FadeIn delay={600}>
            <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-6 hover:border-[#C95E2D]/50 dark:hover:border-[#E68A57]/50 transition-all h-full">
              <h4 className="text-xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-4">
                Qualités
              </h4>
              <ul className="space-y-2 text-[#2F221D] dark:text-[#D9CCBC]">
                <li>• Curiosité intellectuelle</li>
                <li>• Écoute active</li>
                <li>• Rigueur</li>
                <li>• Fiabilité</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECTION TOUS LES PROJETS */}
      <section id="projets" className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up scroll-mt-20">
        <FadeIn>
          <h3 className="text-3xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-8">
            Tous les Projets
          </h3>
        </FadeIn>

        {/* Projets Personnels */}
        <FadeIn delay={100}>
          <div className="mb-12">
          <h4 className="text-xl font-semibold text-[#C95E2D] dark:text-[#E68A57] mb-4">Projets Personnels</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="SecureVault"
              description="Application de partage sécurisé de secrets avec chiffrement AES-256 côté client et autodestruction après lecture unique."
              technologies={["React", "TypeScript", "AES-256", "MongoDB"]}
              accentColor="orange"
              iconComponent={<LockIcon color="#C95E2D" />}
              link="https://secure-vault-client-seven.vercel.app/"
              isExternal={true}
            />

            <ProjectCard
              title="Contrôleur Guitar Hero Custom"
              description="Développement d'un contrôleur USB HID pour Clone Hero avec Raspberry Pi Pico. Driver custom en CircuitPython avec latence <2ms et polling 1000Hz."
              technologies={["USB HID", "CircuitPython", "Raspberry Pi Pico"]}
              accentColor="orange"
              iconComponent={<GuitarIcon color="#C95E2D" />}
              link="/guitar-hero"
              isExternal={false}
            />
          </div>
        </div>
        </FadeIn>

        {/* Projets Académiques */}
        <FadeIn delay={200}>
          <div>
          <h4 className="text-xl font-semibold text-[#C95E2D] dark:text-[#E68A57] mb-4">Projets Académiques</h4>
          <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-6 hover:border-[#C95E2D]/30 dark:hover:border-[#E68A57]/30 hover:bg-[#F2DDD0] dark:hover:bg-[#3D2D27]/70 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-[#2F221D] dark:text-[#D9CCBC]">Application Cinéma</h4>
              <span className="px-2 py-1 rounded bg-[#F2DDD0] dark:bg-[#5A4A40] text-[#2F221D] dark:text-[#D9CCBC] text-xs font-semibold">ÉTS</span>
            </div>
            <p className="text-[#2F221D] dark:text-[#D9CCBC] mb-4 leading-relaxed">
              Refonte complète du site web et de l&apos;application Android d&apos;un cinéma, inspiré de Cineplex. 
              Contribution à la conception de l&apos;interface web et à l&apos;intégration de l&apos;API avec l&apos;équipe mobile.
            </p>
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-[#6E5A50] dark:text-[#D9CCBC] mb-2">Technologies utilisées</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] text-xs border border-[#E68A57]/30">React</span>
                <span className="px-3 py-1 rounded-full bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] text-xs border border-[#E68A57]/30">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] text-xs border border-[#E68A57]/30">PostgreSQL</span>
                <span className="px-3 py-1 rounded-full bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] text-xs border border-[#E68A57]/30">REST API</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-6 hover:border-[#C95E2D]/30 dark:hover:border-[#E68A57]/30 hover:bg-[#F2DDD0] dark:hover:bg-[#3D2D27]/70 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-[#2F221D] dark:text-[#D9CCBC]">Plateforme Éducative</h4>
              <span className="px-2 py-1 rounded bg-[#F2DDD0] dark:bg-[#5A4A40] text-[#2F221D] dark:text-[#D9CCBC] text-xs font-semibold">ÉTS</span>
            </div>
            <p className="text-[#2F221D] dark:text-[#D9CCBC] mb-4 leading-relaxed">
              Développement d&apos;une plateforme type Moodle avec architecture MVC. 
              Conception des API REST, implémentation de tests unitaires automatisés avec Jest.
            </p>
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-[#6E5A50] dark:text-[#D9CCBC] mb-2">Technologies utilisées</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] text-xs border border-[#E68A57]/30">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] text-xs border border-[#E68A57]/30">TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] text-xs border border-[#E68A57]/30">Express</span>
                <span className="px-3 py-1 rounded-full bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] text-xs border border-[#E68A57]/30">Pug</span>
                <span className="px-3 py-1 rounded-full bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] text-xs border border-[#E68A57]/30">Jest</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        </FadeIn>
      </section>

      {/* SECTION FORMATION */}
      <section id="formation" className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up scroll-mt-20">
        <FadeIn>
          <h3 className="text-3xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-8">
            Formation
          </h3>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="space-y-6">
          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-6 hover:border-[#C95E2D]/30 dark:hover:border-[#E68A57]/30 hover:bg-[#F2DDD0] dark:hover:bg-[#3D2D27]/70 transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h4 className="text-2xl font-bold text-[#C95E2D] dark:text-[#E68A57]">Baccalauréat en Génie des Technologies de l&apos;Information</h4>
                  <p className="text-[#2F221D] dark:text-[#D9CCBC] font-medium text-lg mt-2">École de technologie supérieure (ÉTS), Montréal</p>
              </div>
              <span className="text-[#6E5A50] dark:text-[#D9CCBC] font-medium mt-2 md:mt-0">2023 — 2027 (en cours)</span>
            </div>
            <div className="mt-4">
              <p className="text-[#2F221D] dark:text-[#D9CCBC] mb-3">Spécialisation en développement logiciel, cybersécurité et analyse de données</p>
              <h5 className="text-sm font-semibold text-[#6E5A50] dark:text-[#D9CCBC] uppercase tracking-wide mb-2">Cours suivis</h5>
              <ul className="grid md:grid-cols-2 gap-2 text-[#2F221D] dark:text-[#D9CCBC]">
                <li>• INF111 - Programmation orientée-objet</li>
                <li>• GTI100 - Programmation et robotique en génie des TI</li>
                <li>• LOG121 - Conception orientée objet</li>
                <li>• LOG210 - Analyse et conception de logiciels</li>
                <li>• GTI210 - Introduction au génie des TI</li>
                <li>• GTI311 - Traitement des signaux audiovisuels</li>
                <li>• TCH055 - Bases de données</li>
                   <li>• TCH056 - Programmation Web</li>
                <li>• TCH057 - Applications mobiles et expérience usager</li>
                <li>• TCH099 - Projet intégrateur en informatique</li>
                <li>• MAT472 - Algèbre linéaire et géométrie de l&apos;espace</li>
                <li>• MAT265 - Équations différentielles</li>
              </ul>
            </div>
          </div>
        </div>
        </FadeIn>
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up scroll-mt-20">
        <FadeIn>
          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40] rounded-xl p-10 text-center hover:border-[#C95E2D]/30 dark:hover:border-[#E68A57]/30 hover:bg-[#F2DDD0] dark:hover:bg-[#3D2D27]/70 transition-all">
          <h3 className="text-3xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-4">
            Me Contacter
          </h3>
          <p className="text-[#2F221D] dark:text-[#D9CCBC] text-lg mb-8 max-w-2xl mx-auto">
            Actuellement à la recherche d&apos;un stage pour l&apos;automne 2026 en développement logiciel, 
            analyse de données ou cybersécurité. Je suis ouvert aux opportunités.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/corantin-louchard-03b3142a2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-[#C95E2D] dark:border-[#E68A57] text-[#C95E2D] dark:text-[#E68A57] hover:bg-[#C95E2D] dark:hover:bg-[#E68A57] hover:text-[#FFF7F0] dark:hover:text-[#2F1F1A] transition-all font-bold"
            >
              LinkedIn
            </a>
          </div>
        </div>
        </FadeIn>
      </section>

      {/* FOOTER ENRICHI */}
      <footer className="max-w-screen-lg mx-auto px-6 py-16 border-t border-[#E7C7B3] dark:border-[#5A4A40] mt-12">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Colonne 1 - À propos */}
            <div>
              <h4 className="text-lg font-bold text-[#C95E2D] dark:text-[#E68A57] mb-4">Corantin Louchard</h4>
              <p className="text-[#2F221D] dark:text-[#D9CCBC] text-sm leading-relaxed mb-4 max-w-60">
                Étudiant en Génie TI à l&apos;ÉTS Montréal, passionné par le développement web sécurisé et les systèmes embarqués.
              </p>
              <p className="text-[#6E5A50] dark:text-[#D9CCBC] text-xs">
                Dernière mise à jour : Février 2026
              </p>
            </div>

            {/* Colonne 2 - Navigation rapide */}
            <div>
              <h4 className="text-lg font-bold text-[#C95E2D] dark:text-[#E68A57] mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#projets-vedette" className="text-[#2F221D] dark:text-[#D9CCBC] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-colors">
                    Projets en vedette
                  </a>
                </li>
                <li>
                  <a href="#competences" className="text-[#2F221D] dark:text-[#D9CCBC] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-colors">
                    Compétences
                  </a>
                </li>
                <li>
                  <a href="#projets" className="text-[#2F221D] dark:text-[#D9CCBC] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-colors">
                    Tous les projets
                  </a>
                </li>
                <li>
                  <a href="#formation" className="text-[#2F221D] dark:text-[#D9CCBC] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-colors">
                    Formation
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#2F221D] dark:text-[#D9CCBC] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Colonne 3 - Projets GitHub */}
            <div>
              <h4 className="text-lg font-bold text-[#C95E2D] dark:text-[#E68A57] mb-4">Projets</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://github.com/Corantinets/secure-vault" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F221D] dark:text-[#D9CCBC] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    SecureVault
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/Corantinets/portfolio-corantin" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F221D] dark:text-[#D9CCBC] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/Corantinets" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2F221D] dark:text-[#D9CCBC] hover:text-[#C95E2D] dark:hover:text-[#E68A57] transition-colors"
                  >
                    Voir tous les projets →
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Barre de séparation */}
          <div className="border-t border-[#E7C7B3]/50 dark:border-[#5A4A40]/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p className="text-[#2F221D] dark:text-[#6E5A50]">
                © 2026 Corantin Louchard. Tous droits réservés.
              </p>
              <div className="flex items-center gap-3 text-[#6E5A50] dark:text-[#D9CCBC]">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Next.js 15
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#E68A57] dark:text-[#F3B37A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  TypeScript
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#A94A20] dark:text-[#F5C895]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                  Tailwind CSS
                </span>
                <span>•</span>
                <span className="text-[#6E5A50] dark:text-[#D9CCBC]">
                  Vercel
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </footer>
    </main>
  );
}

