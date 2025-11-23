import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Ahrefs",
    location: "Singapore",
    role: "Data Scientist",
    period: "2024.2 - Present",
    description: "Developing advanced search and tracking capabilities.",
    projects: [
      {
        title: "Knowledge Graph",
        tech: "NLP, Graph Databases",
        details: "Entity extraction and resolution for knowledge graph construction."
      },
      {
        title: "ChatBot Tracker",
        tech: "LLM Tracking",
        details: "Brand radar product to track mentions in ChatGPT, Perplexity, Gemini, etc."
      },
      {
        title: "Product Search",
        tech: "Search Algorithms",
        details: "Prototyping product search functionality for yep.com."
      }
    ]
  },
  {
    company: "OKX",
    location: "Singapore",
    role: "Senior AI Engineer",
    period: "2022.10 - 2024.2",
    description: "Led LLM initiatives and ML operations for crypto exchange platform.",
    projects: [
      {
        title: "In-house LLM Chatbot",
        tech: "LLAMA, OpenAI, VectorDB, RLHF",
        details: "Built customer service chatbot using RAG and fine-tuning. Improved efficiency with internal knowledge base."
      },
      {
        title: "ML Operations (MLOps)",
        tech: "AWS, AliCloud, Docker, Kubernetes",
        details: "Managed cloud resources and deployed 10+ online services. Designed AI service architecture with zero online accidents."
      },
      {
        title: "Token Recommendation",
        tech: "PAIREC, Hologres, Wide&Deep",
        details: "Built recommendation system from scratch. Implemented real-time feature calculation and ranking algorithms."
      },
      {
        title: "EKYC System",
        tech: "InsightFace, OCR, STT",
        details: "Developed face recognition and video verification system with >99% accuracy, processing millions of users."
      }
    ]
  },
  {
    company: "Shopee",
    location: "Singapore",
    role: "Machine Learning Engineer",
    period: "2020.8 - 2022.10",
    description: "Leading AI initiatives in e-commerce content generation and moderation.",
    projects: [
      {
        title: "Background Generation for Products",
        tech: "Stable Diffusion, ControlNet, LoRA, Golang",
        details: "Developed a generative AI pipeline to replace product backgrounds. Processes 100k+ images/week with <3s latency. Improved CTR by 15-20%."
      },
      {
        title: "Competitor Logo Detection",
        tech: "ResNet50, Triplet Loss, FAISS",
        details: "Built a system to detect competitor logos in 300k+ images/week. Achieved >92% precision using metric learning and vector search."
      },
      {
        title: "Irrelevant Image Detection",
        tech: "Deep Learning, Image Processing",
        details: "Quality control system processing 10M images/week with >96% precision, preventing abuse of virtual coins."
      }
    ]
  },
  {
    company: "QIHOO 360",
    location: "Beijing, China",
    role: "Machine Learning Engineer (Intern)",
    period: "2018.6 - 2018.10",
    description: "Worked on content safety and AutoML platforms.",
    projects: [
      {
        title: "NSFW Algorithm",
        tech: "Computer Vision",
        details: "Improved recall by 10% and precision by 5% for Huajiao Live content moderation."
      },
      {
        title: "Auto-ML Platform",
        tech: "Machine Learning",
        details: "Participated in the development of the internal Auto-ML platform."
      }
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-800 rounded-full" />

          {experiences.map((exp, index) => (
            <div key={index} className={`mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}>
              {/* Dot on the line */}
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 z-10 mt-6" />

              {/* Content Card */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`ml-8 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 text-right'} `}
              >
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300 backdrop-blur-sm">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                    <h4 className="text-xl text-cyan-400 mb-2">{exp.role}</h4>
                    <div className="flex items-center text-slate-400 text-sm mb-4 gap-4">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {exp.period}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {exp.location}</span>
                    </div>
                    <p className="text-slate-300 mb-4">{exp.description}</p>
                    
                    <div className="space-y-4 w-full">
                      {exp.projects.map((proj, pIndex) => (
                        <div key={pIndex} className={`bg-slate-800/50 p-4 rounded-xl border-l-2 border-purple-500 ${index % 2 === 0 ? 'text-left' : 'text-right md:text-left'}`}>
                          <h5 className="font-semibold text-purple-300">{proj.title}</h5>
                          <p className="text-xs text-slate-500 mb-1 font-mono">{proj.tech}</p>
                          <p className="text-sm text-slate-400">{proj.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Spacer for the other side */}
              <div className="md:w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
