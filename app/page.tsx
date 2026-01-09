import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-300 selection:text-slate-900">
      
      {/* SECTION HERO */}
      <section className="max-w-screen-md mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-slate-200 mb-6">
          Corantin Louchard
        </h1>
        <h2 className="text-xl text-teal-400 font-medium mb-4">
          Ingénieur en technologies de l'information
        </h2>
        <p className="text-slate-400 leading-relaxed mb-8 max-w-lg">
          Je suis un étudiant en 2ème année à l'École de technologie supérieure (ÉTS) à Montréal, interessé en développement backend et cybersécurité. 
          Passionné par la création de solutions sécurisées et efficaces, je cherche à contribuer à des projets innovants dans le domaine des technologies de l'information.
        </p>
        <div className="flex gap-4">
          <a 
            href="/cv-corantin.pdf" 
            target="_blank"
            className="px-6 py-3 rounded-md bg-teal-400 text-slate-900 font-bold hover:bg-teal-300 transition"
          >
            Voir mon CV
          </a>
          <a 
            href="https://github.com/CorantinETS" 
            target="_blank"
            className="px-6 py-3 rounded-md border border-slate-700 text-slate-300 hover:border-teal-400 hover:text-teal-400 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section className="max-w-screen-md mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-slate-200 mb-8 border-b border-slate-800 pb-2">
          Projets
        </h3>

        <div className="grid gap-8">
          
          {/* PROJET 1 : SecureVault (Vedette) */}
          <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition border border-transparent hover:border-slate-700">
            <div className="md:col-span-1 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">
              En cours
            </div>
            <div className="md:col-span-3">
              <h4 className="font-bold text-slate-200 group-hover:text-teal-400 transition">
                <a href="https://github.com/votre-username/secure-vault-portfolio" target="_blank">
                  SecureVault ↗
                </a>
              </h4>
              <p className="text-sm text-slate-400 mt-2 mb-4">
                Plateforme de partage de fichiers sécurisée avec chiffrement de bout en bout et autodestruction des données. 
                Focus sur la sécurité des données et l'architecture backend.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-300 text-xs font-medium">Node.js</li>
                <li className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-300 text-xs font-medium">PostgreSQL</li>
                <li className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-300 text-xs font-medium">Cryptography</li>
              </ul>
            </div>
          </div>

          {/* PROJET 2 : Moodle (Passé) */}
          <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition">
            <div className="md:col-span-1 text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">
              2025
            </div>
            <div className="md:col-span-3">
              <h4 className="font-bold text-slate-200 group-hover:text-teal-400 transition">
                Plateforme Éducative
              </h4>
              <p className="text-sm text-slate-400 mt-2 mb-4">
                Conception de l'architecture backend REST pour une plateforme type Moodle.
                Optimisation des requêtes SQL et implémentation de tests unitaires (Jest).
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-300 text-xs font-medium">TypeScript</li>
                <li className="px-3 py-1 rounded-full bg-teal-400/10 text-teal-300 text-xs font-medium">Express</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-screen-md mx-auto px-6 py-12 text-center text-slate-500 text-sm">
        <p>Conçu et développé par Corantin Louchard.</p>
        <p className="mt-2">Built with Next.js & Tailwind</p>
      </footer>
    </main>
  );
}
