import { Link } from 'react-router-dom';

export default function Methodology() {
  
  // Fondo usando tu color Neutral (#F6F6F6) para mantener limpieza
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#F6F6F6] min-h-[calc(100vh-80px)] overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto relative">
        
        {/* Elementos decorativos (burbujas) usando tu color Primary (#2888DE) con opacidad para darle vida sin saturar */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#2888DE]/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#2888DE]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Encabezado Principal */}
        <div className="text-center mb-16 relative z-10 animate-fade-up">
          <span className="font-label-md text-[14px] font-bold text-[#2888DE] tracking-widest uppercase mb-3 block bg-[#2888DE]/10 px-4 py-1 rounded-full">
            Nuestra Metodología
          </span>
          {/* Título principal usando tu color Secondary (#34373C) para fuerte contraste */}
          <h1 className="font-headline-lg text-[42px] md:text-[54px] font-extrabold text-[#34373C] mb-4 drop-shadow-sm">
            Innovación y Formación Cognitiva
          </h1>
        </div>

        {/* Sección: Texto Descriptivo + Imagen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 relative z-10 animate-fade-up">
          <div className="flex flex-col gap-6">
            <p className="font-body-md text-[18px] text-[#34373C]/90 leading-relaxed">
              Nuestra metodología se centra en potenciar la formación cognitiva de los estudiantes. Diseñamos nuestras clases con un <span className="font-bold text-[#2888DE]">enfoque innovador</span>, incorporando herramientas y técnicas de vanguardia.
            </p>
            
            {/* Caja de texto destacada con borde lateral Primary y fondo difuminado */}
            <div className="bg-linear-to-r from-[#2888DE]/10 to-transparent border-l-8 border-[#2888DE] p-6 rounded-r-2xl shadow-sm transform transition hover:translate-x-2">
              <p className="font-body-sm text-[16px] text-[#34373C] font-medium">
                Aunado a los dinámicos instrumentos tecnológicos dentro de nuestra plataforma <span className="font-extrabold text-[#2888DE]">Microsoft Teams</span>, posibilitamos que todos nuestros alumnos cuenten con las herramientas necesarias para su futuro.
              </p>
            </div>
          </div>
          
          {/* Imagen con bordes orgánicos asimétricos y sombra tintada con el color Primary */}
          <div className="h-[350px] md:h-[450px] bg-cover bg-center rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-3xl rounded-bl-3xl shadow-2xl shadow-[#2888DE]/20 transform transition-transform duration-500 hover:scale-[1.02]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop')" }}>
          </div>
        </div>

        {/* Sección de Niveles Educativos */}
        <div className="text-center mb-16 relative z-10 animate-fade-up">
          <h2 className="font-headline-lg text-[36px] font-extrabold text-[#34373C] mb-4">
            Niveles Educativos
          </h2>
          <p className="font-body-md text-[18px] text-[#34373C]/80 max-w-2xl mx-auto">
            Descubre cómo adaptamos nuestra enseñanza para cada etapa del desarrollo de nuestros estudiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          {/* Card Primaria */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-[#ACAEB1]/20 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#2888DE]/30 flex flex-col border-b-[6px] border-[#2888DE] group">
            <div className="h-72 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="p-10 grow flex flex-col relative bg-white z-10">
              <h3 className="font-headline-md text-[28px] font-extrabold text-[#2888DE] mb-4">Primaria</h3>
              <p className="font-body-md text-[16px] text-[#34373C]/80 mb-8 grow leading-relaxed">
                Fomentamos la curiosidad natural y el amor por el aprendizaje a través de metodologías activas y participativas.
              </p>
              {/* Botón Primary - Alegre (Píldora) */}
              <Link to="/metodologia/primaria" className="inline-flex items-center justify-center gap-2 bg-[#2888DE]/10 text-[#2888DE] font-bold text-[15px] px-6 py-3 rounded-full hover:bg-[#2888DE] hover:text-white transition-colors self-start shadow-sm">
                Conoce más
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card Secundaria */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-[#ACAEB1]/20 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#2888DE]/30 flex flex-col border-b-[6px] border-[#34373C] group" style={{ transitionDelay: '100ms' }}>
            <div className="h-72 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522661067900-ab8288d70c8d?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="p-10 grow flex flex-col relative bg-white z-10">
              <h3 className="font-headline-md text-[28px] font-extrabold text-[#34373C] mb-4">Secundaria</h3>
              <p className="font-body-md text-[16px] text-[#34373C]/80 mb-8 grow leading-relaxed">
                Preparamos a los estudiantes para los retos del mundo globalizado, desarrollando pensamiento crítico y liderazgo.
              </p>
              {/* Botón Secondary - Alegre (Píldora) */}
              <Link to="/metodologia/secundaria" className="inline-flex items-center justify-center gap-2 bg-[#34373C]/10 text-[#34373C] font-bold text-[15px] px-6 py-3 rounded-full hover:bg-[#34373C] hover:text-white transition-colors self-start shadow-sm">
                Conoce más
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}