import { motion } from 'framer-motion';
import { Mic, PenTool, TrendingUp, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { languages } from '../data/languages';
import Button from '../components/Button';

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white border-b-2 border-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="text-2xl font-handwritten font-bold text-primary-600">
                            LangGPT
                        </Link>
                        <Link to="/">
                            <button className="flex items-center space-x-2 px-4 py-2 border-2 border-black rounded-lg hover:bg-gray-50 transition-colors">
                                <LogOut size={20} />
                                <span className="font-medium">Logout</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Welcome Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl font-bold mb-2">
                        Welcome back, <span className="font-handwritten text-primary-600">Learner</span>!
                    </h1>
                    <p className="text-xl text-gray-600">Ready to continue your language journey?</p>
                </motion.div>

                {/* Language Selection */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Choose Your Language</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {languages.map((lang, index) => (
                            <motion.button
                                key={lang.code}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="card-brutal bg-white p-6 text-center hover:bg-primary-50 transition-colors"
                            >
                                <div className="text-5xl mb-3">{lang.flag}</div>
                                <h3 className="text-xl font-bold mb-1">{lang.name}</h3>
                                <p className="text-gray-600">{lang.nativeName}</p>
                            </motion.button>
                        ))}
                    </div>
                </section>

                {/* Practice Features */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Practice Now</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Speaking Practice */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card-brutal bg-white p-8"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="bg-coral-100 p-4 rounded-lg border-2 border-black">
                                    <Mic size={32} className="text-coral-500" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-2">Speaking Practice</h3>
                                    <p className="text-gray-600 mb-4">
                                        Practice real conversations with AI. Get instant feedback on pronunciation
                                        and fluency. (Vapi integration coming soon)
                                    </p>
                                    <Button variant="coral" className="w-full sm:w-auto">
                                        Start Speaking
                                    </Button>
                                    <div className="mt-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg p-3">
                                        <p className="text-sm text-yellow-800 font-medium">
                                            🚧 Backend integration in progress
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Writing Practice */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="card-brutal bg-white p-8"
                        >
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary-100 p-4 rounded-lg border-2 border-black">
                                    <PenTool size={32} className="text-primary-500" />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-2xl font-bold mb-2">Writing Practice</h3>
                                    <p className="text-gray-600 mb-4">
                                        Get AI-powered feedback on your writing. Upload images and receive
                                        detailed corrections.
                                    </p>
                                    <Button variant="primary" className="w-full sm:w-auto">
                                        Start Writing
                                    </Button>
                                    <div className="mt-4 bg-yellow-50 border-2 border-yellow-400 rounded-lg p-3">
                                        <p className="text-sm text-yellow-800 font-medium">
                                            🚧 Backend integration in progress
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Progress Overview */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="card-brutal bg-white p-6"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary-100 p-3 rounded-lg border-2 border-black">
                                    <TrendingUp size={24} className="text-primary-500" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm font-medium">Total Practice Time</p>
                                    <p className="text-2xl font-bold">0 hrs</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="card-brutal bg-white p-6"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-coral-100 p-3 rounded-lg border-2 border-black">
                                    <Mic size={24} className="text-coral-500" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm font-medium">Speaking Sessions</p>
                                    <p className="text-2xl font-bold">0</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="card-brutal bg-white p-6"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-primary-100 p-3 rounded-lg border-2 border-black">
                                    <PenTool size={24} className="text-primary-500" />
                                </div>
                                <div>
                                    <p className="text-gray-600 text-sm font-medium">Writing Exercises</p>
                                    <p className="text-2xl font-bold">0</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Placeholder Notice */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 bg-blue-50 border-2 border-blue-400 rounded-xl p-6"
                >
                    <h3 className="text-xl font-bold mb-2 text-blue-900">👋 Frontend Developer Note</h3>
                    <p className="text-blue-800">
                        This dashboard is a UI placeholder. All interactive features (speaking practice with Vapi,
                        writing submissions, progress tracking) are ready for backend integration. The design
                        matches the landing page aesthetic with neobrutalist styling and ocean blue/teal/coral colors.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
