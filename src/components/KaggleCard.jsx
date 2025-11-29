import { motion as Motion } from "framer-motion";
import { Trophy, Award, TrendingUp } from "lucide-react";

const KaggleCard = () => {
    // Static info for Kaggle profile (jithinai)
    const kaggleData = {
        username: "jithinai",
        profileUrl: "https://www.kaggle.com/jithinai",
        tier: "Contributor",
        competitions: 5,
        datasets: 2,
        notebooks: 8
    };

    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all p-6"
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <svg className="w-8 h-8 fill-cyan-400" viewBox="0 0 24 24">
                            <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-8.731-10.673c-.141-.167-.207-.347-.207-.548v-2.471c0-.201.066-.381.207-.548l8.731-10.673c.141-.166.305-.248.492-.248h3.139c.164 0 .259.049.281.141.021.091-.01.19-.096.291l-8.466 10.34c-.128.155-.192.318-.192.491 0 .173.064.336.192.491l8.466 10.34c.086.101.117.2.096.291zm-18.644.141c-.164 0-.259-.049-.281-.141-.021-.091.01-.19.096-.291l8.466-10.34c.128-.155.192-.318.192-.491 0-.173-.064-.336-.192-.491l-8.466-10.34c-.086-.101-.117-.2-.096-.291.022-.092.117-.141.281-.141h3.139c.187 0 .351.082.492.248l8.731 10.673c.141.167.207.347.207.548v2.471c0 .201-.066.381-.207.548l-8.731 10.673c-.141.166-.305.248-.492.248h-3.139z" />
                        </svg>
                        <h3 className="text-2xl font-bold text-white">Kaggle Profile</h3>
                    </div>
                    <a
                        href={kaggleData.profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                        @{kaggleData.username}
                    </a>
                </div>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/30">
                    {kaggleData.tier}
                </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                    <div className="flex justify-center mb-2">
                        <Trophy className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{kaggleData.competitions}</div>
                    <div className="text-xs text-gray-400">Competitions</div>
                </div>
                <div className="text-center">
                    <div className="flex justify-center mb-2">
                        <Award className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{kaggleData.datasets}</div>
                    <div className="text-xs text-gray-400">Datasets</div>
                </div>
                <div className="text-center">
                    <div className="flex justify-center mb-2">
                        <TrendingUp className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">{kaggleData.notebooks}</div>
                    <div className="text-xs text-gray-400">Notebooks</div>
                </div>
            </div>

            <div className="mt-6">
                <a
                    href={kaggleData.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-lg transition-colors"
                >
                    View Profile
                </a>
            </div>
        </Motion.div>
    );
};

export default KaggleCard;
