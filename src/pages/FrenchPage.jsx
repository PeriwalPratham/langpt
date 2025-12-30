import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Headphones, Mic, PenTool, Award, CheckCircle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import { igcseLanguages } from '../data/igcseData';

export default function FrenchPage() {
    const lang = igcseLanguages.french;

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative grid-bg py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-8 transition-colors">
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <div className="text-6xl mb-4">{lang.flag}</div>
                        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                            {lang.fullTitle}
                        </h1>
                        <div className="inline-block bg-primary-100 border-2 border-black px-6 py-2 shadow-brutal-sm mb-6">
                            <p className="font-mono font-bold text-primary-700">
                                Subject Code: {lang.subjectCode}
                            </p>
                        </div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {lang.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* IGCSE Specialization Banner */}
            <section className="py-12 px-4 bg-primary-500 text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Award className="inline-block mb-4" size={48} />
                        <h2 className="text-3xl font-bold mb-4">
                            We Specialize in <span className="font-handwritten">IGCSE Success</span>
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto">
                            Our platform is specifically designed for Cambridge IGCSE French Foreign Language students.
                            Every exercise, practice session, and feedback is aligned with the official IGCSE syllabus and exam format.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Exam Structure - Core */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-3 text-center">
                            {lang.examStructure.core.name}
                        </h2>
                        <p className="text-center text-gray-600 mb-8">All four papers for Core tier assessment</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {lang.examStructure.core.papers.map((paper, index) => {
                            const icons = [<Headphones size={24} />, <BookOpen size={24} />, <Mic size={24} />, <PenTool size={24} />];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card-brutal bg-white p-6 hover:shadow-brutal-lg transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-coral-100 p-3 rounded-lg border-2 border-black">
                                            <div className="text-coral-600">{icons[index]}</div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{paper.number}</h3>
                                            <h4 className="text-lg font-semibold text-primary-600 mb-3">{paper.title}</h4>
                                            <p className="text-gray-600 mb-4">{paper.description}</p>
                                            <div className="grid grid-cols-3 gap-3 text-sm">
                                                <div className="bg-gray-100 p-2 rounded border border-gray-300">
                                                    <p className="font-semibold text-gray-500">Duration</p>
                                                    <p className="font-bold">{paper.duration}</p>
                                                </div>
                                                <div className="bg-gray-100 p-2 rounded border border-gray-300">
                                                    <p className="font-semibold text-gray-500">Marks</p>
                                                    <p className="font-bold">{paper.marks}</p>
                                                </div>
                                                <div className="bg-gray-100 p-2 rounded border border-gray-300">
                                                    <p className="font-semibold text-gray-500">Weight</p>
                                                    <p className="font-bold">{paper.weight}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Exam Structure - Extended */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-3 text-center">
                            {lang.examStructure.extended.name}
                        </h2>
                        <p className="text-center text-gray-600 mb-8">All four papers for Extended tier assessment</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {lang.examStructure.extended.papers.map((paper, index) => {
                            const icons = [<Headphones size={24} />, <BookOpen size={24} />, <Mic size={24} />, <PenTool size={24} />];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="card-brutal bg-white p-6 hover:shadow-brutal-lg transition-all"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary-100 p-3 rounded-lg border-2 border-black">
                                            <div className="text-primary-600">{icons[index]}</div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{paper.number}</h3>
                                            <h4 className="text-lg font-semibold text-primary-600 mb-3">{paper.title}</h4>
                                            <p className="text-gray-600 mb-4">{paper.description}</p>
                                            <div className="grid grid-cols-3 gap-3 text-sm">
                                                <div className="bg-gray-100 p-2 rounded border border-gray-300">
                                                    <p className="font-semibold text-gray-500">Duration</p>
                                                    <p className="font-bold">{paper.duration}</p>
                                                </div>
                                                <div className="bg-gray-100 p-2 rounded border border-gray-300">
                                                    <p className="font-semibold text-gray-500">Marks</p>
                                                    <p className="font-bold">{paper.marks}</p>
                                                </div>
                                                <div className="bg-gray-100 p-2 rounded border border-gray-300">
                                                    <p className="font-semibold text-gray-500">Weight</p>
                                                    <p className="font-bold">{paper.weight}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Skills Assessed */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Skills <span className="font-handwritten text-primary-600">Assessed</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {lang.skillsAssessed.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 bg-white border-2 border-black p-4 shadow-brutal-sm hover:shadow-brutal transition-all"
                            >
                                <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                                <span className="font-semibold">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Topic Areas */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-4">
                            Topic <span className="font-handwritten text-coral-500">Areas</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            All practice materials cover these essential IGCSE topic areas
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {lang.topicAreas.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="bg-white border-2 border-black p-4 text-center shadow-brutal-sm hover:shadow-brutal hover:-translate-y-1 transition-all cursor-default"
                            >
                                <p className="font-semibold">{topic}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-500 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Ready to Master{' '}
                            <span className="font-handwritten text-coral-400">IGCSE French?</span>
                        </h2>
                        <p className="text-xl mb-8 text-gray-300">
                            Start practicing with AI-powered exercises designed specifically for Cambridge IGCSE success
                        </p>
                        <Link to="/login">
                            <Button variant="coral" className="text-lg px-8 py-4">
                                Commencer Maintenant - Gratuit!
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
