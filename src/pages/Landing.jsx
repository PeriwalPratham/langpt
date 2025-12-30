import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mic, PenTool, Sparkles, TrendingUp, MessageCircle, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';

export default function Landing() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative grid-bg py-32 md:py-40 lg:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh] flex items-center">
                <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
                            <span className="inline-block hover:scale-105 transition-transform duration-200">
                                Master
                            </span>{' '}
                            <span className="relative inline-block group">
                                <span className="relative z-10 hover:text-primary-600 transition-colors duration-200">
                                    Languages
                                </span>
                                <span className="absolute bottom-2 left-0 w-full h-3 bg-coral-200 -z-10 transform -skew-y-1 group-hover:h-4 transition-all duration-200"></span>
                            </span>{' '}
                            with{' '}
                            <br className="hidden sm:block" />
                            <span className="font-handwritten text-primary-600 relative inline-block group">
                                <span className="relative z-10">AI-Powered</span>
                                <span className="absolute bottom-0 left-0 w-full h-4 bg-primary-200 -z-10 transform skew-y-1 group-hover:bg-primary-300 transition-colors duration-200"></span>
                            </span>{' '}
                            <span className="relative inline-block">
                                <span className="hover:text-coral-500 transition-colors duration-200 cursor-default">
                                    Practice
                                </span>
                                <span className="absolute bottom-0 left-0 w-0 h-1 bg-coral-500 group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </h1>

                        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                            <span className="font-bold text-primary-700 block mb-2">
                                Specialized for Cambridge IGCSE Foreign Language Success
                            </span>
                            Learn{' '}
                            <Link to="/english" className="font-semibold text-primary-600 hover:underline decoration-2 decoration-primary-400 underline-offset-4 transition-all duration-200">
                                English
                            </Link>,{' '}
                            <Link to="/french" className="font-semibold text-primary-600 hover:underline decoration-2 decoration-primary-400 underline-offset-4 transition-all duration-200">
                                French
                            </Link>,{' '}
                            <Link to="/mandarin" className="font-semibold text-primary-600 hover:underline decoration-2 decoration-primary-400 underline-offset-4 transition-all duration-200">
                                Mandarin
                            </Link>, and{' '}
                            <Link to="/hindi" className="font-semibold text-primary-600 hover:underline decoration-2 decoration-primary-400 underline-offset-4 transition-all duration-200">
                                Hindi
                            </Link>{' '}
                            through{' '}
                            <span className="relative inline-block group">
                                <span className="font-semibold">real conversations</span>
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-coral-400 group-hover:h-1 transition-all duration-200"></span>
                            </span>{' '}
                            and personalized feedback.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                            <Link to="/login" className="group">
                                <Button variant="coral" className="text-lg px-10 py-5 group-hover:scale-105 transition-transform duration-200 focus:ring-4 focus:ring-coral-300 active:scale-95">
                                    <span className="group-hover:tracking-wide transition-all duration-200">
                                        Start Learning Free
                                    </span>
                                </Button>
                            </Link>
                            <a href="#features" className="group">
                                <Button variant="outline" className="text-lg px-10 py-5 group-hover:bg-gray-100 transition-all duration-200 focus:ring-4 focus:ring-gray-300 active:scale-95">
                                    <span className="group-hover:tracking-wide transition-all duration-200">
                                        See How It Works
                                    </span>
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Floating Language Badges */}
                    <Link to="/english" className="absolute top-10 left-10 animate-float-slow hover:scale-110 transition-transform duration-300">
                        <div className="bg-white border-2 border-black rounded-full px-4 py-2 shadow-brutal-sm hover:shadow-brutal transition-all duration-200">
                            <span className="text-2xl">🇬🇧</span>
                        </div>
                    </Link>
                    <Link to="/french" className="absolute top-20 right-20 animate-float-medium hover:scale-110 transition-transform duration-300">
                        <div className="bg-white border-2 border-black rounded-full px-4 py-2 shadow-brutal-sm hover:shadow-brutal transition-all duration-200">
                            <span className="text-2xl">🇫🇷</span>
                        </div>
                    </Link>
                    <Link to="/mandarin" className="absolute bottom-20 left-20 animate-float hover:scale-110 transition-transform duration-300">
                        <div className="bg-white border-2 border-black rounded-full px-4 py-2 shadow-brutal-sm hover:shadow-brutal transition-all duration-200">
                            <span className="text-2xl">🇨🇳</span>
                        </div>
                    </Link>
                    <Link to="/hindi" className="absolute bottom-10 right-10 animate-float-slow hover:scale-110 transition-transform duration-300">
                        <div className="bg-white border-2 border-black rounded-full px-4 py-2 shadow-brutal-sm hover:shadow-brutal transition-all duration-200">
                            <span className="text-2xl">🇮🇳</span>
                        </div>
                    </Link>
                </div>
            </section>


            {/* IGCSE Specialization Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-500 text-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="inline-block bg-white text-primary-700 px-6 py-3 rounded-full border-2 border-black shadow-brutal-sm mb-6 font-bold">
                            🎓 Cambridge IGCSE Specialists
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Built Specifically for{' '}
                            <span className="font-handwritten text-coral-300">IGCSE Foreign Language</span>{' '}
                            Students
                        </h2>
                        <p className="text-xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">
                            We don't just teach languages—we prepare you for Cambridge IGCSE success. Every exercise,
                            practice session, and piece of feedback is meticulously aligned with the official IGCSE
                            syllabus and exam format for Second Language/Foreign Language qualifications.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                rotate: -2,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative bg-white text-gray-900 p-6 rounded-lg border-2 border-black shadow-brutal-sm hover:shadow-brutal-lg transition-all cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-coral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Link to="/english" className="block relative z-10">
                                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🇬🇧</div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-700 transition-colors">English (0510/0511)</h3>
                                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Core, Extended & Oral Endorsement</p>
                                <div className="mt-3 inline-flex items-center gap-2 text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span>Explore</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 2,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative bg-white text-gray-900 p-6 rounded-lg border-2 border-black shadow-brutal-sm hover:shadow-brutal-lg transition-all cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Link to="/french" className="block relative z-10">
                                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🇫🇷</div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-coral-600 transition-colors">French (0520)</h3>
                                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">All 4 papers - Core & Extended</p>
                                <div className="mt-3 inline-flex items-center gap-2 text-coral-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span>Explore</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{
                                scale: 1.05,
                                rotate: -2,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative bg-white text-gray-900 p-6 rounded-lg border-2 border-black shadow-brutal-sm hover:shadow-brutal-lg transition-all cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-coral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Link to="/mandarin" className="block relative z-10">
                                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🇨🇳</div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-primary-700 transition-colors">Mandarin (0547)</h3>
                                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Simplified & Traditional characters</p>
                                <div className="mt-3 inline-flex items-center gap-2 text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span>Explore</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 2,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative bg-white text-gray-900 p-6 rounded-lg border-2 border-black shadow-brutal-sm hover:shadow-brutal-lg transition-all cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-coral-100 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Link to="/hindi" className="block relative z-10">
                                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">🇮🇳</div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-coral-600 transition-colors">Hindi (0549)</h3>
                                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Devanagari script support</p>
                                <div className="mt-3 inline-flex items-center gap-2 text-coral-600 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    <span>Explore</span>
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Everything You Need to{' '}
                            <span className="font-handwritten text-primary-600">Succeed</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive tools designed to accelerate your language learning journey
                        </p>
                    </motion.div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={<Mic size={40} />}
                            title="Live Speaking Practice"
                            description="Practice real conversations with AI. Get instant pronunciation feedback and build confidence speaking naturally."
                            className="lg:col-span-2"
                        />
                        <FeatureCard
                            icon={<PenTool size={40} />}
                            title="Writing Exercises"
                            description="Submit essays and get detailed AI feedback on grammar, vocabulary, and style."
                        />
                        <FeatureCard
                            icon={<Sparkles size={40} />}
                            title="AI-Powered Feedback"
                            description="Receive personalized corrections and suggestions tailored to your learning level."
                        />
                        <FeatureCard
                            icon={<TrendingUp size={40} />}
                            title="Progress Tracking"
                            description="Watch your skills improve with detailed analytics and achievement milestones."
                            className="lg:col-span-2"
                        />
                        <FeatureCard
                            icon={<MessageCircle size={40} />}
                            title="Interactive Conversations"
                            description="Engage in realistic dialogues adapted to your proficiency level."
                            className="md:col-span-2 lg:col-span-1"
                        />
                        <FeatureCard
                            icon={<BookOpen size={40} />}
                            title="Comprehensive Resources"
                            description="Access grammar guides, vocabulary lists, and cultural insights for each language."
                            className="md:col-span-2 lg:col-span-2"
                        />
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Start Learning in{' '}
                            <span className="font-handwritten text-coral-500">3 Simple Steps</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: '01', title: 'Choose Your Language', desc: 'Select from English, French, Mandarin, or Hindi' },
                            { step: '02', title: 'Start Practicing', desc: 'Speak, write, and interact with AI-powered exercises' },
                            { step: '03', title: 'Track Progress', desc: 'Watch your skills grow with detailed feedback' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="text-center"
                            >
                                <div className="inline-block bg-primary-500 text-white font-handwritten text-4xl font-bold w-20 h-20 rounded-full border-2 border-black shadow-brutal flex items-center justify-center mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-500 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Ready to{' '}
                            <span className="font-handwritten text-coral-400">Transform</span>{' '}
                            Your Language Skills?
                        </h2>
                        <p className="text-xl mb-8 text-gray-300">
                            Join thousands of learners mastering new languages with AI-powered practice
                        </p>
                        <Link to="/login">
                            <Button variant="coral" className="text-lg px-8 py-4">
                                Get Started Now - It's Free!
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t-2 border-black py-8 px-4">
                <div className="max-w-7xl mx-auto text-center text-gray-600">
                    <p className="font-handwritten text-xl text-primary-600 mb-2">LangGPT</p>
                    <p>© 2025 LangGPT. Your AI-powered language learning companion.</p>
                </div>
            </footer>
        </div>
    );
}
