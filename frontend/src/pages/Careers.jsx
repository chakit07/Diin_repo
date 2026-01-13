import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { Briefcase, Gift, Clock, Users, Zap, Coffee } from 'lucide-react';

const positions = [
    {
        role: "Senior Frontend Developer",
        department: "Engineering",
        type: "Remote / Full-time",
        description: "We are looking for an experienced React developer to lead our frontend architecture.",
        tags: ["React", "TypeScript", "Tailwind"]
    },
    {
        role: "Backend Engineer",
        department: "Engineering",
        type: "Hybrid / Full-time",
        description: "Join our core team to build scalable APIs and microservices designed for high performance.",
        tags: ["Go", "PostgreSQL", "Docker"]
    },
    {
        role: "UX/UI Designer",
        department: "Design",
        type: "Remote / Contract",
        description: "Shape the user experience of our products with intuitive and beautiful design solutions.",
        tags: ["Figma", "Prototyping", "User Research"]
    },
    {
        role: "Product Manager",
        department: "Product",
        type: "Remote / Full-time",
        description: "Drive the product vision and work closely with engineering and design to deliver value.",
        tags: ["Strategy", "Agile", "Roadmapping"]
    }
];

const benefits = [
    { icon: <Gift className="w-6 h-6" />, title: "Competitive Salary", desc: "Top-tier compensation packages" },
    { icon: <Clock className="w-6 h-6" />, title: "Flexible Hours", desc: "Work when you are most productive" },
    { icon: <Users className="w-6 h-6" />, title: "Remote First", desc: "Work from anywhere in the world" },
    { icon: <Zap className="w-6 h-6" />, title: "Health Insurance", desc: "Comprehensive medical coverage" },
    { icon: <Coffee className="w-6 h-6" />, title: "Learning Budget", desc: "Stipend for courses and conferences" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Stock Options", desc: "Own a piece of the company" }
];

const Careers = () => {
    return (
        <div className="pt-0 min-h-screen">
            <section className="py-24 bg-primary-50 text-center relative overflow-hidden min-h-[50vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary-50/90 z-10"></div>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-40 mix-blend-multiply"
                        style={{ filter: "sepia(1) hue-rotate(50deg)" }}
                    >
                        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900"
                    >
                        Join Our Mission
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We're looking for curious, passionate, and driven individuals to help us build the future of technology.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
                        <p className="text-gray-600">We care about our team and provide the best environment for growth.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 hover:border-primary-100 hover:bg-primary-50/50 transition-colors">
                                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>

                        <div className="space-y-4">
                            {positions.map((job, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                                >
                                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                                        <div className="flex-grow">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{job.role}</h3>
                                                <span className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-semibold rounded-full uppercase tracking-wider">{job.department}</span>
                                            </div>
                                            <p className="text-gray-500 text-sm mb-3">{job.type}</p>
                                            <p className="text-gray-600 mb-4">{job.description}</p>
                                            <div className="flex gap-2">
                                                {job.tags.map(tag => (
                                                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Button variant="outline">Apply Now</Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-gray-600 mb-4">Don't see a position that fits?</p>
                            <a href="/contact" className="font-semibold text-primary-600 hover:underline">Send us your resume anyway</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
