import { motion } from "framer-motion";
import { Trophy, BookOpen } from "lucide-react";

const competitions = [
  {
    title: "Global Wheat Detection",
    platform: "Kaggle",
    rank: "55/2245 (Silver Medal)",
    description: "Detected wheat heads from outdoor images of wheat plants, helping global wheat research.",
    icon: Trophy
  },
  {
    title: "Deepfake Detection Challenge",
    platform: "Kaggle",
    rank: "161/2265 (Bronze Medal)",
    description: "Identified deepfake videos using advanced computer vision techniques.",
    icon: Trophy
  },
  {
    title: "AliProducts Challenge",
    platform: "Tianchi",
    rank: "13/745",
    description: "Large-scale Product Recognition challenge.",
    icon: Trophy
  },
  {
    title: "Shopee Code League",
    platform: "Kaggle",
    rank: "Organizer/Trainer",
    description: "Product Detection challenge organizer.",
    icon: Trophy
  }
];

const publications = [
  {
    title: "Deep Learning for Medical Image Segmentation",
    venue: "IGI Global (Book Chapter)",
    year: "2020",
    authors: "K. Sarkar, Bohang Li"
  },
  {
    title: "The Application of Object Detection in Security and Privacy",
    venue: "IGI Global (Book Chapter)",
    year: "2020",
    authors: "K. Sarkar, Bohang Li"
  },
  {
    title: "Research on Travel Route Planning Optimization based on LLM",
    venue: "IEEE DOCS",
    year: "2024",
    authors: "B. Li, et al."
  },
  {
    title: "Image steganalysis using active learning and hyperparameter optimization",
    venue: "Scientific Reports",
    year: "2025",
    authors: "Bohang L., et al."
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center text-white tracking-tight"
        >
          RESEARCH & ACHIEVEMENTS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Competitions Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
              <Trophy className="text-white w-6 h-6" /> Competitions
            </h3>
            <div className="space-y-6">
              {competitions.map((comp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-white group-hover:text-white transition-colors">{comp.title}</h4>
                    <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-slate-300">{comp.platform}</span>
                  </div>
                  <p className="text-slate-300 font-semibold text-sm mb-2">{comp.rank}</p>
                  <p className="text-slate-500 text-sm">{comp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
              <BookOpen className="text-white w-6 h-6" /> Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-xl group"
                >
                  <h4 className="font-bold text-lg text-white mb-2 group-hover:text-white transition-colors">{pub.title}</h4>
                  <div className="flex justify-between items-center text-sm text-slate-400">
                    <span>{pub.venue}</span>
                    <span>{pub.year}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 italic">{pub.authors}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
