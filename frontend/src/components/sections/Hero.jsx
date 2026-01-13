import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
    return (
        <section className="relative overflow-hidden min-h-screen flex items-center pt-20">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gray-900/70 z-10"></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-2/3 max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 backdrop-blur-sm text-primary-200 text-sm font-medium mb-6 border border-primary-500/30">
                            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                            Leading IT Solutions Provider
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Innovate Order. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                                Reshape Future.
                            </span>
                        </h1>

                        <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
                            We deliver cutting-edge technology solutions that transform businesses.
                            From AI-driven insights to cloud-native applications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/contact">
                                Start Your Project <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button variant="outline" className="border-white text-white hover:bg-white/10 hover:border-white" href="/projects">
                                View Our Work
                            </Button>
                        </div>

                        <div className="mt-12 flex items-center gap-8 text-gray-400">
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary-400" />
                                <span>Global Reach</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-primary-400" />
                                <span>Secure by Design</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-primary-400" />
                                <span>Fast Delivery</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
