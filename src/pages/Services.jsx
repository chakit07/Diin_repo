import React from 'react';
import ServicesSection from '../components/sections/ServicesSection';
import { motion } from 'framer-motion';

const Services = () => {
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
                        Our Services
                    </motion.h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        End-to-end technology services to help your business grow.
                    </p>
                </div>
            </section>
            <ServicesSection />
        </div >
    );
};

export default Services;
