import LevelCards from '../components/LevelCards';

export default function Locations() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col">
      {/* Sección de las Cards (Sedes) */}
      <LevelCards />

      {/* Sección del Mapa (Ubícanos) */}
      <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-lowest grow flex items-center">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="bg-surface-container rounded-2xl overflow-hidden soft-shadow flex flex-col md:flex-row animate-fade-up">
            
            <div className="md:w-1/3 p-8 flex flex-col justify-center bg-surface">
              <h2 className="font-headline-md text-[24px] font-semibold text-trento-blue-dark mb-4">Ubícanos</h2>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-6">
                Ven a visitarnos y conoce nuestras instalaciones diseñadas para el aprendizaje.
              </p>
              <a href="#" className="inline-flex items-center justify-center gap-2 bg-transparent border border-trento-blue-dark text-trento-blue-dark font-label-md text-[14px] font-semibold px-6 py-2.5 rounded-lg hover:bg-trento-blue-light transition-colors self-start">
                <span className="material-symbols-outlined text-sm">map</span>
                Ver en Google Maps
              </a>
            </div>

            <div className="md:w-2/3 h-[400px] md:h-auto relative bg-surface-variant">
              <div 
                className="w-full h-full bg-cover bg-center absolute inset-0 opacity-80 mix-blend-luminosity" 
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCXQuLXL-fh7Wsaub0r2D0OT3rumOwetVBAKvD_hz5fgvSkM7gYrNn7pPbdJTD2FwBwBajAg3rzQXs2XMBaVlp2xw-OJ3j-Zm0crh3oPLBAC1lD3wBSjfw3JH00Bwenl5Fn-NWxQ8HXLzF-G6hjuCjfFEhRJj3yGAvVc4-2iIycu3IebfP2G6UiG2XlJEHPFf6-AswZ8z9W26bpeGcSyi1oE6ZfD1LYtfivh04KLiI9LbbPYArrJtiMhQ')" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="material-symbols-outlined text-primary text-5xl relative z-10 drop-shadow-md">
                  location_on
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}