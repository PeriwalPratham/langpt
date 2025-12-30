import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-handwritten font-bold text-primary-600">
                            LangGPT
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Features
                        </a>
                        <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            How It Works
                        </a>
                        <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                            Pricing
                        </a>
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-primary-500 text-white font-bold border-2 border-black rounded-lg shadow-brutal-sm hover:shadow-none transition-all"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg border-2 border-black hover:bg-gray-50"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden border-t-2 border-black bg-white"
                >
                    <div className="px-4 py-4 space-y-3">
                        <a href="#features" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
                            Features
                        </a>
                        <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
                            How It Works
                        </a>
                        <a href="#pricing" className="block py-2 text-gray-700 hover:text-primary-600 font-medium">
                            Pricing
                        </a>
                        <Link
                            to="/login"
                            className="block w-full text-center px-4 py-2 bg-primary-500 text-white font-bold border-2 border-black rounded-lg shadow-brutal-sm"
                        >
                            Login
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
