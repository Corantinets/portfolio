import { Lock, Guitar } from 'lucide-react';

// Icônes Lucide colorisées pour le design system sunset
export const LockIcon = ({ color = '#C95E2D', size = 24 }: { color?: string; size?: number }) => (
  <Lock size={size} color={color} strokeWidth={2.5} />
);

export const GuitarIcon = ({ color = '#C95E2D', size = 24 }: { color?: string; size?: number }) => (
  <Guitar size={size} color={color} strokeWidth={2.5} />
);
