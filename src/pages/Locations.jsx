import { Link } from 'react-router-dom';

export default function Locations() {
  
  // Datos de las sedes para mapearlas fácilmente
  const sedes = [
    {
      id: 1,
      nombre: "Sede San Miguel",
      direccion: "Prolongación Ayacucho 334, San Miguel",
      telefonos: ["(01) 680 2575", "955 510 693"],
      imagen: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop", // Foto de fachada (Placeholder)
      mapaUrl: "https://maps.google.com/?q=Prolongacion+Ayacucho+334+San+Miguel+Lima"
    },
    {
      id: 2,
      nombre: "Sede Colonial",
      direccion: "Av. Colonial 2443, Cercado de Lima",
      telefonos: ["(01) 680 2573", "955 063 273"],
      imagen: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800&auto=format&fit=crop",
      mapaUrl: "https://maps.google.com/?q=Av.+Colonial+2443+Lima"
    },
    {
      id: 3,
      nombre: "Sede Pro",
      direccion: "Av. Alfredo Mendiola 8150, Los Olivos",
      telefonos: ["(01) 680 2574", "955 163 390"],
      // Reemplaza la línea de la imagen por esta:
      imagen: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", 
      mapaUrl: "https://goo.gl/maps/tu-enlace-real-aqui"
    }
  ];

  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#F6F6F6] min-h-screen pt-[140px] overflow-hidden relative">
      
      {/* Elementos decorativos (burbujas difuminadas) para mantener el estilo alegre */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#2888DE]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#2888DE]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="font-label-md text-[14px] font-bold text-[#2888DE] tracking-widest uppercase mb-3 bg-[#2888DE]/10 inline-block px-4 py-1 rounded-full">
            Nuestros Campus
          </span>
          <h1 className="font-headline-lg text-[42px] md:text-[54px] font-extrabold text-[#34373C] mb-4 drop-shadow-sm">
            Encuentra tu Sede Trento
          </h1>
          <p className="font-body-md text-[18px] text-[#34373C]/80 max-w-2xl mx-auto leading-relaxed">
            Contamos con tres locales estratégicamente ubicados, diseñados con infraestructura moderna y espacios seguros para el desarrollo integral de nuestros estudiantes.
          </p>
        </div>

        {/* Cuadrícula de Sedes (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {sedes.map((sede) => (
            <div key={sede.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-[#ACAEB1]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2888DE]/20 flex flex-col group border-b-[5px] border-[#2888DE]">
              
              {/* Imagen de la Sede con efecto Zoom */}
              <div className="h-56 overflow-hidden relative">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${sede.imagen}')` }}
                ></div>
                {/* Icono flotante sobre la imagen */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-[#2888DE] shadow-md">
                  <span className="material-symbols-outlined block">location_on</span>
                </div>
              </div>

              {/* Información de la Sede */}
              <div className="p-8 flex flex-col grow">
                <h2 className="font-headline-md text-[24px] font-extrabold text-[#34373C] mb-2">{sede.nombre}</h2>
                
                <div className="flex flex-col gap-3 mb-6 grow mt-4">
                  <div className="flex items-start gap-3 text-[#34373C]/80">
                    <span className="material-symbols-outlined text-[#2888DE] text-[20px] shrink-0 mt-0.5">map</span>
                    <p className="font-body-md text-[15px]">{sede.direccion}</p>
                  </div>
                  <div className="flex items-start gap-3 text-[#34373C]/80">
                    <span className="material-symbols-outlined text-[#2888DE] text-[20px] shrink-0 mt-0.5">call</span>
                    <p className="font-body-md text-[15px]">
                      {sede.telefonos[0]} <br/> {sede.telefonos[1]}
                    </p>
                  </div>
                </div>

                {/* Botón de Google Maps */}
                <a 
                  href={sede.mapaUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2888DE]/10 text-[#2888DE] font-bold text-[15px] px-6 py-3.5 rounded-full hover:bg-[#2888DE] hover:text-white transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">directions</span>
                  Ver en Google Maps
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Galería de Instalaciones */}
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-[#ACAEB1]/20 animate-fade-up">
          <div className="text-center mb-10">
            <h2 className="font-headline-md text-[32px] font-extrabold text-[#34373C] mb-2">Conoce Nuestras Instalaciones</h2>
            <p className="text-[#34373C]/70">Espacios diseñados para potenciar el aprendizaje.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-40 md:h-48 rounded-2xl bg-cover bg-center shadow-sm hover:opacity-90 transition-opacity cursor-pointer" style={{backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop')"}}></div>
            <div className="h-40 md:h-48 rounded-2xl bg-cover bg-center shadow-sm hover:opacity-90 transition-opacity cursor-pointer" style={{backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=400&auto=format&fit=crop')"}}></div>
            <div className="h-40 md:h-48 rounded-2xl bg-cover bg-center shadow-sm hover:opacity-90 transition-opacity cursor-pointer" style={{backgroundImage: "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=400&auto=format&fit=crop')"}}></div>
            <div className="h-40 md:h-48 rounded-2xl bg-cover bg-center shadow-sm hover:opacity-90 transition-opacity cursor-pointer" style={{backgroundImage: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=400&auto=format&fit=crop')"}}></div>
          </div>
        </div>

      </div>
    </section>
  );
}