import { Link } from 'react-router-dom';

export default function SecondaryMethodology() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest min-h-[calc(100vh-80px)]">
      <div className="max-w-[1000px] mx-auto animate-fade-up">
        
        <Link to="/metodologia" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-[14px] mb-8">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Volver a Metodologías
        </Link>

        <h1 className="font-display-lg text-[48px] font-bold text-trento-blue-dark mb-6">
          Metodología Secundaria
        </h1>
        
        <div className="w-full h-[400px] bg-cover bg-center rounded-2xl mb-12 soft-shadow" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522661067900-ab8288d70c8d?q=80&w=1200&auto=format&fit=crop')" }}></div>

        <div className="prose prose-lg max-w-none text-on-surface-variant font-body-lg text-[18px] leading-relaxed">
          {/* PEGA AQUÍ TU TEXTO DE SECUNDARIA */}
          <p className="mb-6">
            Aquí es donde debes pegar toda la información detallada sobre la metodología de secundaria. Preparamos a los estudiantes para los retos del mundo globalizado, desarrollando pensamiento crítico, liderazgo y excelencia académica.
          </p>
          <p className="mb-6">
            Nuestro programa prepara a los jóvenes para la vida universitaria y profesional, dotándolos de las herramientas tecnológicas y habilidades blandas necesarias para destacar en cualquier entorno.
          </p>
          {/* FIN DEL TEXTO */}
        </div>
        
      </div>
    </section>
  );
}