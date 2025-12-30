import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className = '', onClick, ...props }) {
    const variants = {
        primary: 'btn-primary',
        coral: 'btn-coral',
        outline: 'btn-outline',
    };

    return (
        <motion.button
            className={`${variants[variant]} ${className}`}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}
