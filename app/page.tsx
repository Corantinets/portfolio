import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-300 selection:text-slate-900">
      {/* SECTION HERO */}
      <section className="relative max-w-screen-lg mx-auto px-6 py-24 overflow-hidden">
        {/* Gradient animé en arrière-plan */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-screen-md animate-fade-in">
          <h1 className="text-5xl font-bold text-slate-100 mb-4">
            Corantin Louchard
          </h1>
          <h2 className="text-2xl text-teal-400 font-semibold mb-6">
            Ingénieur en Technologies de l'Information
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl">
            Étudiant en 2ème année à l'<strong>ÉTS Montréal</strong>, passionné par le développement logiciel et la cybersécurité. 
            Je crée des applications web sécurisées et performantes, avec un intérêt particulier pour l'architecture backend et le chiffrement.
          </p>
          <p className="text-teal-400 font-semibold text-lg mb-8">
            À la recherche d'un stage pour l'été 2026
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/cv-corantin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-teal-500 text-slate-900 font-bold hover:bg-teal-400 transition-all shadow-lg hover:shadow-teal-500/50"
            >
              Mon CV
            </a>
            <a
              href="https://github.com/CorantinETS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-slate-600 text-slate-200 hover:border-teal-400 hover:text-teal-400 transition-all"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/corantin-louchard-03b3142a2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-slate-600 text-slate-200 hover:border-teal-400 hover:text-teal-400 transition-all"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* SECTION PROJET EN VEDETTE */}
      <section className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up">
        <h3 className="text-3xl font-bold text-slate-100 mb-4">
          Projet en Vedette
        </h3>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-teal-500/30 rounded-xl overflow-hidden shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-1 transition-all duration-300">
          {/* Image d'aperçu avec effet parallaxe */}
          <a 
            href="https://secure-vault-client-seven.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-64 md:h-80 overflow-hidden bg-slate-950 group block"
            title="Cliquez pour voir SecureVault en ligne"
          >
            <img 
              src="/SecureVault.png" 
              alt="Interface de SecureVault"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500 cursor-pointer"
            />
          </a>

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
                🔴 En Production
              </span>
              <span className="text-slate-500 text-sm">Janvier 2026</span>
            </div>
            
            <h4 className="text-3xl font-bold text-teal-400 mb-4">
              SecureVault
            </h4>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Application web de <strong>partage sécurisé de secrets</strong> avec chiffrement AES-256 côté client. 
              Les données sont automatiquement détruites après une lecture unique, garantissant une confidentialité maximale.
            </p>

            <div className="mb-6">
              <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Fonctionnalités Clés</h5>
              <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span><strong>Chiffrement AES-256</strong> - Sécurité cryptographique côté client</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span><strong>Autodestruction</strong> - Lecture unique puis suppression automatique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span><strong>Expiration configurable</strong> - Durée de vie personnalisable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span><strong>Interface moderne</strong> - UX/UI optimisée et responsive</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Stack Technique</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-300 text-sm font-semibold border border-teal-500/30">React 18</span>
                  <span className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-300 text-sm font-semibold border border-teal-500/30">TypeScript</span>
                  <span className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-300 text-sm font-semibold border border-teal-500/30">Node.js</span>
                  <span className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-300 text-sm font-semibold border border-teal-500/30">Express</span>
                  <span className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-300 text-sm font-semibold border border-teal-500/30">MongoDB</span>
                  <span className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-300 text-sm font-semibold border border-teal-500/30">AES-256</span>
                  <span className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-300 text-sm font-semibold border border-teal-500/30">Vercel</span>
                  <span className="px-4 py-2 rounded-lg bg-teal-500/10 text-teal-300 text-sm font-semibold border border-teal-500/30">Tailwind CSS</span>
                </div>
              </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://secure-vault-client-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-teal-500 text-slate-900 font-bold hover:bg-teal-400 transition-all shadow-lg hover:shadow-teal-500/50"
              >
                Démo Live
              </a>
              <a
                href="https://github.com/Corantinets/secure-vault"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border-2 border-slate-600 text-slate-200 hover:border-teal-400 hover:text-teal-400 transition-all"
              >
                Code Source
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION COMPÉTENCES */}
      <section className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up">
        <h3 className="text-3xl font-bold text-slate-100 mb-8">
          Compétences Techniques
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
            <h4 className="text-xl font-bold text-teal-400 mb-4">Langages</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• JavaScript / TypeScript</li>
              <li>• Java</li>
              <li>• Python</li>
              <li>• PHP</li>
              <li>• HTML / CSS</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
            <h4 className="text-xl font-bold text-teal-400 mb-4">Développement Web</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• React / Next.js</li>
              <li>• Node.js / Express</li>
              <li>• Pug</li>
              <li>• REST APIs</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
            <h4 className="text-xl font-bold text-teal-400 mb-4">Bases de Données</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• PostgreSQL</li>
              <li>• MongoDB</li>
              <li>• SQL / PL/SQL</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
            <h4 className="text-xl font-bold text-teal-400 mb-4">Analyse & Conception</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• UML</li>
              <li>• Modélisation Orientée Objet</li>
              <li>• Architecture MVC</li>
              <li>• Documentation technique</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
            <h4 className="text-xl font-bold text-teal-400 mb-4">Outils & Tests</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Git / GitHub</li>
              <li>• Jest (tests unitaires)</li>
              <li>• Visual Studio / Eclipse</li>
              <li>• Wireshark / Packet Tracer</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-all">
            <h4 className="text-xl font-bold text-teal-400 mb-4">Qualités</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Curiosité intellectuelle</li>
              <li>• Écoute active</li>
              <li>• Rigueur</li>
              <li>• Fiabilité</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION PROJETS ACADÉMIQUES */}
      <section className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up">
        <h3 className="text-3xl font-bold text-slate-100 mb-8">
          Projets Académiques
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/30 hover:bg-slate-800/70 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-slate-200">Application Cinéma</h4>
              <span className="px-2 py-1 rounded bg-slate-700 text-slate-400 text-xs font-semibold">ÉTS</span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Refonte complète du site web et de l'application Android d'un cinéma, inspiré de Cineplex. 
              Contribution à la conception de l'interface web et à l'intégration de l'API avec l'équipe mobile.
            </p>
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-slate-400 mb-2">Technologies utilisées</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">React</span>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">PostgreSQL</span>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">REST API</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/30 hover:bg-slate-800/70 transition-all">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-slate-200">Plateforme Éducative</h4>
              <span className="px-2 py-1 rounded bg-slate-700 text-slate-400 text-xs font-semibold">ÉTS</span>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Développement d'une plateforme type Moodle avec architecture MVC. 
              Conception des API REST, implémentation de tests unitaires automatisés avec Jest.
            </p>
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-slate-400 mb-2">Technologies utilisées</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">TypeScript</span>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">Express</span>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">Pug</span>
                <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">Jest</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FORMATION */}
      <section className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up">
        <h3 className="text-3xl font-bold text-slate-100 mb-8">
          Formation
        </h3>
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800/70 to-slate-800/30 border border-slate-700 rounded-xl p-8 hover:border-teal-500/30 transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h4 className="text-2xl font-bold text-teal-400">Baccalauréat en Génie des Technologies de l'Information</h4>
                  <p className="text-slate-200 font-medium text-lg mt-2">École de technologie supérieure (ÉTS), Montréal</p>
              </div>
              <span className="text-slate-400 font-medium mt-2 md:mt-0">2023 — 2027 (en cours)</span>
            </div>
            <div className="mt-4">
              <p className="text-slate-300 mb-3">Spécialisation en développement logiciel, cybersécurité et analyse de données</p>
              <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-2">Cours suivis</h5>
              <ul className="grid md:grid-cols-2 gap-2 text-slate-300">
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
                <li>• MAT472 - Algèbre linéaire et géométrie de l'espace</li>
                <li>• MAT265 - Équations différentielles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="max-w-screen-lg mx-auto px-6 py-16 animate-slide-up">
        <div className="bg-gradient-to-br from-teal-500/10 to-slate-800/50 border border-teal-500/30 rounded-xl p-10 text-center hover:border-teal-500/50 transition-all duration-300">
          <h3 className="text-3xl font-bold text-slate-100 mb-4">
            Me Contacter
          </h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Actuellement à la recherche d'un stage pour l'été 2026 en développement logiciel, 
            analyse de données ou cybersécurité. Je suis ouvert aux opportunités et échanges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/corantin-louchard-03b3142a2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-slate-900 transition-all font-bold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-screen-lg mx-auto px-6 py-12 text-center text-slate-500 text-sm border-t border-slate-800 mt-12">
        <p className="mb-2">© 2026 Corantin Louchard. Tous droits réservés.</p>
        <p className="text-slate-600">Développé avec Next.js 15, TypeScript & Tailwind CSS • Déployé sur Vercel</p>
      </footer>
    </main>
  );
}
