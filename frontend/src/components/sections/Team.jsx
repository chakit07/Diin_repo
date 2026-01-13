import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
    {
        name: "Alex Morgan",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
        bio: "Visionary leader with 15+ years in software engineering and strategic management."
    },
    {
        name: "Lisa Wong",
        role: "Head of Engineering",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
        bio: "Expert in distributed systems and cloud architecture. Previously at Google and Amazon."
    },
    {
        name: "James Carter",
        role: "Design Director",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
        bio: "Award-winning designer passionate about creating intuitive and beautiful user experiences."
    },
    {
        name: "Maya Patel",
        role: "Lead Data Scientist",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop",
        bio: "Specializing in machine learning algorithms and predictive analytics for enterprise data."
    }
];

import TiltCard from '../ui/TiltCard';

const Team = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        The talented individuals driving innovation and success at Diin Technologies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <TiltCard key={index} className="h-full">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full border border-gray-100"
                            >
                                <div className="overflow-hidden h-64">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-500 text-sm mb-6">{member.bio}</p>
                                    <div className="flex gap-4 text-gray-400">
                                        <a href="#" className="hover:text-primary-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
                                        <a href="#" className="hover:text-primary-600 transition-colors"><Twitter className="w-5 h-5" /></a>
                                        <a href="#" className="hover:text-primary-600 transition-colors"><Mail className="w-5 h-5" /></a>
                                    </div>
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
