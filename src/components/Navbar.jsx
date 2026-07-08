import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-surface/95 dark:bg-surface-dim/95 border-b border-outline-variant/30 shadow-sm fixed top-0 w-full z-50 transition-all duration-300 ease-in-out backdrop-blur-md">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-[1200px] mx-auto">
        
        <Link to="/" className="shrink-0">
          <img alt="Colegios Trento Logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida/AP1WRLti8AZ-HW7hY-cKICJ0qRlTzCk73Hlc-GoprO6r-Rv0cGR6BU9yF0Zd17HXFLbNMNpTtdfe9bLGVQCNXobE24KsMTTVtAxd3JfmsVB3zUHD1G_Reuhdot7Kb4IWd3b-qTUJRw5_mjTvm9Rk42eqdV6Ioi-6Qaur8PZ6aqGQEE9ytqKYDYnVLJzZeEya4zow0NDm6GToueBZcWIq9ay9tvNERP-qnjYWd1zWNYEXiQgg_YAhB9GFDpygCjJ3" />
        </Link>
        
        <nav className="hidden md:flex items-center gap-gutter">
          <Link to="/" className="font-label-md text-[14px] font-semibold text-primary border-b-[3px] border-primary pb-1">Inicio</Link>
          <Link to="/nosotros" className="font-label-md text-[14px] font-semibold text-on-surface-variant hover:text-primary transition-colors pb-1 border-b-[3px] border-transparent hover:border-outline-variant/30">Nosotros</Link>
          
          <div className="relative group">
            <Link to="/metodologia" className="font-label-md text-[14px] font-semibold text-on-surface-variant hover:text-primary transition-colors pb-1 border-b-[3px] border-transparent hover:border-outline-variant/30 flex items-center gap-1 cursor-pointer">
              Metodología
              <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">
                expand_more
              </span>
            </Link>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="w-56 bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-lg flex flex-col py-2 overflow-hidden">
                {/* Enlace actualizado a Primaria */}
                <Link 
                  to="/metodologia/primaria" 
                  className="px-5 py-3 text-[14px] font-body-md text-on-surface-variant hover:bg-trento-blue-light hover:text-primary transition-colors"
                >
                  Metodología Primaria
                </Link>
                {/* Enlace actualizado a Secundaria */}
                <Link 
                  to="/metodologia/secundaria" 
                  className="px-5 py-3 text-[14px] font-body-md text-on-surface-variant hover:bg-trento-blue-light hover:text-primary transition-colors"
                >
                  Metodología Secundaria
                </Link>
              </div>
            </div>
          </div>

          <Link to="/sedes" className="font-label-md text-[14px] font-semibold text-on-surface-variant hover:text-primary transition-colors pb-1 border-b-[3px] border-transparent hover:border-outline-variant/30">Sedes</Link>
        </nav>
        
        <div className="hidden md:block">
          <Link to="/" className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-[14px] font-semibold px-6 py-2 rounded-lg hover:bg-trento-blue-dark transition-colors shadow-sm">
            Matrícula Abierta
          </Link>
        </div>
        
      </div>
    </header>
  );
}