import { motion as Motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import { cinematicEase } from "../utils/animations";

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            <ParticlesBackground />

            {/* GTA 6 Style Zoom Out Container */}
            <Motion.div
                initial={{ scale: 20, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 2.5,
                    ease: cinematicEase,
                    delay: 0.5
                }}
                className="z-10 text-center"
            >
                <Motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 1 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter text-white"
                    style={{
                        textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(168,85,247,0.3)",
                        filter: "drop-shadow(0 0 15px rgba(255,255,255,0.5))"
                    }}
                >
                    JITHIN S S
                </Motion.h1>

                <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5, duration: 1 }}
                    className="mt-4 text-xl md:text-2xl text-gray-300 tracking-widest uppercase"
                >
                    AI Engineer • Developer • Innovator
                </Motion.p>
            </Motion.div>

            {/* Scroll Indicator */}
            <Motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                aria-label="Scroll down"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <Motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-2 bg-white rounded-full"
                    />
                </div>
            </Motion.div>
        </div>
    );
};

export default Hero;
