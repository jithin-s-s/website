import { motion as Motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import KaggleCard from "./KaggleCard";

const projects = [
    {
        title: "MazeRunner",
        category: "Game App",
        description: "An interactive maze game testing logic and speed.",
        tech: ["Flutter", "Dart", "Mobile"],
        image: "/mazerunner.png",
        link: "#",
        github: "https://github.com/jithin-s-s"
    },
    {
        title: "Unifire",
        category: "AI Application",
        description: "Advanced AI tool for automated content generation.",
        tech: ["Python", "TensorFlow", "React"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2832&auto=format&fit=crop",
        link: "#",
        github: "https://github.com/jithin-s-s"
    },
    {
        title: "Image to PDF",
        category: "Utility App",
        description: "Seamlessly convert images to PDF documents.",
        tech: ["Flutter", "Dart", "Mobile"],
        image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2670&auto=format&fit=crop",
        link: "#",
        github: "https://github.com/jithin-s-s"
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
                y: -10,
                boxShadow: "0 20px 60px rgba(168, 85, 247, 0.3)",
            }}
            className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
        >
            <div className="h-48 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="View on GitHub" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <Github className="w-6 h-6 text-white" />
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label="View project" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold mt-2 mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-gray-800 rounded-md text-gray-300 border border-gray-700">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </Motion.div>
    );
};

const Projects = () => {
    return (
        <section className="py-20 px-6 md:px-20 bg-black text-white relative z-10">
            <div className="max-w-6xl mx-auto">
                <Motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent tracking-wide"
                >
                    Featured Projects
                </Motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Kaggle Section */}
                <div className="mt-12">
                    <Motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
                    >
                        Data Science & Competitions
                    </Motion.h3>
                    <KaggleCard />
                </div>
            </div>
        </section>
    );
};

export default Projects;
