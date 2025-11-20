import { useEffect, useState, useRef } from 'react';

interface Building {
    id: number;
    left: number;
    width: number;
    height: number;
    windows: { x: number; y: number; width: number; height: number }[];
}

interface Particle {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
}

interface DataStream {
    id: number;
    left: number;
    duration: number;
    delay: number;
}

const CyberBackground = () => {
    const [buildings, setBuildings] = useState<Building[]>([]);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [dataStreams, setDataStreams] = useState<DataStream[]>([]);
    const [glitchActive, setGlitchActive] = useState(false);
    const audioContextRef = useRef<AudioContext | null>(null);

    // Initialize Web Audio API
    useEffect(() => {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

        // Play ambient background hum
        playAmbientSound();

        // Random glitch effects
        const glitchInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                setGlitchActive(true);
                playGlitchSound();
                setTimeout(() => setGlitchActive(false), 150);
            }
        }, 5000);

        return () => {
            clearInterval(glitchInterval);
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    // Ambient background sound (low frequency hum)
    const playAmbientSound = () => {
        if (!audioContextRef.current) return;

        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(60, audioContextRef.current.currentTime); // Low hum
        gainNode.gain.setValueAtTime(0.02, audioContextRef.current.currentTime); // Very quiet

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        oscillator.start();
    };

    // Glitch sound effect
    const playGlitchSound = () => {
        if (!audioContextRef.current) return;

        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();

        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(200, audioContextRef.current.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContextRef.current.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.15);

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        oscillator.start();
        oscillator.stop(audioContextRef.current.currentTime + 0.15);
    };

    // Hover sound effect for interactive elements
    const playHoverSound = () => {
        if (!audioContextRef.current) return;

        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(800, audioContextRef.current.currentTime);

        gainNode.gain.setValueAtTime(0.05, audioContextRef.current.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContextRef.current.currentTime + 0.1);

        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);

        oscillator.start();
        oscillator.stop(audioContextRef.current.currentTime + 0.1);
    };

    useEffect(() => {
        // Generate random buildings for cityscape
        const generatedBuildings: Building[] = [];
        let currentLeft = 0;

        for (let i = 0; i < 15; i++) {
            const width = Math.random() * 80 + 60; // 60-140px wide
            const height = Math.random() * 50 + 30; // 30-80% height

            // Generate windows for this building
            const windows = [];
            const windowCols = Math.floor(width / 15);
            const windowRows = Math.floor((height * window.innerHeight * 0.4) / 100 / 15);

            for (let row = 0; row < windowRows; row++) {
                for (let col = 0; col < windowCols; col++) {
                    if (Math.random() > 0.3) { // 70% chance of window
                        windows.push({
                            x: col * 15 + 5,
                            y: row * 15 + 5,
                            width: 8,
                            height: 8,
                        });
                    }
                }
            }

            generatedBuildings.push({
                id: i,
                left: currentLeft,
                width,
                height,
                windows,
            });

            currentLeft += width + Math.random() * 20 + 10; // 10-30px gap
        }

        setBuildings(generatedBuildings);

        // Generate floating particles
        const generatedParticles: Particle[] = [];
        for (let i = 0; i < 30; i++) {
            generatedParticles.push({
                id: i,
                left: Math.random() * 100,
                size: Math.random() * 3 + 1, // 1-4px
                duration: Math.random() * 10 + 15, // 15-25s
                delay: Math.random() * 10,
            });
        }
        setParticles(generatedParticles);

        // Generate data streams
        const generatedStreams: DataStream[] = [];
        for (let i = 0; i < 20; i++) {
            generatedStreams.push({
                id: i,
                left: Math.random() * 100,
                duration: Math.random() * 3 + 2, // 2-5s
                delay: Math.random() * 5,
            });
        }
        setDataStreams(generatedStreams);
    }, []);

    return (
        <div className={`cyber-bg ${glitchActive ? 'animate-glitch' : ''}`}>
            {/* Cyberpunk Moon */}
            <div className="fixed top-[10%] right-[15%] w-64 h-64 md:w-96 md:h-96 pointer-events-none z-0">
                {/* Moon Core */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cp-yellow/30 via-cp-blue/20 to-cp-pink/10 animate-pulse"
                    style={{ animationDuration: '4s' }} />

                {/* Moon Glow Layers */}
                <div className="absolute inset-0 rounded-full bg-cp-yellow/20 blur-2xl animate-pulse"
                    style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
                <div className="absolute inset-0 rounded-full bg-cp-blue/15 blur-3xl animate-pulse"
                    style={{ animationDuration: '5s', animationDelay: '1s' }} />

                {/* Neon Edge Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cp-yellow/40 shadow-[0_0_30px_rgba(252,238,10,0.3)]" />
                <div className="absolute inset-2 rounded-full border border-cp-blue/30 shadow-[0_0_20px_rgba(0,240,255,0.2)]" />

                {/* Moon Surface Details */}
                <div className="absolute top-[20%] left-[30%] w-12 h-12 rounded-full bg-cp-dark/30 blur-sm" />
                <div className="absolute top-[50%] right-[25%] w-16 h-16 rounded-full bg-cp-dark/20 blur-sm" />
                <div className="absolute bottom-[30%] left-[40%] w-8 h-8 rounded-full bg-cp-dark/25 blur-sm" />
            </div>

            {/* Holographic Overlay */}
            <div className="holo-overlay" />

            {/* Animated Particles */}
            <div className="cyber-particles">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: `${particle.left}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            animationDuration: `${particle.duration}s`,
                            animationDelay: `${particle.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Data Streams */}
            {dataStreams.map((stream) => (
                <div
                    key={stream.id}
                    className="data-stream"
                    style={{
                        left: `${stream.left}%`,
                        animationDuration: `${stream.duration}s`,
                        animationDelay: `${stream.delay}s`,
                    }}
                />
            ))}

            {/* Cityscape Silhouette */}
            <div className="cityscape">
                {buildings.map((building) => (
                    <div
                        key={building.id}
                        className="building"
                        style={{
                            left: `${building.left}px`,
                            width: `${building.width}px`,
                            height: `${building.height}%`,
                        }}
                    >
                        {building.windows.map((window, idx) => (
                            <div
                                key={idx}
                                className="building-window"
                                style={{
                                    left: `${window.x}px`,
                                    bottom: `${window.y}px`,
                                    width: `${window.width}px`,
                                    height: `${window.height}px`,
                                    animationDelay: `${Math.random() * 3}s`,
                                }}
                            />
                        ))}
                    </div>
                ))}

                {/* Neon Signs with hover effects */}
                <div
                    className="neon-sign cursor-pointer transition-all hover:scale-110"
                    style={{ bottom: '60%', left: '15%', fontSize: '1.5rem' }}
                    onMouseEnter={playHoverSound}
                >
                    IIM AHMEDABAD
                </div>
                <div
                    className="neon-sign cursor-pointer transition-all hover:scale-110"
                    style={{
                        bottom: '45%',
                        right: '20%',
                        fontSize: '1.2rem',
                        color: '#00F0FF',
                        textShadow: '0 0 10px #00F0FF, 0 0 20px #00F0FF, 0 0 30px #00F0FF, 0 0 40px #00F0FF'
                    }}
                    onMouseEnter={playHoverSound}
                >
                    MICROSOFT
                </div>
                <div
                    className="neon-sign cursor-pointer transition-all hover:scale-110"
                    style={{
                        bottom: '70%',
                        left: '45%',
                        fontSize: '1rem',
                        color: '#FCEE0A',
                        textShadow: '0 0 10px #FCEE0A, 0 0 20px #FCEE0A, 0 0 30px #FCEE0A, 0 0 40px #FCEE0A'
                    }}
                    onMouseEnter={playHoverSound}
                >
                    IIIT BHAGALPUR
                </div>
            </div>
        </div>
    );
};

export default CyberBackground;
