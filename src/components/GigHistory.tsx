import React, { useState } from 'react';
import { useSound } from '../hooks/useSound';
import type { Profile } from '../data/profile';

interface GigHistoryProps {
    experience: Profile['experience'];
}

const GigHistory: React.FC<GigHistoryProps> = ({ experience }) => {
    const { playClick, playHover } = useSound();
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        playClick();
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h2 className="text-4xl font-cyber text-cp-blue mb-8 text-shadow-neon border-b-2 border-cp-blue inline-block pr-8">
                WORK EXPERIENCE
            </h2>

            <div className="space-y-8 relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-cp-dim ml-4 md:ml-0"></div>

                {experience.map((exp, index) => (
                    <div key={index} className="relative pl-12 md:pl-8 group">
                        {/* Timeline Node */}
                        <div className="absolute left-0 top-0 w-3 h-3 bg-cp-bg border-2 border-cp-yellow rounded-full ml-[10px] md:-ml-[5px] z-10 group-hover:bg-cp-yellow group-hover:scale-125 transition-all duration-300"></div>

                        <div
                            className="bg-cp-dark/80 border border-cp-dim p-6 hover:border-cp-pink transition-colors duration-300 relative overflow-hidden"
                            onMouseEnter={playHover}
                        >
                            {/* Scanline Effect on Hover */}
                            <div className="absolute inset-0 bg-cp-pink/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"></div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                <div>
                                    <h3 className="text-2xl font-cyber text-cp-text group-hover:text-cp-pink transition-colors">{exp.role}</h3>
                                    <h4 className="text-xl font-tech text-cp-blue">{exp.company}</h4>
                                </div>
                                <div className="text-right mt-2 md:mt-0">
                                    <div className="text-cp-yellow font-mono text-sm bg-cp-yellow/10 px-2 py-1 border border-cp-yellow/30">
                                        {exp.period}
                                    </div>
                                    <div className="text-cp-dim font-mono text-xs mt-1">{exp.location}</div>
                                </div>
                            </div>

                            <ul className="space-y-2 mb-4">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="font-tech text-cp-text/80 flex items-start">
                                        <span className="text-cp-pink mr-2">»</span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>

                            {/* Achievements Section */}
                            {exp.achievements && exp.achievements.length > 0 && (
                                <div className="mt-4 pt-4 border-t border-cp-yellow/30">
                                    <button
                                        onClick={() => toggleExpand(index)}
                                        className="flex items-center gap-2 text-cp-yellow font-cyber text-sm hover:text-shadow-neon transition-all mb-3"
                                    >
                                        <span className={`transition-transform ${expandedIndex === index ? 'rotate-90' : ''}`}>▸</span>
                                        KEY_ACHIEVEMENTS ({exp.achievements.length})
                                    </button>
                                    {expandedIndex === index && (
                                        <ul className="space-y-2 pl-4">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="font-tech text-cp-text/90 text-sm flex items-start">
                                                    <span className="text-cp-yellow mr-2">✓</span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-cp-dim/30">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="text-xs font-mono text-cp-blue border border-cp-blue/30 px-2 py-1 hover:bg-cp-blue hover:text-cp-black transition-colors cursor-default">
                                        [{skill}]
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GigHistory;
