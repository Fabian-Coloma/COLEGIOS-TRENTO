import { Link } from 'react-router-dom';
import logoTrento from '../assets/logo.png'; // <-- Agrega esta línea

export default function Navbar() {
  return (
    // Transformamos el header directamente en el contenedor fijo y eliminamos la barra azul
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#ACAEB1]/20 shadow-sm transition-all duration-300 font-body">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-3 md:py-4 max-w-[1200px] mx-auto">
        
{/* Logo funcionando como botón de inicio */}
<Link to="/" className="shrink-0 transition-transform hover:scale-105 cursor-pointer">
  <img 
    alt="Colegios Trento Logo" 
    className="h-10 md:h-12 w-auto" 
    src={logoTrento} /* <-- Cambia el src por la variable sin comillas */
  />
</Link>
        
        {/* Enlaces del Medio (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-label-md text-[14px] font-bold text-[#34373C] hover:text-[#2888DE] transition-colors">
            Inicio
          </Link>
          <Link to="/nosotros" className="font-label-md text-[14px] font-bold text-[#34373C] hover:text-[#2888DE] transition-colors">
            Nosotros
          </Link>
          
          {/* Dropdown Metodología */}
          <div className="relative group py-2">
            <Link to="/metodologia" className="font-label-md text-[14px] font-bold text-[#34373C] hover:text-[#2888DE] transition-colors flex items-center gap-1 cursor-pointer">
              Metodología
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
            </Link>
            
            {/* Menú Desplegable flotante */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="w-56 bg-white border border-[#ACAEB1]/20 rounded-2xl shadow-xl flex flex-col py-2 overflow-hidden mt-2">
                <Link to="/metodologia/primaria" className="px-5 py-3 text-[14px] font-bold text-[#34373C] hover:bg-[#2888DE]/10 hover:text-[#2888DE] transition-colors">
                  Primaria
                </Link>
                <Link to="/metodologia/secundaria" className="px-5 py-3 text-[14px] font-bold text-[#34373C] hover:bg-[#2888DE]/10 hover:text-[#2888DE] transition-colors">
                  Secundaria
                </Link>
              </div>
            </div>
          </div>
          
          <Link to="/sedes" className="font-label-md text-[14px] font-bold text-[#34373C] hover:text-[#2888DE] transition-colors">
            Sedes
          </Link>
        </nav>

        {/* Botón de Acción Principal (Desktop) */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/admision" className="inline-flex items-center justify-center bg-[#2888DE] text-white font-label-md text-[14px] font-bold px-7 py-2.5 rounded-full hover:bg-[#34373C] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Admisión 2026
          </Link>
        </div>
        
        {/* Ícono Menú Hamburguesa para Móviles */}
        <button className="md:hidden text-[#34373C] hover:text-[#2888DE] transition-colors">
          <span className="material-symbols-outlined text-[28px]">menu</span>
        </button>
        
      </div>
    </header>
  );
}