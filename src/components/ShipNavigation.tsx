import React from 'react';
import { motion } from 'framer-motion';

interface ShipNavigationProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const navItems = [
    { id: 'home', name: 'Gomu Gomu no Mi', icon: '🍈', label: 'Home' },
    { id: 'experience', name: 'Mera Mera no Mi', icon: '🍊', label: 'Adventure' },
    { id: 'skills', name: 'Yami Yami no Mi', icon: '🍇', label: 'Power' },
    { id: 'games', name: 'Ope Ope no Mi', icon: '🍓', label: 'Games' },
    { id: 'contact', name: 'Hana Hana no Mi', icon: '🌸', label: 'Contact' },
];

const ShipNavigation: React.FC<ShipNavigationProps> = ({ activeTab, onTabChange }) => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4 pt-2 bg-gradient-to-t from-op-blue via-op-blue/90 to-transparent">
            <div className="max-w-4xl mx-auto bg-op-brown rounded-2xl border-4 border-op-gold shadow-2xl p-2 flex justify-around items-end relative">
                {/* Wood Texture Overlay */}
                <div className="absolute inset-0 rounded-xl opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] pointer-events-none"></div>

                {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => onTabChange(item.id)}
                            className={`relative group flex flex-col items-center transition-all duration-300 ${isActive ? '-translate-y-6' : 'hover:-translate-y-2'}`}
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center text-4xl border-4 shadow-lg transition-all duration-300 ${isActive
                                    ? 'bg-op-red border-op-gold scale-110'
                                    : 'bg-op-paper border-op-brown group-hover:bg-op-cream'
                                }`}>
                                {item.icon}
                            </div>

                            {/* Label (Only visible on hover or active) */}
                            <div className={`mt-2 px-3 py-1 rounded bg-op-dark text-op-gold text-xs font-wanted transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}>
                                {item.label}
                            </div>

                            {/* Active Indicator (Haki Aura) */}
                            {isActive && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className="absolute -top-2 inset-x-0 h-full w-full rounded-full border-4 border-purple-500 opacity-50 blur-md z-[-1]"
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ShipNavigation;
