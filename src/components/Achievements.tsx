import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';
import type { Publication, Award, Project, VolunteerWork } from '../data/profile';

interface AchievementsProps {
    publications: Publication[];
    awards: Award[];
    projects: Project[];
    volunteerWork: VolunteerWork[];
}

type TabType = 'publications' | 'awards' | 'projects' | 'volunteer';

const Achievements: React.FC<AchievementsProps> = ({ publications, awards, projects, volunteerWork }) => {
    const { playClick, playHover } = useSound();
    const [activeTab, setActiveTab] = useState<TabType>('publications');

    const handleTabChange = (tab: TabType) => {
        playClick();
        setActiveTab(tab);
    };

    const tabs = [
        { id: 'publications' as TabType, label: 'PUBLICATIONS', icon: '📄' },
        { id: 'awards' as TabType, label: 'AWARDS', icon: '🏆' },
        { id: 'projects' as TabType, label: 'PROJECTS', icon: '💻' },
        { id: 'volunteer' as TabType, label: 'VOLUNTEER', icon: '🤝' },
    ];

    return (
        <div className="w-full max-w-6xl mx-auto p-4 pb-32">
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-4xl font-cyber text-cp-yellow mb-2 text-shadow-neon">ACHIEVEMENTS & CONTRIBUTIONS</h2>
                <p className="font-mono text-cp-dim text-sm">Publications, Awards, Projects & Volunteer Work</p>
            </div>

            {/* Sub-Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        onMouseEnter={playHover}
                        className={`px-4 py-2 font-cyber text-sm transition-all duration-200 border-2 ${activeTab === tab.id
                            ? 'bg-cp-yellow text-cp-black border-cp-yellow shadow-[0_0_15px_rgba(252,238,10,0.5)]'
                            : 'bg-cp-dark text-cp-dim border-cp-dim hover:border-cp-blue hover:text-cp-blue'
                            }`}
                    >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                {/* Publications */}
                {activeTab === 'publications' && (
                    <div className="space-y-4">
                        {publications.map((pub, index) => (
                            <div
                                key={index}
                                className="bg-cp-dark/70 backdrop-blur-md border-l-4 border-cp-pink p-6 hover:bg-cp-pink/5 transition-all duration-300"
                                onMouseEnter={playHover}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-cyber text-cp-pink text-lg">{pub.title}</h3>
                                    <span className="text-cp-blue text-xs font-mono">{pub.date}</span>
                                </div>
                                <div className="flex items-center gap-4 mb-3">
                                    <span className="text-cp-yellow text-sm font-tech">{pub.publisher}</span>
                                    <span className="text-cp-dim text-xs font-mono">DOMAIN: {pub.domain}</span>
                                </div>
                                <p className="text-cp-text text-sm font-tech mb-4">{pub.description}</p>
                                <div className="space-y-1">
                                    {pub.achievements.map((achievement, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <span className="text-cp-yellow text-xs">▸</span>
                                            <span className="text-cp-text text-xs font-tech">{achievement}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Awards */}
                {activeTab === 'awards' && (
                    <div className="grid md:grid-cols-2 gap-4">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="bg-cp-dark/70 backdrop-blur-md border-2 border-cp-yellow p-5 hover:shadow-[0_0_20px_rgba(252,238,10,0.3)] transition-all duration-300 relative overflow-hidden group"
                                onMouseEnter={playHover}
                            >
                                <div className="absolute top-0 right-0 w-16 h-16 bg-cp-yellow/10 blur-2xl group-hover:bg-cp-yellow/20 transition-all"></div>
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-cyber text-cp-yellow text-base">{award.title}</h3>
                                    <span className="text-cp-blue text-xs font-mono">{award.date}</span>
                                </div>
                                <p className="text-cp-pink text-xs font-tech mb-3">{award.issuer}</p>
                                <p className="text-cp-text text-sm font-tech">{award.description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Projects */}
                {activeTab === 'projects' && (
                    <div className="space-y-4">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-cp-dark/70 backdrop-blur-md border border-cp-blue p-5 hover:border-cp-yellow transition-all duration-300"
                                onMouseEnter={playHover}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="font-cyber text-cp-blue text-lg">{project.name}</h3>
                                    <span className="text-cp-dim text-xs font-mono">{project.period}</span>
                                </div>
                                <p className="text-cp-text text-sm font-tech mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-cp-blue/20 text-cp-blue px-3 py-1 font-mono border border-cp-blue/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.achievements && project.achievements.length > 0 && (
                                    <div className="space-y-1 mt-3 pt-3 border-t border-cp-dim/30">
                                        {project.achievements.map((achievement, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <span className="text-cp-yellow text-xs">✓</span>
                                                <span className="text-cp-text text-xs font-tech">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Volunteer Work */}
                {activeTab === 'volunteer' && (
                    <div className="grid md:grid-cols-2 gap-4">
                        {volunteerWork.map((work, index) => (
                            <div
                                key={index}
                                className="bg-cp-dark/70 backdrop-blur-md border-l-4 border-cp-pink p-5 hover:bg-cp-pink/5 transition-all duration-300"
                                onMouseEnter={playHover}
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-cyber text-cp-pink text-base">{work.role}</h3>
                                    <span className="text-cp-blue text-xs font-mono">{work.period}</span>
                                </div>
                                <p className="text-cp-yellow text-sm font-tech mb-2">{work.organization}</p>
                                <div className="text-cp-dim text-xs font-mono mb-3">CAUSE: {work.cause}</div>
                                <p className="text-cp-text text-sm font-tech">{work.description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Achievements;
