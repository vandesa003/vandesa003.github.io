import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background Gradient/Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
         {/* Abstract decorative circles */}
        <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] rounded-full border border-cyan-500/30" 
        />
        <motion.div 
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -right-1/2 w-[100vw] h-[100vw] rounded-full border border-purple-500/30" 
        />
      </div>

      <div className="text-center z-10 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-4"
        >
          Bohang Li
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl text-slate-300 mb-8"
        >
          Machine Learning Engineer & AI Researcher
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
        >
          Specializing in Computer Vision, Deep Learning, and Large-Scale Data Processing.
          <br />
          Turning complex data into actionable intelligence.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-10"
      >
        <ArrowDown className="w-8 h-8 text-cyan-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
