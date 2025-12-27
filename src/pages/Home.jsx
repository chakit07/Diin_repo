import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import Testimonials from '../components/sections/Testimonials';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />
            <ServicesSection />

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold mb-6">Why Choose Diin Technologies?</h2>
                            <p className="text-gray-600 mb-8 text-lg">
                                We combine technical expertise with business acumen to deliver solutions that drive real value.
                                Our agile approach ensures rapid delivery without compromising on quality.
                            </p>

                            <div className="space-y-4">
                                {[
                                    "Agile Development Methodology",
                                    "Top 1% Engineering Talent",
                                    "Enterprise-Grade Security",
                                    "24/7 Support and Maintenance",
                                    "Cloud-Native Architecture",
                                    "Data-Driven Insights"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary-600 text-shrink-0" />
                                        <span className="text-gray-800 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* Call to Action Section */}
            <section className="py-24 relative overflow-hidden bg-primary-900">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Ready to Transform Your Business?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        From startups to enterprises, we help you build the future with cutting-edge technology solutions.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <a
                            href="/contact"
                            className="inline-block bg-white text-primary-900 font-bold px-8 py-4 rounded-lg hover:bg-primary-50 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-white/20"
                        >
                            Get a Free Consultation
                        </a>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
