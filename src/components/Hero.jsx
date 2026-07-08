import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  // Carrusel enfocado en Anuncios
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
      tag: "Admisión 2026",
      title: "Matrícula Abierta",
      subtitle: "Únete a la familia Trento y asegura un futuro brillante para tus hijos."
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      tag: "Infraestructura",
      title: "Aulas de Innovación",
      subtitle: "Espacios equipados con tecnología de vanguardia para potenciar el aprendizaje."
    },
    {
      url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=1200&auto=format&fit=crop",
      tag: "Formación Integral",
      title: "Talleres Extracurriculares",
      subtitle: "Desarrollamos talentos artísticos y deportivos más allá de las aulas."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 5000); 
    
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden pt-[120px]">
      
      {/* Imágenes del carrusel */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <div 
            className="w-full h-full bg-cover bg-center absolute inset-0" 
            style={{ backgroundImage: `url('${slide.url}')` }}
          ></div>
          {/* Overlay elegante: Degradado negro/transparente sutil, adiós al azul */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
        </div>
      ))}

      {/* Contenido Centralizado */}
      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto animate-fade-up flex flex-col items-center justify-end h-full pb-20">
        
        {/* Etiqueta dinámica (Tag del anuncio) */}
        <span className="inline-block bg-white/20 backdrop-blur-md border border-white/40 text-white font-label-md text-[14px] font-bold tracking-widest uppercase px-6 py-1.5 rounded-full mb-4 shadow-sm">
          {slides[currentIndex].tag}
        </span>
        
        {/* Título y subtítulo dinámicos */}
        <h1 className="font-headline-lg text-[48px] md:text-[64px] font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
          {slides[currentIndex].title}
        </h1>
        
        <p className="font-body-md text-[18px] md:text-[20px] text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md font-medium">
          {slides[currentIndex].subtitle}
        </p>

        {/* Botones de acción general */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link to="/admision" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2888DE] font-label-md text-[15px] font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Más Información
          </Link>
          <Link to="/metodologia" className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-white/70 text-white font-label-md text-[15px] font-extrabold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
            Conoce Nuestra Metodología
          </Link>
        </div>

      </div>
    </section>
  );
}