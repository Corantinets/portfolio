import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  accentColor?: 'orange' | 'warm' | 'soft';
  link?: string;
  isExternal?: boolean;
  emoji?: string;
  iconComponent?: React.ReactNode;
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
  accentColor = 'orange',
  link,
  isExternal = false,
  emoji,
  iconComponent,
  date,
  image,
  features,
  buttons,
  isFeatured = false,
}: ProjectCardProps) {
  const colorClasses = {
    orange: {
      border: 'border-[#C95E2D]/30 dark:border-[#E68A57]/30',
      borderHover: 'hover:border-[#C95E2D]/50 dark:hover:border-[#E68A57]/50',
      gradient: 'from-[#C95E2D]/10 dark:from-[#E68A57]/10',
      gradientHover: 'hover:from-[#C95E2D]/20 dark:hover:from-[#E68A57]/20',
      text: 'text-[#C95E2D] dark:text-[#E68A57]',
      textHover: 'group-hover:text-[#A94A20] dark:group-hover:text-[#F5C895]',
      tech: 'bg-[#E68A57]/20 dark:bg-[#E68A57]/10 text-[#A94A20] dark:text-[#F5C895] border-[#E68A57]/30',
      button: 'bg-[#C95E2D] dark:bg-[#E68A57] hover:bg-[#A94A20] dark:hover:bg-[#F5C895] text-[#FFF7F0] dark:text-[#2F1F1A]',
      buttonSecondary: 'hover:border-[#C95E2D] dark:hover:border-[#E68A57] hover:text-[#C95E2D] dark:hover:text-[#E68A57]',
    },
    warm: {
      border: 'border-[#F3B37A]/30 dark:border-[#F5D4A0]/30',
      borderHover: 'hover:border-[#F3B37A]/50 dark:hover:border-[#F5D4A0]/50',
      gradient: 'from-[#F3B37A]/10 dark:from-[#F5D4A0]/10',
      gradientHover: 'hover:from-[#F3B37A]/20 dark:hover:from-[#F5D4A0]/20',
      text: 'text-[#C95E2D] dark:text-[#F5D4A0]',
      textHover: 'group-hover:text-[#A94A20] dark:group-hover:text-[#FFF7F0]',
      tech: 'bg-[#F3B37A]/20 dark:bg-[#F5D4A0]/10 text-[#A94A20] dark:text-[#FFF7F0] border-[#F3B37A]/30',
      button: 'bg-[#F3B37A] dark:bg-[#F5D4A0] hover:bg-[#E68A57] dark:hover:bg-[#FFF7F0] text-[#2F221D] dark:text-[#2F1F1A]',
      buttonSecondary: 'hover:border-[#F3B37A] dark:hover:border-[#F5D4A0] hover:text-[#F3B37A] dark:hover:text-[#F5D4A0]',
    },
    soft: {
      border: 'border-[#E68A57]/30 dark:border-[#F5C895]/30',
      borderHover: 'hover:border-[#E68A57]/50 dark:hover:border-[#F5C895]/50',
      gradient: 'from-[#E68A57]/10 dark:from-[#F5C895]/10',
      gradientHover: 'hover:from-[#E68A57]/20 dark:hover:from-[#F5C895]/20',
      text: 'text-[#C95E2D] dark:text-[#F5C895]',
      textHover: 'group-hover:text-[#A94A20] dark:group-hover:text-[#FFF7F0]',
      tech: 'bg-[#E68A57]/20 dark:bg-[#F5C895]/10 text-[#A94A20] dark:text-[#FFF7F0] border-[#E68A57]/30',
      button: 'bg-[#E68A57] dark:bg-[#F5C895] hover:bg-[#C95E2D] dark:hover:bg-[#FFF7F0] text-[#FFF7F0] dark:text-[#2F1F1A]',
      buttonSecondary: 'hover:border-[#E68A57] dark:hover:border-[#F5C895] hover:text-[#E68A57] dark:hover:text-[#F5C895]',
    },
  };

  const colors = colorClasses[accentColor];

  // Carte featured (pour le carrousel)
  if (isFeatured) {
    return (
      <div className={`bg-gradient-to-br from-[#FFF7F0] to-[#F8EADF] dark:from-[#3D2D27] dark:to-[#2F1F1A] border ${colors.border} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}>
        {/* Image */}
        {image && (
          <a 
            href={link || '#'}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="relative h-64 md:h-80 overflow-hidden bg-[#2F221D] group block"
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
          {/* Date */}
          {(date) && (
            <div className="flex items-center gap-3 mb-4">
              {date && <span className="text-[#6E5A50] dark:text-[#D9CCBC] text-sm">{date}</span>}
            </div>
          )}

          {/* Titre */}
          <h4 className={`text-3xl font-bold ${colors.text} mb-4 flex items-center gap-2`}>
            {title} 
            {iconComponent ? <span className="inline-block">{iconComponent}</span> : emoji && <span>{emoji}</span>}
          </h4>

          {/* Description */}
          <p className="text-[#2F221D] dark:text-[#D9CCBC] text-lg leading-relaxed mb-6">
            {description}
          </p>

          {/* Features */}
          {features && features.length > 0 && (
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-[#6E5A50] dark:text-[#D9CCBC] uppercase tracking-wide mb-3">
                Fonctionnalités Clés
              </h5>
              <ul className="space-y-2 text-[#2F221D] dark:text-[#D9CCBC]">
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
            <h5 className="text-sm font-semibold text-[#6E5A50] dark:text-[#D9CCBC] uppercase tracking-wide mb-3">
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
                      ? `px-6 py-3 rounded-lg ${colors.button} font-bold transition-all`
                      : `px-6 py-3 rounded-lg border-2 border-[#E7C7B3] dark:border-[#5A4A40] text-[#2F221D] dark:text-[#D9CCBC] ${colors.buttonSecondary} transition-all`
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
      className={`bg-gradient-to-br ${colors.gradient} to-[#F8EADF]/50 dark:to-[#3D2D27]/50 border ${colors.border} rounded-xl p-6 ${
        link ? `${colors.borderHover} ${colors.gradientHover} transition-all group cursor-pointer` : ''
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h5 className={`text-xl font-bold text-[#2F221D] dark:text-[#FFF7F0] ${link ? colors.textHover : ''} transition-colors flex items-center gap-2`}>
          {title} 
          {iconComponent ? <span className="inline-block">{iconComponent}</span> : emoji && <span>{emoji}</span>}
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
      <p className="text-[#2F221D] dark:text-[#D9CCBC] mb-4 leading-relaxed">{description}</p>
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
