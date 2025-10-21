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
      "Mostre sua empresa na internet com um site bonito, fácil de usar e que funciona em qualquer tela.",
    icon: <Globe className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Site com Várias Páginas",
    description:
      "Ideal para quem precisa mostrar serviços, blog, contato e outras informações de forma organizada.",
    icon: <Layers className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Plataforma com Login",
    description:
      "Crie um sistema onde seus clientes ou usuários possam se cadastrar, fazer login e acessar dados com segurança.",
    icon: <Database className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Sistema Sob Medida",
    description:
      "Se você tem uma ideia específica, desenvolvo o sistema completo do seu jeito, com segurança e escalabilidade.",
    icon: <Lock className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Automação e Coleta de Dados",
    description:
      "Economize tempo com scripts que fazem tarefas repetitivas ou coletam informações de sites automaticamente.",
    icon: <Bot className="w-8 h-8 text-cyan-400" />,
  },
  {
    title: "Dashboards e Relatórios",
    description:
      "Veja seus dados de forma clara e visual com gráficos interativos, usando Power BI ou soluções web.",
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