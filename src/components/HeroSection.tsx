import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import capa from '../assets/capa.png';

export default function HeroSection() {
  const scrollToSection = () => {
    const target = document.querySelector('#solucoes');
    if (!target) return;

    const targetY = target.getBoundingClientRect().top + window.scrollY;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 1000;
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animateScroll = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * easedProgress);
      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-x-hidden bg-cover bg-center flex items-center justify-center text-white px-4 sm:px-6"
      style={{
        backgroundImage: `url(${capa})`,
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-gray-950 w-full h-full"></div>

        {/* Estrelas animadas */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gray-500 rounded-full animate-star-combo"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl w-full overflow-hidden"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-wrap w-full">
          Transformo <span className="text-cyan-400">sua ideia</span> em solução
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Transformo conceitos em soluções digitais sob medida. Seja um sistema, uma automação ou uma plataforma completa — você imagina, eu desenvolvo.
        </p>

        <p className="text-base md:text-lg text-gray-400 mb-8">
          Especialista em <span className="text-cyan-300 font-medium">React</span>, <span className="text-cyan-300 font-medium">Python</span>, <span className="text-cyan-300 font-medium">Node.js</span> e <span className="text-cyan-300 font-medium">C#</span>. Experiência sólida em APIs, bancos de dados (SQL), automações e visualizações com Power BI.
        </p>
      </motion.div>

      {/* Indicador de rolagem com clique */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}