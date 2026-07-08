import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center absolute inset-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLsB1vcl-pI1E9Zy7C8mu5ReoDXboaxYXM_RU4q13X4SmaZirvQJfbW7b-RIN5iT8ercyP7_YPTdB5OiWTiCF0UaphEHi4RQ91j_kSK_49Aier5tMB8kli1yqOxWJn2XWi5SfUp5RYauUajqQuSQppYsiKIhEbopxchRprUiOr7vpGbYI3_K3_JXVQO9vkZsSQ40ooAhaJQKqxq2zV5GdWM0EUUGOyNw2uc1AlzoRiPsTf1cEn6WND_JchBE')" }}></div>
        <div className="absolute inset-0 bg-linear-to-r from-surface-tint/90 to-trento-blue-dark/60 mix-blend-multiply"></div>
      </div>
      <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-[1200px] mx-auto animate-fade-up">
        <span className="inline-block bg-trento-blue-light text-trento-blue-dark font-label-md text-[14px] font-semibold px-4 py-1 rounded-full mb-6 shadow-sm">
          Educación de Excelencia
        </span>
        <h1 className="font-display-lg text-[48px] font-bold text-on-primary mb-6 drop-shadow-md leading-tight">
          Construyendo un Futuro Brillante
        </h1>
        <p className="font-body-lg text-[18px] text-primary-fixed mb-10 max-w-2xl mx-auto drop-shadow-sm">
          Más de 10 años enseñando con excelencia académica, formando líderes íntegros para un mundo globalizado.
        </p>
       <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-[14px] font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-container transition-all shadow-md">
            Matrícula Abierta
          </Link>
          
          {/* Este enlace ahora apunta a /metodologia */}
          <Link to="/metodologia" className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-primary-fixed text-primary-fixed font-label-md text-[14px] font-semibold px-8 py-3.5 rounded-lg hover:bg-primary-fixed hover:text-primary transition-all">
            Conoce Nuestra Metodología
          </Link>
        </div>
      </div>
    </section>
  );
}