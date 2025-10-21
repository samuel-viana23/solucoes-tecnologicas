import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Background from '../assets/backgroundPage.png'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6"
      style={{
        backgroundImage: `url(${Background})`,
      }}

    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-gray-950"></div>

      {/* Conteúdo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Olá, eu sou <span className="text-cyan-400">Samuel</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Desenvolvedor Full Stack com foco em soluções modernas e eficientes.
          Especialista em <span className="text-cyan-300 font-medium">React</span>, <span className="text-cyan-300 font-medium">Python</span>, <span className="text-cyan-300 font-medium">Node.js</span> e <span className="text-cyan-300 font-medium">C#</span>.
          Experiência em automações, extração de dados, integração com APIs, bancos de dados (SQL) e visualização com Power BI.
        </p>
        <a
          href="#solucoes"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          Ver soluções
        </a>
        
      </motion.div>

      {/* Indicador de rolagem */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
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