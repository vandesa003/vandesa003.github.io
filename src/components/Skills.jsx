import { motion } from "framer-motion";

const skills = {
  "Languages": ["Python", "GoLang", "C/C++"],
  "Deep Learning": ["PyTorch", "TensorFlow", "ONNX", "Keras"],
  "Data & Infra": ["Spark", "HDFS", "Redis", "SQL", "Docker"],
  "Tools": ["Git", "Linux", "VS Code"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden bg-black">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/5 to-transparent -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-white tracking-tight"
        >
          TECHNICAL ARSENAL
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2 uppercase tracking-wide">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-white/5 rounded-full text-slate-300 text-sm font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default border border-white/10"
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
