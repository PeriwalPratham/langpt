import { motion } from 'framer-motion';

export default function FeatureCard({ icon, title, description, className = '' }) {
    return (
        <motion.div
            className={`card-brutal bg-white p-6 ${className}`}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
        >
            <div className="flex flex-col h-full">
                <div className="text-coral-500 mb-4">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 flex-grow">{description}</p>
            </div>
        </motion.div>
    );
}
