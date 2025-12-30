import { motion } from 'framer-motion';
import { languages } from '../data/languages';

export default function LanguageMarquee() {
    // Duplicate languages for seamless loop
    const duplicatedLanguages = [...languages, ...languages, ...languages];

    return (
        <div className="w-full overflow-hidden bg-primary-500 border-y-2 border-black py-4">
            <motion.div
                className="flex space-x-12"
                animate={{
                    x: [0, -1000],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedLanguages.map((lang, index) => (
                    <div
                        key={`${lang.code}-${index}`}
                        className="flex items-center space-x-3 text-white font-bold text-xl whitespace-nowrap"
                    >
                        <span className="text-3xl">{lang.flag}</span>
                        <span>{lang.name}</span>
                        <span className="text-white/60">•</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
