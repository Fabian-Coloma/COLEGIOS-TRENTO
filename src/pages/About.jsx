export default function About() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-margin-desktop bg-surface-container-low min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="font-label-md text-[14px] font-semibold text-primary tracking-wider uppercase mb-2 block">Nosotros</span>
          <h2 className="font-headline-lg text-[32px] font-semibold text-trento-blue-dark mb-6">Nuestra Misión</h2>
          <p className="font-body-lg text-[18px] text-on-surface-variant leading-relaxed border-l-4 border-primary pl-6 py-2 bg-surface-variant/20 rounded-r-lg">
            Somos una comunidad educativa enfocada en la mejora continua, que busca que la educación impartida a nuestros estudiantes ilumine sus caminos hacia un futuro exitoso, como ciudadano y como forjador de una mejor sociedad, en nuestro amado país y en un mundo totalmente globalizado.
          </p>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden soft-shadow animate-fade-up" style={{ transitionDelay: '200ms' }}>
          <div className="w-full h-full bg-cover bg-center absolute inset-0" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgRWj_geBUoS62T1mNMnCM1gS87fOUdM21vlymnYkOGIn9PUY3Xjb19MGfPPpiUNUrelV-16amiOt0PNOjfoh0_HOJ2RILWsAlFaWyaJJlf8vxFFzXXjLULdXLBF1tb87-mjLVhLNXdyDjGK1ILuSHRTlQvjA_Q1EF5v31wxhMyO5qbGefKlIo_zC1svEwQs2iKCNmm3DILz36C2bNqptY6qIeMgu1KrBFtjxMQXh-Jnlq1oBXzlkPYA')" }}></div>
        </div>
      </div>
    </section>
  );
}