import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950 text-center">
      <div className="flex justify-center gap-8 mb-8">
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
        <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
        <a href="mailto:example@email.com" className="text-slate-400 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
      </div>
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} Bohang Li. Built with React & Tailwind.
      </p>
    </footer>
  );
};

export default Footer;
