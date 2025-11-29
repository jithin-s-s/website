import { motion as Motion } from "framer-motion";

const skills = [
    { name: "Python", level: "Expert" },
    { name: "Go", level: "Intermediate" },
    { name: "Java", level: "Advanced" },
    { name: "Rust", level: "Beginner" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Django", level: "Expert" },
    { name: "React", level: "Advanced" },
    { name: "Machine Learning", level: "Advanced" },
    { name: "Deep Learning", level: "Advanced" },
    { name: "Ethical Hacking", level: "Intermediate" },
    { name: "VLSI", level: "Beginner" },
    { name: "Quantum Computing", level: "Beginner" },
];

const Skills = () => {
    return (
        <section className="py-20 px-6 md:px-20 bg-black text-white relative z-10">
            <div className="max-w-5xl mx-auto">
                <Motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
                >
                    Technical Arsenal
                </Motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }
                            }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                                y: -5
                            }}
                            animate={{ y: [0, -10, 0] }}
                            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-4 rounded-lg text-center hover:border-purple-500 transition-all duration-300 cursor-default"
                        >
                            <h3 className="text-xl font-semibold text-gray-200">{skill.name}</h3>
                            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{skill.level}</p>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
