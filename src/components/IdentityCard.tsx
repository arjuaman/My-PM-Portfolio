import React from 'react';

import type { Profile } from '../data/profile';

interface IdentityCardProps {
    profile: Profile;
}

const IdentityCard: React.FC<IdentityCardProps> = ({ profile }) => {
    return (
        <div className="relative w-full min-h-screen px-6 py-6">
            {/* Hero Section - Full Width */}
            <div className="max-w-[1800px] mx-auto mb-8">
                <div className="grid lg:grid-cols-[1fr_auto] gap-4 items-start">
                    <div className="bg-cp-dark/90 backdrop-blur-md p-6 border-l-4 border-cp-yellow shadow-[0_0_25px_rgba(252,238,10,0.2)]">
                        <h1 className="text-5xl xl:text-6xl font-cyber text-cp-yellow text-shadow-glitch uppercase tracking-tighter font-black mb-3">
                            {profile.name}
                        </h1>
                        <p className="text-cp-blue font-tech text-2xl xl:text-3xl tracking-wide uppercase font-bold mb-3">
                            {profile.title}
                        </p>
                        <p className="text-cp-text font-tech text-base xl:text-lg leading-relaxed max-w-4xl">
                            {profile.about}
                        </p>
                    </div>

                    <div className="bg-cp-dark/80 backdrop-blur-md p-4 border-2 border-cp-pink whitespace-nowrap">
                        <div className="text-cp-pink font-cyber text-sm animate-pulse">STATUS: ACTIVE</div>
                        <div className="text-cp-dim font-mono text-xs mt-1">ID: 2077-NC-8492</div>
                    </div>
                </div>
            </div>

            {/* Main Content - Three Column Layout */}
            <div className="max-w-[1800px] mx-auto">
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Column 1 - Avatar */}
                    <div className="flex flex-col gap-6">
                        {/* Avatar - 50% smaller */}
                        <div className="w-full max-w-xs mx-auto">
                            <div className="bg-cp-dark border-4 border-cp-blue relative overflow-hidden group shadow-[0_0_40px_rgba(0,240,255,0.25)] aspect-square">
                                {/* Glitch Effect */}
                                <div className="absolute inset-0 bg-cp-blue/20 mix-blend-overlay group-hover:bg-cp-pink/20 transition-colors duration-300"></div>

                                {/* Profile Image */}
                                <img
                                    src={profile.image}
                                    alt={profile.name}
                                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                                />

                                {/* Scan Lines */}
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,240,255,0.03)_50%)] bg-[length:100%_4px] pointer-events-none"></div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-cp-yellow"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-cp-yellow"></div>
                            </div>
                        </div>

                        {/* Location and Role Cards */}
                        <div className="bg-cp-dark/70 backdrop-blur-md p-5 border-l-4 border-cp-yellow">
                            <h3 className="text-cp-dim text-xs font-cyber mb-2 uppercase">Location</h3>
                            <p className="text-cp-yellow font-mono text-lg">{profile.contact.location}</p>
                        </div>

                        <div className="bg-cp-dark/70 backdrop-blur-md p-5 border-l-4 border-cp-yellow">
                            <h3 className="text-cp-dim text-xs font-cyber mb-2 uppercase">Current Role</h3>
                            <p className="text-cp-yellow font-mono text-lg">Product Manager</p>
                        </div>
                    </div>

                    {/* Column 2 - Education */}
                    <div className="bg-cp-dark/70 backdrop-blur-md p-6 border-l-4 border-cp-pink h-fit">
                        <h3 className="text-cp-pink text-sm font-cyber mb-5 uppercase tracking-widest">Education</h3>
                        <div className="space-y-4">
                            {profile.education.map((edu, index) => (
                                <div key={index} className="border-l-2 border-cp-dim/30 pl-4 pb-3">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-cp-text font-tech text-sm font-bold pr-2">{edu.degree}</h4>
                                        <span className="text-cp-blue text-xs font-mono whitespace-nowrap">{edu.period}</span>
                                    </div>
                                    <p className="text-cp-dim text-xs font-tech mb-2">{edu.institution}</p>
                                    {edu.grade && (
                                        <p className="text-cp-yellow text-xs font-mono">Grade: {edu.grade}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="max-w-[1800px] mx-auto flex justify-between items-end opacity-50 mt-8">
                <div className="h-px flex-1 bg-gradient-to-r from-cp-yellow via-cp-blue to-transparent"></div>
                <div className="font-mono text-xs text-cp-dim bg-cp-dark/50 px-4 py-1 mx-4">NIGHT CITY ARCHIVES // VER 2.0</div>
                <div className="h-px flex-1 bg-gradient-to-l from-cp-pink via-cp-blue to-transparent"></div>
            </div>
        </div>
    );
};

export default IdentityCard;
