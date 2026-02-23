import { ButtonHTMLAttributes, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  block?: boolean;
};

export function Button({ children, variant = 'primary', block, className = '', ...props }: Props) {
  const base = 'focus-ring min-h-12 rounded-xl px-5 py-3 text-base font-semibold transition';
  const variants = {
    primary: 'bg-accent text-white hover:bg-[#2f666d]',
    secondary: 'bg-accentSoft text-textMain hover:bg-[#c7e0e3]',
    ghost: 'bg-transparent text-textMain hover:bg-black/5',
    danger: 'bg-[#7a3d3d] text-white hover:bg-[#682f2f]'
  };
  return (
    <button className={`${base} ${variants[variant]} ${block ? 'w-full' : ''} ${className}`} {...props}>
      {children}
    </button>
  );
}
