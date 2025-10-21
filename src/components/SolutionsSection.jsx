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
      "Presença online com design profissional, responsivo e informativo.",
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Site Multi-Páginas",
    description:
      "Mais conteúdo e interações: serviços, blog, formulários e animações.",
    icon: <Layers className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Plataforma com Login e Banco de Dados",
    description:
      "Autenticação, gerenciamento de usuários e integração com banco de dados.",
    icon: <Database className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Sistema Completo e Personalizado",
    description:
      "Segurança avançada, escalabilidade e personalização total.",
    icon: <Lock className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Automação e Extração de Dados",
    description:
      "Scripts em Python para automatizar tarefas e extrair dados de sites.",
    icon: <Bot className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Dashboards e Visualização de Dados",
    description:
      "Dashboards interativos com Power BI ou web conectados a bancos de dados.",
    icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
  },
];

export default function SolutionsSection() {
  return (
    <section  id="solucoes" className="bg-gray-950 text-white py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Soluções que ofereço</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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