import { motion } from "framer-motion";

const skills = {
  "Languages": ["Python", "GoLang", "C/C++"],
  "Deep Learning": ["PyTorch", "TensorFlow", "ONNX", "Keras"],
  "Data & Infra": ["Spark", "HDFS", "Redis", "SQL", "Docker"],
  "Tools": ["Git", "Linux", "VS Code"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/80 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-slate-800 rounded-full text-slate-300 text-sm font-medium hover:bg-cyan-900/30 hover:text-cyan-300 transition-colors cursor-default border border-transparent hover:border-cyan-500/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
