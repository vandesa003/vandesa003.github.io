import { motion } from 'framer-motion';

const VisitorStats = () => {
  return (
    <section className="py-20 px-4 relative bg-black overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-bold mb-8 text-white flex items-center justify-center gap-3 tracking-tight"
        >
          SITE VISIT MAP
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center min-h-[200px] max-w-2xl mx-auto glass-panel rounded-2xl p-4 overflow-hidden"
        >
          {/* Using iframe for better reliability with React */}
          <iframe 
            src="/map.html" 
            width="100%" 
            height="200" 
            style={{ border: 0, overflow: "hidden" }}
            title="Visitor Map"
            loading="lazy"
          />
        </motion.div>
        
        <p className="text-slate-500 text-sm mt-8">
          <a href="https://mapmyvisitors.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            Get your own map
          </a>
        </p>
      </div>
    </section>
  );
};

export default VisitorStats;
