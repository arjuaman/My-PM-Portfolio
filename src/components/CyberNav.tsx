import React from 'react';
import { motion } from 'framer-motion';
import { useSound } from '../hooks/useSound';

interface CyberNavProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const navItems = [
    { id: 'home', icon: '🏠', label: 'HOME' },
    { id: 'experience', icon: '💼', label: 'EXPERIENCE' },
    { id: 'skills', icon: '⚡', label: 'SKILLS' },
    { id: 'certifications', icon: '🎓', label: 'CERTIFICATIONS' },
    { id: 'achievements', icon: '🏆', label: 'ACHIEVEMENTS' },
    { id: 'games', icon: '🎮', label: 'FUNZONE' },
    { id: 'contact', icon: '📧', label: 'CONTACT' },
];

const CyberNav: React.FC<CyberNavProps> = ({ activeTab, onTabChange }) => {
    const { playNav } = useSound();

    const handleTabChange = (tabId: string) => {
        playNav();
        onTabChange(tabId);
    };

    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-cp-black/90 border-t-2 border-cp-yellow backdrop-blur-md">
            {/* Decorative Top Line with Glitch */}
            <div className="absolute -top-1 left-0 w-full h-1 bg-cp-blue animate-pulse"></div>

            <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-2">
                {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleTabChange(item.id)}
                            className={`relative group flex flex-col items-center justify-center p-2 w-full transition-all duration-200 ${isActive ? 'text-cp-yellow' : 'text-cp-dim hover:text-cp-blue'}
                                `}
                        >
                            {/* Background Highlight for Active */}
                            {isActive && (
                                <div className="absolute inset-0 bg-cp-yellow/10 clip-path-slant"></div>
                            )}

                            <span className={`text-2xl mb-1 transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                                {item.icon}
                            </span>
                            <span className="text-[10px] font-cyber tracking-widest uppercase">
                                {item.label}
                            </span>

                            {/* Active Indicator Bar */}
                            {isActive && (
                                <motion.div
                                    layoutId="cyber-indicator"
                                    className="absolute bottom-0 w-full h-1 bg-cp-yellow shadow-[0_0_10px_#FCEE0A]"
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CyberNav;

