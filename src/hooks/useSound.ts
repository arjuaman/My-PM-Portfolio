import { useCallback, useEffect, useRef } from 'react';

type SoundType = 'click' | 'nav' | 'success' | 'error' | 'hover';

interface UseSoundReturn {
    playSound: (type: SoundType) => void;
    playClick: () => void;
    playNav: () => void;
    playSuccess: () => void;
    playError: () => void;
    playHover: () => void;
}

export const useSound = (): UseSoundReturn => {
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        // Initialize Web Audio API
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();

        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
            }
        };
    }, []);

    const playSound = useCallback((type: SoundType) => {
        if (!audioContextRef.current) return;

        const ctx = audioContextRef.current;
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);

        switch (type) {
            case 'click':
                // Short, crisp beep
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(800, ctx.currentTime);
                gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.08);
                break;

            case 'nav':
                // Futuristic whoosh
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(600, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.15);
                gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.15);
                break;

            case 'success':
                // Ascending chime
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(400, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0.15, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.2);
                break;

            case 'error':
                // Descending buzz
                oscillator.type = 'square';
                oscillator.frequency.setValueAtTime(300, ctx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.15);
                gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.15);
                break;

            case 'hover':
                // Subtle high-pitched beep
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(1000, ctx.currentTime);
                gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                oscillator.start();
                oscillator.stop(ctx.currentTime + 0.05);
                break;
        }
    }, []);

    const playClick = useCallback(() => playSound('click'), [playSound]);
    const playNav = useCallback(() => playSound('nav'), [playSound]);
    const playSuccess = useCallback(() => playSound('success'), [playSound]);
    const playError = useCallback(() => playSound('error'), [playSound]);
    const playHover = useCallback(() => playSound('hover'), [playSound]);

    return {
        playSound,
        playClick,
        playNav,
        playSuccess,
        playError,
        playHover,
    };
};
