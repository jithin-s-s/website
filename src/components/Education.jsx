import { motion as Motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
    {
        type: "School",
        title: "CBSE",
        description: "Completed secondary and senior secondary education with focus on Science and Mathematics.",
        icon: <GraduationCap className="w-6 h-6 text-purple-400" />
    },
    {
        type: "Preparation",
        title: "JEE Aspirant",
        description: "Rigorous preparation for Joint Entrance Examination, honing problem-solving and analytical skills.",
        icon: <BookOpen className="w-6 h-6 text-blue-400" />
    },
    {
        type: "Certification",
        title: "Coursera & Online",
        description: "Various certifications in AI, ML, and Full Stack Development.",
        icon: <Award className="w-6 h-6 text-yellow-400" />
    },
    {
        type: "Language",
        title: "German (B1/C1)",
        description: "Proficiency in German language, aiming for higher studies in DACH region.",
        icon: <Award className="w-6 h-6 text-green-400" />
    }
];

const Education = () => {
    return (
        <section className="py-20 px-6 md:px-20 bg-black text-white relative z-10">
            <div className="max-w-4xl mx-auto">
                <Motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
                >
                    Education & Achievements
                </Motion.h2>

                <div className="space-y-8">
                    {education.map((item, index) => (
                        <Motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-6 bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
                        >
                            <div className="p-3 bg-gray-800 rounded-full shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <span className="text-sm text-purple-400 font-semibold uppercase tracking-wider">{item.type}</span>
                                <h3 className="text-2xl font-bold mt-1 mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                            </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
