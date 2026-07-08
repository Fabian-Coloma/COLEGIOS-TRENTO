export default function LevelCards() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-white relative overflow-hidden">
      
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2888DE]/5 rounded-full filter blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

      {/* Encabezado */}
      <div className="max-w-[1200px] mx-auto text-center mb-16 animate-fade-up">
        <h2 className="font-headline-lg text-[36px] md:text-[42px] font-extrabold text-[#34373C] mb-4">
          Nuestras Sedes
        </h2>
        <p className="font-body-md text-[18px] text-[#34373C]/80 max-w-2xl mx-auto">
          Encuentra la sede más cercana a ti y forma parte de nuestra gran familia educativa.
        </p>
      </div>

      {/* Contenedor de Tarjetas */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        
        {/* Sede San Miguel */}
        <div className="bg-[#F6F6F6] rounded-[2.5rem] p-8 md:p-10 shadow-lg shadow-[#ACAEB1]/20 border-b-[6px] border-[#2888DE] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#2888DE]/30 group flex flex-col items-center md:items-start text-center md:text-left">
          {/* Ícono con borde asimétrico y animación de rotación */}
          <div className="w-20 h-20 bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl shadow-md flex items-center justify-center text-[#2888DE] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <span className="material-symbols-outlined text-[36px]">location_on</span>
          </div>
          <h3 className="font-headline-md text-[24px] font-extrabold text-[#34373C] mb-3">Sede San Miguel</h3>
          <p className="font-body-md text-[16px] text-[#34373C]/80 font-medium">
            Prolongación Ayacucho 334
          </p>
        </div>

        {/* Sede Colonial (Variación con el color Secondary para crear ritmo visual) */}
        <div className="bg-[#F6F6F6] rounded-[2.5rem] p-8 md:p-10 shadow-lg shadow-[#ACAEB1]/20 border-b-[6px] border-[#34373C] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#34373C]/20 group flex flex-col items-center md:items-start text-center md:text-left" style={{ transitionDelay: '100ms' }}>
          <div className="w-20 h-20 bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl shadow-md flex items-center justify-center text-[#34373C] mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
            <span className="material-symbols-outlined text-[36px]">business</span>
          </div>
          <h3 className="font-headline-md text-[24px] font-extrabold text-[#34373C] mb-3">Sede Colonial</h3>
          <p className="font-body-md text-[16px] text-[#34373C]/80 font-medium">
            Av. Colonial 2443 - Cercado
          </p>
        </div>

        {/* Sede Pro */}
        <div className="bg-[#F6F6F6] rounded-[2.5rem] p-8 md:p-10 shadow-lg shadow-[#ACAEB1]/20 border-b-[6px] border-[#2888DE] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#2888DE]/30 group flex flex-col items-center md:items-start text-center md:text-left" style={{ transitionDelay: '200ms' }}>
          <div className="w-20 h-20 bg-white rounded-tl-3xl rounded-br-3xl rounded-tr-xl rounded-bl-xl shadow-md flex items-center justify-center text-[#2888DE] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
            <span className="material-symbols-outlined text-[36px]">school</span>
          </div>
          <h3 className="font-headline-md text-[24px] font-extrabold text-[#34373C] mb-3">Sede Pro</h3>
          <p className="font-body-md text-[16px] text-[#34373C]/80 font-medium">
            Av. Alfredo Mendiola 8150
          </p>
        </div>

      </div>
    </section>
  );
}