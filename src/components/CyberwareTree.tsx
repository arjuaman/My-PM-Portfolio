import React, { useState } from 'react';
import { useSound } from '../hooks/useSound';
import type { Skill } from '../data/profile';

interface CyberwareTreeProps {
    skills: Skill[];
}

const CyberwareTree: React.FC<CyberwareTreeProps> = ({ skills }) => {
    const { playHover } = useSound();
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

    return (
        <div className="w-full max-w-5xl mx-auto p-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-cyber text-cp-yellow mb-2 text-shadow-neon">SKILLS & EXPERTISE</h2>
                <p className="font-mono text-cp-dim text-sm">Hover over each skill to learn more</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative"
                        onMouseEnter={() => {
                            playHover();
                            setHoveredSkill(index);
                        }}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        {/* Hexagon Shape / Circuit Card */}
                        <div className="bg-cp-dark border border-cp-dim p-5 h-full flex flex-col hover:border-cp-blue hover:bg-cp-blue/5 transition-all duration-300 relative overflow-hidden">
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cp-dim group-hover:border-cp-blue transition-colors"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cp-dim group-hover:border-cp-blue transition-colors"></div>

                            {/* Icon Placeholder (Circuit) */}
                            <div className="mb-3 opacity-50 group-hover:opacity-100 transition-opacity flex justify-center">
                                <div className="w-10 h-10 border-2 border-cp-dim rounded-full flex items-center justify-center group-hover:border-cp-blue group-hover:shadow-[0_0_10px_#00F0FF]">
                                    <div className="w-2 h-2 bg-cp-yellow rounded-full animate-pulse"></div>
                                </div>
                            </div>

                            <h3 className="font-cyber text-sm text-cp-text group-hover:text-cp-blue transition-colors uppercase tracking-wider text-center mb-3">
                                {skill.name}
                            </h3>

                            {/* Proficiency Bar */}
                            <div className="mt-auto">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[10px] font-mono text-cp-dim">PROFICIENCY</span>
                                    <span className="text-xs font-cyber text-cp-yellow">{skill.proficiency}%</span>
                                </div>
                                <div className="w-full bg-cp-dim/20 h-2 rounded-full overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-cp-blue via-cp-yellow to-cp-pink h-full group-hover:animate-pulse transition-all duration-300"
                                        style={{ width: `${skill.proficiency}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Description Overlay */}
                            {hoveredSkill === index && (
                                <div className="absolute inset-0 bg-cp-black/95 backdrop-blur-sm p-4 flex flex-col justify-center items-center border-2 border-cp-blue animate-fade-in">
                                    <div className="text-cp-yellow font-cyber text-xs mb-2 uppercase tracking-widest">{skill.name}</div>
                                    <p className="text-cp-text font-tech text-sm text-center leading-relaxed">
                                        {skill.description}
                                    </p>
                                    <div className="mt-3 text-cp-blue font-mono text-xs">
                                        LEVEL: {skill.proficiency}/100
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CyberwareTree;

