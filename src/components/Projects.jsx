import { motion } from "framer-motion";
import { Trophy, BookOpen, ExternalLink } from "lucide-react";

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
    <section id="projects" className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-500"
        >
          Research & Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Competitions Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Trophy className="text-yellow-400" /> Competitions
            </h3>
            <div className="space-y-6">
              {competitions.map((comp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-yellow-500/50 transition-all hover:bg-slate-800"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-slate-200">{comp.title}</h4>
                    <span className="text-xs font-mono bg-slate-900 px-2 py-1 rounded text-slate-400">{comp.platform}</span>
                  </div>
                  <p className="text-yellow-400 font-semibold text-sm mb-2">{comp.rank}</p>
                  <p className="text-slate-400 text-sm">{comp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <BookOpen className="text-cyan-400" /> Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800 group"
                >
                  <h4 className="font-bold text-lg text-slate-200 mb-2 group-hover:text-cyan-300 transition-colors">{pub.title}</h4>
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
