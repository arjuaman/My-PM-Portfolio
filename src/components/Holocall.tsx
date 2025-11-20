import React from 'react';
import type { Profile } from '../data/profile';

interface HolocallProps {
    contact: Profile['contact'];
}

const Holocall: React.FC<HolocallProps> = ({ contact }) => {
    return (
        <div className="w-full max-w-3xl mx-auto p-4 flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-full bg-cp-dark border-2 border-cp-pink p-1 relative shadow-[0_0_20px_rgba(255,0,60,0.2)]">
                {/* Header Bar */}
                <div className="bg-cp-pink/20 p-2 flex justify-between items-center border-b border-cp-pink mb-8">
                    <span className="font-cyber text-cp-pink text-sm animate-pulse">INCOMING TRANSMISSION...</span>
                    <span className="font-mono text-cp-pink text-xs">SECURE LINE</span>
                </div>

                <div className="p-8 text-center relative">
                    {/* Hologram Effect Background */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>

                    <h2 className="text-5xl font-cyber text-cp-text mb-12">ESTABLISH_UPLINK</h2>

                    <div className="grid gap-6 max-w-md mx-auto">
                        <a
                            href={`mailto:${contact.email}`}
                            className="group flex items-center justify-between bg-cp-bg border border-cp-dim p-4 hover:border-cp-yellow hover:bg-cp-yellow/10 transition-all duration-300"
                        >
                            <span className="font-mono text-cp-dim group-hover:text-cp-yellow">EMAIL_PROTOCOL</span>
                            <span className="font-tech text-xl text-cp-text group-hover:text-cp-yellow">{contact.email}</span>
                        </a>

                        <div className="group flex items-center justify-between bg-cp-bg border border-cp-dim p-4 hover:border-cp-blue hover:bg-cp-blue/10 transition-all duration-300">
                            <span className="font-mono text-cp-dim group-hover:text-cp-blue">COMMS_ID</span>
                            <span className="font-tech text-xl text-cp-text group-hover:text-cp-blue">{contact.phone}</span>
                        </div>

                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between bg-cp-bg border border-cp-dim p-4 hover:border-cp-pink hover:bg-cp-pink/10 transition-all duration-300"
                        >
                            <span className="font-mono text-cp-dim group-hover:text-cp-pink">NET_PROFILE</span>
                            <span className="font-tech text-xl text-cp-text group-hover:text-cp-pink">LINKEDIN</span>
                        </a>
                    </div>
                </div>

                {/* Footer Bar */}
                <div className="bg-cp-dark p-2 border-t border-cp-pink mt-8 flex justify-between text-[10px] font-mono text-cp-dim">
                    <span>ENCRYPTION: AES-256</span>
                    <span>SIGNAL: STRONG</span>
                </div>
            </div>
        </div>
    );
};

export default Holocall;
