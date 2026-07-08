import { Link } from 'react-router-dom';

export default function SecondaryMethodology() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#F6F6F6] min-h-screen pt-[140px] relative overflow-hidden">
      
      {/* Fondo dinámico estilo "Red tecnológica" */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-linear-to-br from-[#2888DE]/5 to-transparent rounded-full mix-blend-multiply blur-3xl"></div>

      <div className="max-w-[1000px] mx-auto relative z-10 animate-fade-up">
        
        <Link to="/metodologia" className="inline-flex items-center gap-2 text-[#34373C]/60 font-bold hover:text-[#2888DE] px-4 py-2 rounded-full transition-colors text-[14px] mb-6">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Volver a Metodologías
        </Link>

        {/* Contenedor Hero Interior */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#ACAEB1]/20 flex flex-col md:flex-row mb-16">
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-linear-to-br from-white to-[#F6F6F6]">
            <span className="text-[#2888DE] font-bold tracking-widest uppercase text-[12px] mb-2 block">Preparación Universitaria</span>
            <h1 className="font-headline-lg text-[40px] md:text-[48px] font-extrabold text-[#34373C] mb-6 leading-tight">
              Nivel Secundaria
            </h1>
            <p className="text-[16px] text-[#34373C]/80 leading-relaxed font-medium">
              Preparamos a los estudiantes para los retos del mundo globalizado, desarrollando pensamiento crítico, liderazgo y un alto estándar de excelencia académica.
            </p>
          </div>
          <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-cover bg-center" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop')" }}>
          </div>
        </div>

        {/* Grid de Herramientas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#ACAEB1]/20 hover:shadow-lg hover:border-[#2888DE]/30 transition-all text-center group cursor-pointer">
            <div className="w-14 h-14 bg-[#F6F6F6] rounded-full mx-auto flex items-center justify-center mb-4 group-hover:bg-[#2888DE] group-hover:text-white transition-colors text-[#34373C]">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h4 className="font-bold text-[#34373C] mb-2">Visión de Futuro</h4>
            <p className="text-[14px] text-[#34373C]/70">Preparación intensiva para el éxito universitario y profesional.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#ACAEB1]/20 hover:shadow-lg hover:border-[#2888DE]/30 transition-all text-center group cursor-pointer">
            <div className="w-14 h-14 bg-[#F6F6F6] rounded-full mx-auto flex items-center justify-center mb-4 group-hover:bg-[#2888DE] group-hover:text-white transition-colors text-[#34373C]">
              <span className="material-symbols-outlined">code</span>
            </div>
            <h4 className="font-bold text-[#34373C] mb-2">Habilidades Tecnológicas</h4>
            <p className="text-[14px] text-[#34373C]/70">Dominio de plataformas modernas y herramientas digitales.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#ACAEB1]/20 hover:shadow-lg hover:border-[#2888DE]/30 transition-all text-center group cursor-pointer">
            <div className="w-14 h-14 bg-[#F6F6F6] rounded-full mx-auto flex items-center justify-center mb-4 group-hover:bg-[#2888DE] group-hover:text-white transition-colors text-[#34373C]">
              <span className="material-symbols-outlined">forum</span>
            </div>
            <h4 className="font-bold text-[#34373C] mb-2">Habilidades Blandas</h4>
            <p className="text-[14px] text-[#34373C]/70">Comunicación asertiva, debate y trabajo en equipo.</p>
          </div>
        </div>

      </div>
    </section>
  );
}