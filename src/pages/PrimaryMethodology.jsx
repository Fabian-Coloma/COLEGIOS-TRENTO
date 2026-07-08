import { Link } from 'react-router-dom';

export default function PrimaryMethodology() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest min-h-[calc(100vh-80px)]">
      <div className="max-w-[1000px] mx-auto animate-fade-up">
        
        <Link to="/metodologia" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-[14px] mb-8">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Volver a Metodologías
        </Link>

        <h1 className="font-display-lg text-[48px] font-bold text-trento-blue-dark mb-6">
          Metodología Primaria
        </h1>
        
        <div className="w-full h-[400px] bg-cover bg-center rounded-2xl mb-12 soft-shadow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop')" }}></div>

        <div className="prose prose-lg max-w-none text-on-surface-variant font-body-lg text-[18px] leading-relaxed">
          {/* PEGA AQUÍ TU TEXTO DE PRIMARIA */}
          <p className="mb-6">
            Aquí es donde debes pegar toda la información detallada sobre la metodología de primaria. Fomentamos la curiosidad natural y el amor por el aprendizaje a través de metodologías activas y participativas, sentando bases sólidas para el futuro.
          </p>
          <p className="mb-6">
            Nuestro enfoque se centra en el desarrollo integral del estudiante, combinando la excelencia académica con el crecimiento emocional y social.
          </p>
          {/* FIN DEL TEXTO */}
        </div>
        
      </div>
    </section>
  );
}