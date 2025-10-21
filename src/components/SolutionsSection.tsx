import { motion } from 'framer-motion';
import {
  Globe,
  Layers,
  Lock,
  Database,
  BarChart3,
  Bot,
} from 'lucide-react';

const solutions = [
  {
    title: "Site Institucional",
    description:
      "Fortaleça a presença digital da sua empresa com um site moderno, responsivo e alinhado à sua identidade profissional.",
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Site com Várias Páginas",
    description:
      "Organize seus serviços, blog, formulários e conteúdos em um site estruturado, com navegação fluida e experiência otimizada.",
    icon: <Layers className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Plataforma com Login",
    description:
      "Desenvolvimento de sistemas com autenticação segura, gestão de usuários e integração com banco de dados para controle eficiente.",
    icon: <Database className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Sistema Sob Medida",
    description:
      "Soluções personalizadas para atender demandas específicas, com foco em segurança, escalabilidade e performance profissional.",
    icon: <Lock className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Automação e Coleta de Dados",
    description:
      "Automatize processos e extraia informações relevantes de sites e sistemas com scripts inteligentes em Python.",
    icon: <Bot className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Dashboards e Relatórios",
    description:
      "Visualize seus dados com clareza através de dashboards interativos em Power BI ou soluções web integradas a bancos de dados.",
    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
  },
];

export default function SolutionsSection() {
  return (
    <section  id="solucoes" className="bg-gray-950 text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Soluções</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-6">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
          >
            <div className="mb-4">{solution.icon}</div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">{solution.title}</h3>
            <p className="text-gray-300 text-sm">{solution.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}