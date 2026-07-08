import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full py-8 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter">
      <div className="flex flex-col items-center md:items-start gap-4">
        <p className="font-body-md text-[16px] text-primary text-center md:text-left">
          © 2024 Colegios Trento. Más de 10 años enseñando con excelencia académica.
        </p>
      </div>
      <nav className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
        <Link to="/" className="font-body-md text-[16px] text-on-surface-variant hover:text-primary transition-colors">Admisiones</Link>
        <Link to="/" className="font-body-md text-[16px] text-on-surface-variant hover:text-primary transition-colors">Políticas de Privacidad</Link>
      </nav>
    </footer>
  );
}