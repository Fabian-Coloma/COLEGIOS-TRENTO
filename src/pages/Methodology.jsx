import { Link } from 'react-router-dom';

export default function Methodology() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low min-h-[calc(100vh-80px)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <span className="font-label-md text-[14px] font-semibold text-primary tracking-wider uppercase mb-2 block">
            Nuestra Metodología
          </span>
          <h2 className="font-headline-lg text-[32px] font-semibold text-trento-blue-dark mb-4">
            Niveles Educativos
          </h2>
          <p className="font-body-md text-[16px] text-on-surface-variant max-w-2xl mx-auto">
            Descubre cómo adaptamos nuestra enseñanza para cada etapa del desarrollo de nuestros estudiantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card Primaria */}
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden soft-shadow transition-transform duration-300 hover:-translate-y-2 animate-fade-up flex flex-col">
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="p-8 grow flex flex-col">
              <h3 className="font-headline-md text-[24px] font-semibold text-trento-blue-dark mb-4">Primaria</h3>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-6 grow">
                Fomentamos la curiosidad natural y el amor por el aprendizaje a través de metodologías activas y participativas.
              </p>
              {/* Enlace actualizado */}
              <Link to="/metodologia/primaria" className="inline-flex items-center gap-2 text-primary font-label-md text-[14px] font-semibold hover:text-trento-blue-dark transition-colors self-start">
                Ver más...
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Card Secundaria */}
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden soft-shadow transition-transform duration-300 hover:-translate-y-2 animate-fade-up flex flex-col" style={{ transitionDelay: '100ms' }}>
            <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522661067900-ab8288d70c8d?q=80&w=800&auto=format&fit=crop')" }}></div>
            <div className="p-8 grow flex flex-col">
              <h3 className="font-headline-md text-[24px] font-semibold text-trento-blue-dark mb-4">Secundaria</h3>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-6 grow">
                Preparamos a los estudiantes para los retos del mundo globalizado, desarrollando pensamiento crítico y liderazgo.
              </p>
              {/* Enlace actualizado */}
              <Link to="/metodologia/secundaria" className="inline-flex items-center gap-2 text-primary font-label-md text-[14px] font-semibold hover:text-trento-blue-dark transition-colors self-start">
                Ver más...
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}