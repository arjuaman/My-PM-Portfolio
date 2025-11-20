import React from 'react';
import { motion } from 'framer-motion';

interface LogPoseNavProps {
    activeSection: string;
    onNavigate: (section: string) => void;
}

const sections = [
    { id: 'home', label: 'Home Island' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Adventure Log' },
    { id: 'skills', label: 'Powers' },
    { id: 'games', label: 'Davy Back Fight' },
    { id: 'contact', label: 'Den Den Mushi' },
];

const LogPoseNav: React.FC<LogPoseNavProps> = ({ activeSection, onNavigate }) => {
    return (
        <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-op-brown/90 backdrop-blur-sm px-6 py-3 rounded-full border-4 border-op-gold shadow-2xl flex gap-4 items-center">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => onNavigate(section.id)}
                        className={`relative px-4 py-2 rounded-full font-wanted transition-all duration-300 ${activeSection === section.id
                            ? 'bg-op-red text-white scale-110'
                            : 'text-op-paper hover:text-op-gold'
                            }`}
                    >
                        {section.label}
                        {activeSection === section.id && (
                            <motion.div
                                layoutId="compass-needle"
                                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-op-gold"
                            />
                        )}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default LogPoseNav;
