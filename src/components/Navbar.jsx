import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Cpu } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "#hero" },
  { name: "Experience", icon: Briefcase, href: "#experience" },
  { name: "Projects", icon: Code, href: "#projects" },
  { name: "Skills", icon: Cpu, href: "#skills" },
];

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glass-panel rounded-full px-6 py-3 border border-white/20">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span className="hidden md:inline">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
