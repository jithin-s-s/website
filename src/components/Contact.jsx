import { motion as Motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
    return (
        <section className="py-20 px-6 md:px-20 bg-black text-white relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <Motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
                >
                    Get In Touch
                </Motion.h2>

                <Motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 mb-12 text-lg"
                >
                    Have a project in mind or just want to say hi? Feel free to connect!
                </Motion.p>

                <div className="flex justify-center gap-8 mb-16">
                    <Motion.a
                        href="mailto:contact@jithin.dev" // Placeholder email
                        whileHover={{ scale: 1.1, color: "#a855f7" }}
                        className="flex flex-col items-center gap-2 text-gray-300 transition-colors"
                    >
                        <div className="p-4 bg-gray-900 rounded-full border border-gray-800">
                            <Mail className="w-6 h-6" />
                        </div>
                        <span className="text-sm">Email</span>
                    </Motion.a>

                    <Motion.a
                        href="https://github.com/jithin-s-s"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, color: "#a855f7" }}
                        className="flex flex-col items-center gap-2 text-gray-300 transition-colors"
                    >
                        <div className="p-4 bg-gray-900 rounded-full border border-gray-800">
                            <Github className="w-6 h-6" />
                        </div>
                        <span className="text-sm">GitHub</span>
                    </Motion.a>

                    <Motion.a
                        href="https://linkedin.com/in/jithin-s-s" // Placeholder LinkedIn
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, color: "#a855f7" }}
                        className="flex flex-col items-center gap-2 text-gray-300 transition-colors"
                    >
                        <div className="p-4 bg-gray-900 rounded-full border border-gray-800">
                            <Linkedin className="w-6 h-6" />
                        </div>
                        <span className="text-sm">LinkedIn</span>
                    </Motion.a>
                </div>

                {/* Optional Form UI */}
                <Motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="max-w-md mx-auto bg-gray-900/30 p-8 rounded-2xl border border-gray-800"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        />
                        <textarea
                            placeholder="Message"
                            rows="4"
                            className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                        ></textarea>
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                            Send Message <Send className="w-4 h-4" />
                        </button>
                    </div>
                </Motion.form>

                <footer className="mt-20 text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} Jithin S S. MIT License.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
