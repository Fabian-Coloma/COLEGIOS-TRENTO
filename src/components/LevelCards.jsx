export default function LevelCards() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-headline-lg text-[32px] font-semibold text-trento-blue-dark mb-4">Nuestras Sedes</h2>
          <p className="font-body-md text-[16px] text-on-surface-variant max-w-2xl mx-auto">Encuentra la sede más cercana a ti y forma parte de nuestra comunidad educativa.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          
          <div className="bg-surface-container-lowest rounded-xl p-6 soft-shadow border border-outline-variant/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-up">
            <div className="w-12 h-12 bg-trento-blue-light rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <h3 className="font-headline-md text-[24px] font-semibold text-trento-blue-dark mb-2">Sede San Miguel</h3>
            <p className="font-body-md text-[16px] text-on-surface-variant mb-4 flex items-start gap-2">
              Prolongación Ayacucho 334
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 soft-shadow border border-outline-variant/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-up" style={{ transitionDelay: '100ms' }}>
            <div className="w-12 h-12 bg-trento-blue-light rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined">business</span>
            </div>
            <h3 className="font-headline-md text-[24px] font-semibold text-trento-blue-dark mb-2">Sede Colonial</h3>
            <p className="font-body-md text-[16px] text-on-surface-variant mb-4 flex items-start gap-2">
              Av. Colonial 2443 - Cercado
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-6 soft-shadow border border-outline-variant/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-up" style={{ transitionDelay: '200ms' }}>
            <div className="w-12 h-12 bg-trento-blue-light rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined">school</span>
            </div>
            <h3 className="font-headline-md text-[24px] font-semibold text-trento-blue-dark mb-2">Sede Pro</h3>
            <p className="font-body-md text-[16px] text-on-surface-variant mb-4 flex items-start gap-2">
              Av. Alfredo Mendiola 8150
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}