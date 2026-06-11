"use client";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function GuitarHeroProject() {
  return (
    <main className="min-h-screen bg-[#FFF7F0] dark:bg-[#2F1F1A] text-[#2F221D] dark:text-[#FFF7F0] font-sans selection:bg-[#F3B37A] selection:text-[#2F221D]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF7F0]/95 dark:bg-[#2F1F1A]/95 backdrop-blur-xl border-b border-[#E7C7B3] dark:border-[#5A4A40]/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#C95E2D] dark:text-[#E68A57] hover:text-[#A94A20] dark:hover:text-[#F5C895] transition-all duration-300 font-medium hover:gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au portfolio
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <FadeIn>
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="mb-6">
          <span className="px-4 py-2 rounded-full bg-[#E68A57]/15 text-[#C95E2D] dark:text-[#F3B37A] text-sm font-semibold uppercase tracking-wider border border-[#E68A57]/30 dark:border-[#E68A57]/20">
            Projet Personnel
          </span>
        </div>

        <h1 className="text-6xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-6">
          Contrôleur Guitar Hero USB Custom
        </h1>

        <p className="text-xl text-[#6E5A50] dark:text-[#D9CCBC] leading-relaxed mb-6">
          Développement d&apos;un contrôleur de jeu USB personnalisé pour Clone Hero utilisant
          un Raspberry Pi Pico. Driver USB HID Gamepad en CircuitPython avec latence ultra-faible.
        </p>

        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2 text-[#6E5A50] dark:text-[#D9CCBC] bg-[#F8EADF] dark:bg-[#3D2D27]/50 px-4 py-2 rounded-lg border border-[#E7C7B3] dark:border-[#5A4A40]/50">
            <svg className="w-5 h-5 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">2026</span>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Image principale - Résultat final */}
      <FadeIn delay={100}>
      <section className="max-w-7xl mx-auto px-2 mb-20">
        <div className="relative rounded-2xl overflow-hidden bg-[#2F1F1A] dark:bg-[#1A130D] border border-[#E7C7B3] dark:border-[#5A4A40]/50 shadow-lg h-[700px]">
          <div className="h-full w-full flex items-center justify-center p-1 relative">
            <Image
              src="/guitar-final.jpg"
              alt="Contrôleur Guitar Hero terminé"
              width={1200}
              height={900}
              className="max-w-[95%] max-h-full object-contain drop-shadow-2xl rounded-lg"
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2F1F1A]/60 via-transparent to-[#2F1F1A]/30 pointer-events-none"></div>
          </div>

          {/* Info bar ultra-compacte - semi-transparente */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2F1F1A]/90 to-transparent py-1.5 px-4 z-10 mb-4">
            <div className="text-center">
              <h3 className="text-base font-bold text-[#FFF7F0] mb-1">
                Contrôleur USB Professionnel
              </h3>
              <div className="flex items-center justify-center gap-3 text-[#D9CCBC] text-[12px]">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#C95E2D]"></div>
                  <span>Latence &lt;2ms</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#E68A57]"></div>
                  <span>Polling 1000Hz</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-[#F3B37A]"></div>
                  <span>Compatible Clone Hero</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crédit modèle 3D */}
        <div className="mt-6 p-4 rounded-lg bg-[#F8EADF] dark:bg-[#3D2D27]/50 border border-[#E7C7B3] dark:border-[#5A4A40]/50 max-w-4xl mx-auto">
          <p className="text-[#2F221D] dark:text-[#D9CCBC] text-sm text-center">
            <span className="text-[#C95E2D] dark:text-[#E68A57] font-semibold">Modèle 3D et inspiration :</span>{' '}
            <a
              href="https://www.printables.com/model/227781-poly-clone-hero-controller"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C95E2D] dark:text-[#E68A57] hover:text-[#A94A20] dark:hover:text-[#F3B37A] underline transition-colors"
            >
              Poly Clone Hero Controller
            </a>
            {' '}par Josh Designs
          </p>
        </div>
      </section>
      </FadeIn>

      {/* Spécifications Techniques */}
      <FadeIn delay={200}>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-10 text-center">Spécifications Techniques</h2>

        {/* Personnalisation */}
        <div className="mb-6 bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-xl p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C95E2D]/10 dark:bg-[#C95E2D]/20 flex items-center justify-center border border-[#C95E2D]/20">
              <svg className="w-5 h-5 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-2">
                Personnalisation : Raspberry Pi Pico + USB HID Custom
              </h3>
              <p className="text-[#6E5A50] dark:text-[#D9CCBC] text-sm leading-relaxed">
                Contrairement au design original de Printables (USB encoder / Arduino Pro Micro), j&apos;ai développé une <span className="text-[#C95E2D] dark:text-[#E68A57] font-semibold">implémentation complète du protocole USB HID</span> sur <span className="text-[#C95E2D] dark:text-[#E68A57] font-semibold">Raspberry Pi Pico</span>. Cela offre un contrôle total de la communication USB, une latence minimale (&lt;2ms), et un polling rate de 1000 Hz pour le jeu compétitif.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-6 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              Hardware
            </h3>
            <ul className="space-y-4 text-[#6E5A50] dark:text-[#D9CCBC]">
              <li className="flex justify-between items-center pb-3 border-b border-[#E7C7B3] dark:border-[#5A4A40]/50">
                <span className="text-[#6E5A50] dark:text-[#A89080] font-medium">Microcontrôleur</span>
                <span className="font-semibold text-[#2F221D] dark:text-[#FFF7F0]">Raspberry Pi Pico (RP2040)</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-[#E7C7B3] dark:border-[#5A4A40]/50">
                <span className="text-[#6E5A50] dark:text-[#A89080] font-medium">Interface</span>
                <span className="font-semibold text-[#2F221D] dark:text-[#FFF7F0]">USB 2.0 Full Speed (USB-C)</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-[#E7C7B3] dark:border-[#5A4A40]/50">
                <span className="text-[#6E5A50] dark:text-[#A89080] font-medium">Entrées</span>
                <span className="font-semibold text-[#2F221D] dark:text-[#FFF7F0]">9 switches mécaniques</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-[#6E5A50] dark:text-[#A89080] font-medium">Alimentation</span>
                <span className="font-semibold text-[#2F221D] dark:text-[#FFF7F0]">5V via USB (VBUS)</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-6 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Firmware
            </h3>
            <ul className="space-y-4 text-[#6E5A50] dark:text-[#D9CCBC]">
              <li className="flex justify-between items-center pb-3 border-b border-[#E7C7B3] dark:border-[#5A4A40]/50">
                <span className="text-[#6E5A50] dark:text-[#A89080] font-medium">Plateforme</span>
                <span className="font-semibold text-[#2F221D] dark:text-[#FFF7F0]">CircuitPython 10.0.3</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-[#E7C7B3] dark:border-[#5A4A40]/50">
                <span className="text-[#6E5A50] dark:text-[#A89080] font-medium">Protocole</span>
                <span className="font-semibold text-[#2F221D] dark:text-[#FFF7F0]">USB HID Gamepad</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-[#E7C7B3] dark:border-[#5A4A40]/50">
                <span className="text-[#6E5A50] dark:text-[#A89080] font-medium">Polling</span>
                <span className="font-semibold text-[#2F221D] dark:text-[#FFF7F0]">1000 Hz (1ms)</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-[#6E5A50] dark:text-[#A89080] font-medium">Latence</span>
                <span className="font-semibold text-[#2F221D] dark:text-[#FFF7F0]">&lt;2ms</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Photos du processus */}
      <FadeIn delay={300}>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-4">Processus de Fabrication</h2>
          <p className="text-[#6E5A50] dark:text-[#A89080] text-lg">Du prototype au produit final</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Test des switches */}
          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-80 bg-[#F2DDD0] dark:bg-[#2F1F1A] p-6 flex items-center justify-center">
              <Image
                src="/guitar-test.jpg"
                alt="Test des switches"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain drop-shadow-lg rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-[#C95E2D] text-[#FFF7F0] px-3 py-1 rounded-full text-xs font-bold">
                ÉTAPE 1
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-3">
                Test des Switches
              </h3>
              <p className="text-[#6E5A50] dark:text-[#D9CCBC] leading-relaxed">
                Validation complète du circuit électrique et des entrées GPIO du Raspberry Pi Pico
              </p>
            </div>
          </div>

          {/* Soudage */}
          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-80 bg-[#F2DDD0] dark:bg-[#2F1F1A] p-6 flex items-center justify-center">
              <Image
                src="/guitar-soudure.jpg"
                alt="Soudage des composants"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain drop-shadow-lg rounded-lg"
              />
              <div className="absolute top-4 right-4 bg-[#A94A20] text-[#FFF7F0] px-3 py-1 rounded-full text-xs font-bold">
                ÉTAPE 2
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-3">
                Soudage &amp; Assemblage
              </h3>
              <p className="text-[#6E5A50] dark:text-[#D9CCBC] leading-relaxed">
                Assemblage précis du circuit avec soudure à l&apos;étain des 9 switches mécaniques
              </p>
            </div>
          </div>
        </div>

        {/* Timeline visuelle */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#C95E2D]"></div>
            <span className="text-[#6E5A50] dark:text-[#A89080] text-sm font-medium">Test</span>
          </div>
          <div className="w-12 h-0.5 bg-[#E7C7B3] dark:bg-[#5A4A40]"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E68A57]"></div>
            <span className="text-[#6E5A50] dark:text-[#A89080] text-sm font-medium">Soudage</span>
          </div>
          <div className="w-12 h-0.5 bg-[#E7C7B3] dark:bg-[#5A4A40]"></div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F3B37A]"></div>
            <span className="text-[#6E5A50] dark:text-[#A89080] text-sm font-medium">Assemblage</span>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Architecture Logicielle */}
      <FadeIn delay={400}>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-10 text-center">Architecture Logicielle</h2>

        <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-10 shadow-sm">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#C95E2D] dark:text-[#E68A57] mb-3">Structure des fichiers</h3>
              <div className="bg-[#2F221D] dark:bg-[#1A130D] rounded-lg p-4 font-mono text-sm text-[#F3B37A]">
                <div>CIRCUITPY/</div>
                <div>├── boot.py           <span className="text-[#A89080]"># Configuration USB + descripteur HID</span></div>
                <div>├── code.py           <span className="text-[#A89080]"># Boucle principale de polling</span></div>
                <div>└── hid_gamepad.py    <span className="text-[#A89080]"># Classe Gamepad custom</span></div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#C95E2D] dark:text-[#E68A57] mb-3">Composants clés</h3>
              <ul className="space-y-3 text-[#6E5A50] dark:text-[#D9CCBC]">
                <li className="flex items-start gap-3">
                  <span className="text-[#C95E2D] dark:text-[#E68A57] font-mono text-sm mt-0.5">boot.py</span>
                  <span>Définit le descripteur HID USB, active le mode gamepad, gère le mode production/programmation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C95E2D] dark:text-[#E68A57] font-mono text-sm mt-0.5">hid_gamepad.py</span>
                  <span>Driver HID custom avec gestion des états et envoi de rapports USB</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C95E2D] dark:text-[#E68A57] font-mono text-sm mt-0.5">code.py</span>
                  <span>Boucle de polling à 1000 Hz avec détection temps réel des changements d&apos;état</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#C95E2D] dark:text-[#E68A57] mb-3">GPIO Mapping</h3>
              <div className="bg-[#2F221D] dark:bg-[#1A130D] rounded-lg p-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#5A4A40]">
                      <th className="text-left py-2 text-[#E68A57] font-semibold">GPIO</th>
                      <th className="text-left py-2 text-[#E68A57] font-semibold">Fonction</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#D9CCBC]">
                    <tr className="border-b border-[#3D2D27]">
                      <td className="py-2 font-mono">GP20, GP21, GP0, GP1, GP2</td>
                      <td className="py-2">Frettes de couleur (5 boutons)</td>
                    </tr>
                    <tr className="border-b border-[#3D2D27]">
                      <td className="py-2 font-mono">GP15, GP16</td>
                      <td className="py-2">Strum Up/Down</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-mono">GP6, GP7</td>
                      <td className="py-2">Select/Start</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Défis Techniques */}
      <FadeIn delay={500}>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-10 text-center">Défis Techniques Résolus</h2>

        <div className="space-y-6">
          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-3 flex items-center gap-2">
              <span className="text-[#C95E2D]">•</span>
              Absence de bibliothèque gamepad native
            </h3>
            <p className="text-[#6E5A50] dark:text-[#D9CCBC] mb-3">CircuitPython 10.x n&apos;inclut plus <code className="text-[#C95E2D] dark:text-[#E68A57] bg-[#F2DDD0] dark:bg-[#2F1F1A] px-2 py-1 rounded font-mono text-sm">adafruit_hid.gamepad</code></p>
            <p className="text-[#C95E2D] dark:text-[#E68A57] font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Solution : Création d&apos;un descripteur HID custom et classe Gamepad from scratch
            </p>
          </div>

          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-3 flex items-center gap-2">
              <span className="text-[#C95E2D]">•</span>
              Configuration USB HID
            </h3>
            <p className="text-[#6E5A50] dark:text-[#D9CCBC] mb-3">Nécessité d&apos;activer le gamepad dans boot.py avant l&apos;exécution</p>
            <p className="text-[#C95E2D] dark:text-[#E68A57] font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Solution : Implémentation d&apos;un descripteur USB conforme au standard HID 1.11
            </p>
          </div>

          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-3 flex items-center gap-2">
              <span className="text-[#C95E2D]">•</span>
              Mode production vs développement
            </h3>
            <p className="text-[#6E5A50] dark:text-[#D9CCBC] mb-3">Besoin de basculer entre mode programmation et mode gamepad</p>
            <p className="text-[#C95E2D] dark:text-[#E68A57] font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Solution : Bouton de sécurité GP7 pour accès conditionnel au stockage USB
            </p>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Code Source */}
      <FadeIn delay={600}>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-10 text-center">Code Source CircuitPython</h2>

        <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-8 shadow-sm">
          <p className="text-[#6E5A50] dark:text-[#D9CCBC] text-lg leading-relaxed text-center mb-6">
            Le firmware du contrôleur est développé en <span className="text-[#C95E2D] dark:text-[#E68A57] font-semibold">CircuitPython 10.0.3</span> et
            implémente le protocole <span className="text-[#C95E2D] dark:text-[#E68A57] font-semibold">USB HID Gamepad</span> depuis zéro.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a
              href="https://github.com/Corantinets/portfolio/blob/main/public/code/guitar-hero/code.py"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card bg-[#FFF7F0] dark:bg-[#2F1F1A] border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#C95E2D]/10 flex items-center justify-center border border-[#C95E2D]/20">
                  <svg className="w-6 h-6 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2F221D] dark:text-[#FFF7F0]">code.py</h3>
                  <p className="text-sm text-[#6E5A50] dark:text-[#A89080]">Fichier principal</p>
                </div>
              </div>
              <p className="text-[#6E5A50] dark:text-[#D9CCBC] text-sm leading-relaxed mb-4">
                Boucle principale et gestion des entrées GPIO
              </p>
              <div className="flex items-center gap-2 text-[#C95E2D] dark:text-[#E68A57] text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                Voir sur GitHub
              </div>
            </a>

            <a
              href="https://github.com/Corantinets/portfolio/blob/main/public/code/guitar-hero/boot.py"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card bg-[#FFF7F0] dark:bg-[#2F1F1A] border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#C95E2D]/10 flex items-center justify-center border border-[#C95E2D]/20">
                  <svg className="w-6 h-6 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2F221D] dark:text-[#FFF7F0]">boot.py</h3>
                  <p className="text-sm text-[#6E5A50] dark:text-[#A89080]">Configuration USB</p>
                </div>
              </div>
              <p className="text-[#6E5A50] dark:text-[#D9CCBC] text-sm leading-relaxed mb-4">
                Configuration HID et activation du mode Gamepad
              </p>
              <div className="flex items-center gap-2 text-[#C95E2D] dark:text-[#E68A57] text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                Voir sur GitHub
              </div>
            </a>

            <a
              href="https://github.com/Corantinets/portfolio/blob/main/public/code/guitar-hero/hid_gamepad.py"
              target="_blank"
              rel="noopener noreferrer"
              className="group/card bg-[#FFF7F0] dark:bg-[#2F1F1A] border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#C95E2D]/10 flex items-center justify-center border border-[#C95E2D]/20">
                  <svg className="w-6 h-6 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2F221D] dark:text-[#FFF7F0]">hid_gamepad.py</h3>
                  <p className="text-sm text-[#6E5A50] dark:text-[#A89080]">Classe HID</p>
                </div>
              </div>
              <p className="text-[#6E5A50] dark:text-[#D9CCBC] text-sm leading-relaxed mb-4">
                Implémentation complète du protocole USB HID
              </p>
              <div className="flex items-center gap-2 text-[#C95E2D] dark:text-[#E68A57] text-sm font-medium">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                Voir sur GitHub
              </div>
            </a>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Compétences */}
      <FadeIn delay={700}>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-10 text-center">Compétences Démontrées</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-6">Technique</h3>
            <ul className="space-y-3 text-[#6E5A50] dark:text-[#D9CCBC]">
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Programmation bas niveau (USB HID)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Gestion du timing temps réel</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Protocoles USB (descripteurs, endpoints)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Debugging hardware/software</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-6">Ingénierie</h3>
            <ul className="space-y-3 text-[#6E5A50] dark:text-[#D9CCBC]">
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Architecture logicielle modulaire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Documentation technique</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Optimisation de performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Gestion de projet end-to-end</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#C95E2D] dark:text-[#E68A57] mb-6">Technologies</h3>
            <ul className="space-y-3 text-[#6E5A50] dark:text-[#D9CCBC]">
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>CircuitPython / Python</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>USB HID Protocol</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Électronique numérique</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#C95E2D] dark:text-[#E68A57]">•</span>
                <span>Git / GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Résultats */}
      <FadeIn delay={800}>
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-[#2F221D] dark:text-[#FFF7F0] mb-10 text-center">Résultats</h2>

        <div className="bg-[#F8EADF] dark:bg-[#3D2D27]/60 border border-[#E7C7B3] dark:border-[#5A4A40]/50 rounded-2xl p-10 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 text-[#6E5A50] dark:text-[#D9CCBC]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C95E2D]/10 dark:bg-[#C95E2D]/20 flex items-center justify-center border border-[#C95E2D]/20">
                <svg className="w-5 h-5 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-lg text-[#2F221D] dark:text-[#FFF7F0]">Contrôleur fonctionnel détecté immédiatement par Windows</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C95E2D]/10 dark:bg-[#C95E2D]/20 flex items-center justify-center border border-[#C95E2D]/20">
                <svg className="w-5 h-5 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-lg text-[#2F221D] dark:text-[#FFF7F0]">Compatible Clone Hero sans configuration additionnelle</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C95E2D]/10 dark:bg-[#C95E2D]/20 flex items-center justify-center border border-[#C95E2D]/20">
                <svg className="w-5 h-5 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-lg text-[#2F221D] dark:text-[#FFF7F0]">Latence imperceptible pour jeu compétitif (&lt;5ms)</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C95E2D]/10 dark:bg-[#C95E2D]/20 flex items-center justify-center border border-[#C95E2D]/20">
                <svg className="w-5 h-5 text-[#C95E2D] dark:text-[#E68A57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-lg text-[#2F221D] dark:text-[#FFF7F0]">Code modulaire et maintenable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-16 border-t border-[#E7C7B3] dark:border-[#5A4A40]/50">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[#C95E2D] dark:text-[#E68A57] hover:text-[#A94A20] dark:hover:text-[#F3B37A] transition-all duration-300 text-lg font-semibold hover:gap-4 group"
          >
            <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}