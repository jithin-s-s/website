import { motion as Motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "../utils/animations";

const About = () => {
    return (
        <section className="py-20 px-6 md:px-20 bg-black text-white relative z-10">
            <div className="max-w-4xl mx-auto">
                <Motion.h2
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInLeft}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
                >
                    About Me
                </Motion.h2>

                <Motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeInUp}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-6"
                >
                    <p>
                        I am a passionate developer with a deep interest in <span className="text-white font-semibold">AI, Machine Learning, Deep Learning</span>, and <span className="text-white font-semibold">Quantum Computing</span>.
                        My journey involves exploring the frontiers of technology, from building intelligent apps to diving into ethical hacking and VLSI design.
                    </p>
                    <p>
                        I thrive on solving complex problems and creating intuitive, high-performance applications.
                        Whether it's developing game logic, training neural networks, or crafting seamless web experiences, I aim for excellence and innovation.
                    </p>
                </Motion.div>
            </div>
        </section>
    );
};

export default About;
