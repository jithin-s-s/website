import { motion as Motion } from "framer-motion";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
            {/* Gradient orbs */}
            <Motion.div
                className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <Motion.div
                className="absolute top-1/2 -right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <Motion.div
                className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"
                animate={{
                    x: [0, -50, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
