import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-2 bg-primary-600 rounded-lg">
                                <Code2 className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold">Diin Technologies</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Transforming businesses through innovative technology solutions.
                            Building the future of digital excellence.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                            <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li className="text-gray-400">Web Development</li>
                            <li className="text-gray-400">Mobile Apps</li>
                            <li className="text-gray-400">Cloud Solutions</li>
                            <li className="text-gray-400">AI & Machine Learning</li>
                            <li className="text-gray-400">Cybersecurity</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-primary-500 mt-1" />
                                <span><a href="https://maps.app.goo.gl/en2xuHeiZSQrFtPK7?g_st=aw">Noida Sector 2, Uttar Pradesh</a></span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="w-5 h-5 text-primary-500" />
                                <span>+91 8451919191</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5 text-primary-500" />
                                <span><a href="mailto:hello@diintechnologies.com">hello@diintechnologies.com</a></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2025 Diin Technologies. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
