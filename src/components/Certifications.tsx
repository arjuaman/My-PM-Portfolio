import React from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';
import type { Certification } from '../data/profile';

interface CertificationsProps {
    certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
    const { playHover } = useSound();

    return (
        <div className="w-full max-w-6xl mx-auto p-4 pb-32">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-cyber text-cp-yellow mb-2 text-shadow-neon">CERTIFICATIONS</h2>
                <p className="font-mono text-cp-dim text-sm">Professional certifications and credentials</p>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-cp-dark/70 backdrop-blur-md border border-cp-dim p-5 hover:border-cp-yellow transition-all duration-300 group relative overflow-hidden"
                        onMouseEnter={playHover}
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-cp-yellow/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-3">
                                <h3 className="font-cyber text-cp-yellow text-base group-hover:text-shadow-neon transition-all flex-1 pr-2">
                                    {cert.name}
                                </h3>
                                <span className="text-cp-blue text-xs font-mono whitespace-nowrap">{cert.date}</span>
                            </div>

                            <p className="text-cp-text text-sm font-tech mb-3">{cert.authority}</p>

                            {cert.credentialId && (
                                <div className="bg-cp-black/30 p-2 mb-3 border-l-2 border-cp-blue">
                                    <p className="text-cp-dim text-[10px] font-mono">CREDENTIAL ID</p>
                                    <p className="text-cp-blue text-xs font-mono break-all">{cert.credentialId}</p>
                                </div>
                            )}

                            {cert.skills && cert.skills.length > 0 && (
                                <div className="flex flex-wrap gap-1 mt-3">
                                    {cert.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="text-[9px] bg-cp-blue/20 text-cp-blue px-2 py-1 font-mono border border-cp-blue/30"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
