import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant w-full pt-12 pb-8 px-margin-mobile md:px-margin-desktop">
      {/* Contenedor Principal con Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        
        {/* Columna 1: Nosotros */}
        <div className="flex flex-col gap-4">
          <h3 className="font-headline-md text-[20px] font-semibold text-trento-blue-dark">Colegios Trento</h3>
          <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">
            Somos una comunidad educativa enfocada en la mejora continua, iluminando el camino de nuestros estudiantes hacia un futuro exitoso en un mundo globalizado.
          </p>
        </div>

        {/* Columna 2: Sedes y Contacto */}
        <div className="flex flex-col gap-4">
          <h3 className="font-headline-md text-[20px] font-semibold text-trento-blue-dark">Nuestras Sedes</h3>
          <ul className="flex flex-col gap-3 font-body-md text-[14px] text-on-surface-variant">
            <li>
              <strong className="text-primary">San Miguel:</strong> Prolongación Ayacucho 334 <br/>
              📞 (01) 680 2575 / 📱 955 510 693
            </li>
            <li>
              <strong className="text-primary">Colonial:</strong> Av. Colonial 2443 - Cercado <br/>
              📞 (01) 680 2573 / 📱 955 063 273
            </li>
            <li>
              <strong className="text-primary">Pro:</strong> Av. Alfredo Mendiola 8150 <br/>
              📞 (01) 680 2574 / 📱 955 163 390
            </li>
          </ul>
        </div>

        {/* Columna 3: Enlaces Rápidos */}
        <div className="flex flex-col gap-4">
          <h3 className="font-headline-md text-[20px] font-semibold text-trento-blue-dark">Enlaces de Interés</h3>
          <nav className="flex flex-col gap-2">
            <Link to="/admision" className="font-body-md text-[16px] text-on-surface-variant hover:text-primary transition-colors">Admisión 2026</Link>
            <a href="https://colegiostrento.cubicol.pe/principal/login" target="_blank" rel="noreferrer" className="font-body-md text-[16px] text-on-surface-variant hover:text-primary transition-colors">Trento Cubicol (Intranet)</a>
            <Link to="/documentacion" className="font-body-md text-[16px] text-on-surface-variant hover:text-primary transition-colors">Documentación</Link>
            <Link to="/nosotros" className="font-body-md text-[16px] text-on-surface-variant hover:text-primary transition-colors">Políticas de Privacidad</Link>
          </nav>
        </div>

      </div>

      {/* Línea divisoria y Copyright */}
      <div className="max-w-[1200px] mx-auto border-t border-outline-variant/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body-md text-[14px] text-on-surface-variant text-center md:text-left">
          © 2024 Desarrollado por TIC Sistemas - TRENTO. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}