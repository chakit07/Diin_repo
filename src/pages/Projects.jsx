import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Revolution",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1064&auto=format&fit=crop",
        description: "A complete overhaul of a major retail platform, resulting in a 40% increase in conversion rates.",
        tags: ["React", "Node.js", "AWS"]
    },
    {
        title: "FinTech Dashboard",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        description: "Real-time financial data visualization dashboard for a leading investment firm.",
        tags: ["Vue.js", "D3.js", "Firebase"]
    },
    {
        title: "HealthCare App",
        category: "Mobile Development",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
        description: "HIPAA-compliant telemedicine application connecting patients with specialists worldwide.",
        tags: ["React Native", "GraphQL", "Python"]
    },
    {
        title: "Smart City IoT",
        category: "Cloud Solutions",
        image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop",
        description: "Integrated IoT management platform for smart street lighting and waste management.",
        tags: ["Go", "MQTT", "Azure"]
    },
    {
        title: "AI Customer Support",
        category: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2606&auto=format&fit=crop",
        description: "Automated customer service agent handling 80% of routine inquiries with high accuracy.",
        tags: ["Python", "TensorFlow", "NLP"]
    },
    {
        title: "Logistics Tracker",
        category: "Web Application",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
        description: "Real-time supply chain visibility tool for global logistics operations.",
        tags: ["Angular", ".NET", "PostgreSQL"]
    }
];

const Projects = () => {
    return (
        <div className="pt-0 min-h-screen bg-gray-50">
            <section className="bg-gray-900 text-white text-center min-h-[60vh] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gray-900/80 z-10"></div>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                        style={{ filter: "hue-rotate(180deg) show-contrast(1.2)" }}
                    >
                        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="container mx-auto px-6 relative z-10 py-20">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl lg:text-6xl font-bold mb-6"
                    >
                        Our Work
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        A selection of projects that showcase our expertise and passion for quality.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                    <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                                        View Case Study <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-primary-600 font-semibold text-sm mb-3">{project.category}</span>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <Button size="lg">View Github Portfolio</Button>
                </div>
            </div>
        </div >
    );
};

export default Projects;
