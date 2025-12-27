import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';

const Contact = () => {
    return (
        <div className="pt-0 bg-gray-50 min-h-screen">
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gray-50/95 z-10"></div>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-20"
                        style={{ filter: "hue-rotate(90deg)" }}
                    >
                        <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="p-10 bg-primary-900 text-white">
                                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                                <p className="mb-8 text-primary-200">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-semibold mb-2">Address</h3>
                                        <p className="text-primary-200">Noida Sector 2, Uttar Pradesh</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Email</h3>
                                        <p className="text-primary-200">hello@diintechnologies.com</p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Phone</h3>
                                        <p className="text-primary-200">+91 8451919191</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10">
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="xyz" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="xyz@gmail.com" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
