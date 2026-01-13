import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Smartphone, Brain, Lock, Cloud } from 'lucide-react';

const services = [
    {
        icon: <Monitor className="w-8 h-8" />,
        title: 'Web Development',
        description: 'Custom web applications built with modern frameworks and best practices.'
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: 'Mobile Solutions',
        description: 'Native and cross-platform mobile apps for iOS and Android devices.'
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: 'Cloud Services',
        description: 'Scalable cloud infrastructure design, migration, and management.'
    },
    {
        icon: <Brain className="w-8 h-8" />,
        title: 'AI & ML',
        description: 'Intelligent solutions powering data-driven decision making.'
    },
    {
        icon: <Lock className="w-8 h-8" />,
        title: 'Cybersecurity',
        description: 'Comprehensive security assessments and protection strategies.'
    },
    {
        icon: <Server className="w-8 h-8" />,
        title: 'DevOps',
        description: 'Streamlined CI/CD pipelines and infrastructure automation.'
    }
];

import TiltCard from '../ui/TiltCard';

const ServicesSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
                    <p className="text-gray-600">
                        Comprehensive technology solutions tailored to your business needs.
                        We leverage the latest tools to drive innovation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <TiltCard key={index} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group h-full border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
