import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  accentColor?: 'teal' | 'purple' | 'pink';
  link?: string;
  isExternal?: boolean;
  emoji?: string;
  badge?: string;
  date?: string;
  image?: string;
  features?: { icon: string; text: string }[];
  buttons?: { text: string; href: string; primary?: boolean; external?: boolean }[];
  isFeatured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  accentColor = 'teal',
  link,
  isExternal = false,
  emoji,
  badge,
  date,
  image,
  features,
  buttons,
  isFeatured = false,
}: ProjectCardProps) {
  const colorClasses = {
    teal: {
      border: 'border-teal-500/30',
      borderHover: 'hover:border-teal-500/50',
      gradient: 'from-teal-500/20',
      gradientHover: 'hover:from-teal-500/30',
      text: 'text-teal-600 dark:text-teal-400',
      textHover: 'group-hover:text-teal-500 dark:group-hover:text-teal-300',
      badge: 'bg-teal-200 dark:bg-teal-500/10 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-500/30',
      tech: 'bg-teal-200 dark:bg-teal-500/20 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-500/30',
      button: 'bg-teal-500 hover:bg-teal-400 shadow-teal-500/50',
      buttonSecondary: 'hover:border-teal-400 hover:text-teal-400',
    },
    purple: {
      border: 'border-purple-500/30',
      borderHover: 'hover:border-purple-500/50',
      gradient: 'from-purple-500/20',
      gradientHover: 'hover:from-purple-500/30',
      text: 'text-purple-600 dark:text-purple-400',
      textHover: 'group-hover:text-purple-500 dark:group-hover:text-purple-300',
      badge: 'bg-purple-200 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-500/30',
      tech: 'bg-purple-200 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-500/30',
      button: 'bg-purple-500 hover:bg-purple-400 shadow-purple-500/50',
      buttonSecondary: 'hover:border-purple-400 hover:text-purple-400',
    },
    pink: {
      border: 'border-pink-500/30',
      borderHover: 'hover:border-pink-500/50',
      gradient: 'from-pink-500/20',
      gradientHover: 'hover:from-pink-500/30',
      text: 'text-pink-600 dark:text-pink-400',
      textHover: 'group-hover:text-pink-500 dark:group-hover:text-pink-300',
      badge: 'bg-pink-200 dark:bg-pink-500/10 text-pink-800 dark:text-pink-300 border-pink-300 dark:border-pink-500/30',
      tech: 'bg-pink-200 dark:bg-pink-500/20 text-pink-800 dark:text-pink-300 border-pink-300 dark:border-pink-500/30',
      button: 'bg-pink-500 hover:bg-pink-400 shadow-pink-500/50',
      buttonSecondary: 'hover:border-pink-400 hover:text-pink-400',
    },
  };

  const colors = colorClasses[accentColor];

  // Carte featured (pour le carrousel)
  if (isFeatured) {
    return (
      <div className={`bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border ${colors.border} rounded-xl overflow-hidden shadow-2xl hover:shadow-${accentColor}-500/20 transition-all duration-300`}>
        {/* Image */}
        {image && (
          <a 
            href={link || '#'}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="relative h-64 md:h-80 overflow-hidden bg-slate-950 group block"
            title={`Cliquez pour voir ${title}`}
          >
            <Image 
              src={image} 
              alt={title}
              width={800}
              height={600}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500 cursor-pointer"
              priority={true}
            />
          </a>
        )}

        <div className="p-8">
          {/* Badge et date */}
          {(badge || date) && (
            <div className="flex items-center gap-3 mb-4">
              {badge && (
                <span className={`px-3 py-1 rounded-full ${colors.badge} text-xs font-bold uppercase tracking-wider`}>
                  {badge}
                </span>
              )}
              {date && <span className="text-slate-500 text-sm">{date}</span>}
            </div>
          )}

          {/* Titre */}
          <h4 className={`text-3xl font-bold ${colors.text} mb-4`}>
            {title} {emoji}
          </h4>

          {/* Description */}
          <p className="text-slate-900 dark:text-slate-300 text-lg leading-relaxed mb-6">
            {description}
          </p>

          {/* Features */}
          {features && features.length > 0 && (
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                Fonctionnalités Clés
              </h5>
              <ul className="space-y-2 text-slate-900 dark:text-slate-300">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className={colors.text}>{feature.icon}</span>
                    <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h5 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
              Stack Technique
            </h5>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-lg ${colors.tech} text-sm font-semibold border`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Boutons */}
          {buttons && buttons.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  className={
                    button.primary
                      ? `px-6 py-3 rounded-lg ${colors.button} text-slate-900 font-bold transition-all shadow-lg hover:shadow-${accentColor}-500/50`
                      : `px-6 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-200 ${colors.buttonSecondary} transition-all`
                  }
                >
                  {button.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Carte normale (pour la section projets)
  const Wrapper = link ? 'a' : 'div';
  const wrapperProps = link
    ? {
        href: link,
        target: isExternal ? "_blank" : undefined,
        rel: isExternal ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`bg-gradient-to-br ${colors.gradient} to-slate-100/50 dark:to-slate-800/50 border ${colors.border} rounded-xl p-6 ${
        link ? `${colors.borderHover} ${colors.gradientHover} transition-all group cursor-pointer` : ''
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h5 className={`text-xl font-bold text-slate-900 dark:text-slate-100 ${link ? colors.textHover : ''} transition-colors`}>
          {title} {emoji}
        </h5>
        {link && (
          <svg
            className={`w-5 h-5 ${colors.text} ${link ? 'group-hover:translate-x-1' : ''} transition-transform`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </div>
      <p className="text-slate-900 dark:text-slate-300 mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full ${colors.tech} text-xs border`}
          >
            {tech}
          </span>
        ))}
      </div>
    </Wrapper>
  );
}
