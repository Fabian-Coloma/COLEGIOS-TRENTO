import { Link } from 'react-router-dom';

export default function PrimaryMethodology() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#F6F6F6] min-h-screen pt-[140px] relative overflow-hidden">
      
      {/* Elementos divertidos de fondo */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-40 right-20 w-60 h-60 bg-[#2888DE]/15 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-[1000px] mx-auto relative z-10 animate-fade-up">
        
        <Link to="/metodologia" className="inline-flex items-center gap-2 text-[#2888DE] font-bold hover:bg-[#2888DE]/10 px-4 py-2 rounded-full transition-colors text-[14px] mb-8">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Volver a Metodologías
        </Link>

        {/* Encabezado Alegre */}
        <div className="text-center mb-12">
          <h1 className="font-headline-lg text-[48px] md:text-[56px] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#2888DE] to-cyan-400 mb-4 drop-shadow-sm">
            Nivel Primaria
          </h1>
          <p className="text-[18px] md:text-[20px] text-[#34373C]/80 max-w-2xl mx-auto font-medium">
            Despertamos la curiosidad natural y el amor por aprender en un entorno seguro, activo y lleno de color.
          </p>
        </div>

        {/* Imagen Principal tipo "Burbuja" */}
        <div className="w-full h-[350px] md:h-[450px] bg-cover bg-center rounded-[3rem] rounded-tr-[6rem] rounded-bl-[6rem] mb-16 shadow-2xl shadow-[#2888DE]/20" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop')" }}>
        </div>

        {/* Puntos Clave en Tarjetas Flotantes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all border-t-[6px] border-yellow-400">
            <span className="material-symbols-outlined text-yellow-500 text-[40px] mb-4 block">extension</span>
            <h3 className="font-headline-md text-[22px] font-bold text-[#34373C] mb-3">Aprendizaje Lúdico</h3>
            <p className="text-[#34373C]/70 leading-relaxed">Fomentamos la curiosidad a través de metodologías activas y participativas donde el juego y la experimentación son la base del conocimiento.</p>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all border-t-[6px] border-cyan-400 mt-0 md:mt-12">
            <span className="material-symbols-outlined text-cyan-500 text-[40px] mb-4 block">psychology</span>
            <h3 className="font-headline-md text-[22px] font-bold text-[#34373C] mb-3">Desarrollo Emocional</h3>
            <p className="text-[#34373C]/70 leading-relaxed">Nuestro enfoque combina la excelencia académica con el crecimiento emocional, formando niños seguros de sí mismos y empáticos.</p>
          </div>
        </div>

      </div>
    </section>
  );
}