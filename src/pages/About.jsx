import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';

const About = () => {
    return (
        <div className="pt-0">
            <section className="bg-primary-900 text-white min-h-[60vh] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary-900/80 z-10"></div>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-50 contrast-125"
                        style={{ filter: "hue-rotate(290deg)" }}
                    >
                        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="container mx-auto px-6 relative z-10 py-20 text-center">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl lg:text-6xl font-bold mb-6"
                    >
                        About Us
                    </motion.h1>
                    <p className="text-xl text-primary-200 max-w-3x2 leading-relaxed">
                        We are a team of passionate technologists dedicated to building the future.
                        Bridging the gap between complex problems and elegant solutions.
                    </p>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold mb-6">Since 2015</div>
                            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                At Diin Technologies, our mission is to empower businesses through innovative technology solutions.
                                We believe in the power of digital transformation to create value and drive growth.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                Since our founding, we have worked with startups and Fortune 500 companies alike,
                                delivering robust, scalable, and secure software that solves real-world problems.
                                We pride ourselves on our collaborative approach and commitment to excellence.
                            </p>

                            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                                <div>
                                    <h3 className="text-4xl font-bold text-primary-600 mb-2">500+</h3>
                                    <p className="text-gray-500">Projects Delivered</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl font-bold text-primary-600 mb-2">98%</h3>
                                    <p className="text-gray-500">Client Retention</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                                alt="Office workspace"
                                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Team />
            <Testimonials />
        </div >
    );
};

export default About;
