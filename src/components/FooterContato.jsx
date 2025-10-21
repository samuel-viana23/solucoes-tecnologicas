import { Mail, Linkedin, MessageSquare, Phone } from 'lucide-react';

export default function FooterContato() {
  return (
    <footer className="bg-gray-950 text-white py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Samuel Dev — Soluções em Desenvolvimento Full Stack
        </p>
        <div className="flex gap-6">
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

function FooterLink({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </a>
  );
}