import { Mail, Linkedin, MessageSquare, Phone } from 'lucide-react';

export default function FooterContato() {
  return (
    <footer className="bg-gray-950 text-white py-8 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 w-full">
        <p className="text-sm text-gray-400 text-center break-words px-2">
          © {new Date().getFullYear()} Samuel Viana — Soluções em Desenvolvimento de Software. Todos os direitos reservados.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full flex-wrap">
          <FooterLink
            icon={<Mail className="w-5 h-5" />}
            label="Email"
            link="mailto:samuelviana23dev@gmail.com"
          />
          <FooterLink
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            link="https://www.linkedin.com/in/samuel-viana-0a6a10174/"
          />
          <FooterLink
            icon={<MessageSquare className="w-5 h-5" />}
            label="WhatsApp"
            link="https://wa.me/5585974007358"
          />
          <FooterLink
            icon={<Phone className="w-5 h-5" />}
            label="Telefone"
            link="tel:+5585974007358"
          />
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  icon: React.ReactNode;
  label: string;
  link: string;
}

function FooterLink({ icon, label, link }: FooterLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition max-w-full overflow-hidden px-2"
    >
      {icon}
      <span className="text-sm break-words">{label}</span>
    </a>
  );
}