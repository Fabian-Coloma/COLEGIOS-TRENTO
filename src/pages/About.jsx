import { Link } from 'react-router-dom';

export default function About() {
  const valores = [
    { icon: "star", title: "Excelencia", desc: "Buscamos siempre dar lo mejor en cada paso de nuestro aprendizaje." },
    { icon: "emoji_objects", title: "Innovación", desc: "Adaptamos la tecnología para resolver los retos del mañana." },
    { icon: "favorite", title: "Empatía", desc: "Formamos seres humanos sensibles y comprometidos con su entorno." },
    { icon: "groups", title: "Liderazgo", desc: "Inspiramos a nuestros alumnos a guiar con el ejemplo." }
  ];

  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-[#F6F6F6] min-h-screen pt-[140px] relative overflow-hidden">
      
      {/* Burbujas de fondo animadas */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2888DE]/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#2888DE]/15 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Sección Superior: Misión y Visión con diseño asimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 animate-fade-up">
          
          <div className="flex flex-col gap-6">
            <span className="font-label-md text-[14px] font-bold text-[#2888DE] tracking-widest uppercase block bg-[#2888DE]/10 self-start px-4 py-1 rounded-full">
              Nuestra Esencia
            </span>
            <h1 className="font-headline-lg text-[42px] md:text-[54px] font-extrabold text-[#34373C] leading-tight">
              Formando Líderes Íntegros
            </h1>
            
            <div className="bg-white p-8 rounded-[2rem] rounded-br-none shadow-xl shadow-[#ACAEB1]/20 border-l-[6px] border-[#2888DE] transform transition-transform hover:-translate-y-1">
              <h3 className="font-headline-md text-[20px] font-bold text-[#2888DE] mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">flag</span> Nuestra Misión
              </h3>
              <p className="font-body-md text-[16px] text-[#34373C]/80 leading-relaxed">
                Somos una comunidad educativa enfocada en la mejora continua, que busca que la educación impartida ilumine los caminos de nuestros estudiantes hacia un futuro exitoso, como ciudadanos y forjadores de una mejor sociedad.
              </p>
            </div>
          </div>

          {/* Imagen Orgánica */}
          <div className="relative h-[400px] md:h-[500px]">
            <div className="w-full h-full bg-cover bg-center rounded-[3rem] rounded-tl-[6rem] rounded-br-[6rem] shadow-2xl shadow-[#2888DE]/20 z-10 relative" 
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop')" }}>
            </div>
            {/* Círculo decorativo detrás de la imagen */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#2888DE]/20 rounded-full z-0"></div>
          </div>
        </div>

        {/* Sección Inferior: Valores Institucionales */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-headline-lg text-[36px] font-extrabold text-[#34373C] mb-4">Nuestros Valores</h2>
          <p className="text-[#34373C]/70 max-w-2xl mx-auto">Los pilares que sostienen nuestra educación y guían a nuestros estudiantes día a día.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" style={{ transitionDelay: '200ms' }}>
          {valores.map((valor, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg shadow-[#ACAEB1]/10 hover:shadow-2xl hover:shadow-[#2888DE]/20 hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#2888DE]/10 rounded-full flex items-center justify-center text-[#2888DE] mb-6 group-hover:scale-110 group-hover:bg-[#2888DE] group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-[32px]">{valor.icon}</span>
              </div>
              <h3 className="font-headline-md text-[20px] font-bold text-[#34373C] mb-3">{valor.title}</h3>
              <p className="font-body-md text-[14px] text-[#34373C]/70">{valor.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}