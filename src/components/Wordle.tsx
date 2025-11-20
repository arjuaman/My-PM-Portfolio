import React, { useState, useEffect } from 'react';
import { useSound } from '../hooks/useSound';

const WORDS = ['REACT', 'CYBER', 'PIXEL', 'NEON', 'GLITCH', 'MATRIX', 'BINARY', 'NEURAL'];

const Wordle: React.FC = () => {
    const { playClick, playSuccess, playError } = useSound();
    const [targetWord, setTargetWord] = useState('');
    const [guesses, setGuesses] = useState<string[]>([]);
    const [currentGuess, setCurrentGuess] = useState('');
    const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');

    const startNewGame = () => {
        const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        setTargetWord(randomWord);
        setGuesses([]);
        setCurrentGuess('');
        setGameStatus('playing');
    };

    useEffect(() => {
        startNewGame();
    }, []);

    const handleKeyPress = (key: string) => {
        if (gameStatus !== 'playing') return;

        playClick();

        if (key === 'ENTER') {
            if (currentGuess.length === 5) {
                const newGuesses = [...guesses, currentGuess];
                setGuesses(newGuesses);

                if (currentGuess === targetWord) {
                    playSuccess();
                    setGameStatus('won');
                } else if (newGuesses.length >= 6) {
                    playError();
                    setGameStatus('lost');
                } else {
                    setCurrentGuess('');
                }
            }
        } else if (key === 'BACK') {
            setCurrentGuess(currentGuess.slice(0, -1));
        } else if (currentGuess.length < 5) {
            setCurrentGuess(currentGuess + key);
        }
    };

    const getCellColor = (guess: string, index: number) => {
        const letter = guess[index];
        if (letter === targetWord[index]) {
            return 'bg-cp-yellow border-cp-yellow text-cp-black'; // Correct position
        } else if (targetWord.includes(letter)) {
            return 'bg-cp-blue/50 border-cp-blue text-cp-blue'; // Wrong position
        }
        return 'bg-cp-dark border-cp-dim text-cp-dim'; // Not in word
    };

    const keyboard = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
    ];

    return (
        <div className="flex flex-col items-center">
            {gameStatus === 'won' && (
                <div className="mb-4 text-cp-yellow font-cyber text-xl animate-pulse">
                    🎉 YOU WON! 🎉
                </div>
            )}
            {gameStatus === 'lost' && (
                <div className="mb-4 text-cp-pink font-cyber text-lg">
                    WORD WAS: {targetWord}
                </div>
            )}

            {/* Game Board */}
            <div className="mb-6 space-y-2">
                {[...Array(6)].map((_, rowIndex) => {
                    const guess = guesses[rowIndex] || (rowIndex === guesses.length ? currentGuess : '');
                    const isCurrentRow = rowIndex === guesses.length;

                    return (
                        <div key={rowIndex} className="flex gap-2">
                            {[...Array(5)].map((_, colIndex) => {
                                const letter = guess[colIndex] || '';
                                const isGuessed = rowIndex < guesses.length;

                                return (
                                    <div
                                        key={colIndex}
                                        className={`w-12 h-12 flex items-center justify-center font-cyber text-xl border-2 transition-all ${isGuessed
                                                ? getCellColor(guess, colIndex)
                                                : isCurrentRow && letter
                                                    ? 'bg-cp-dark/50 border-cp-yellow text-cp-yellow'
                                                    : 'bg-cp-dark/30 border-cp-dim/30 text-cp-text'
                                            }`}
                                    >
                                        {letter}
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>

            {/* Keyboard */}
            {gameStatus === 'playing' && (
                <div className="space-y-2 mb-4">
                    {keyboard.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex gap-1 justify-center">
                            {row.map(key => (
                                <button
                                    key={key}
                                    onClick={() => handleKeyPress(key)}
                                    className={`${key === 'ENTER' || key === 'BACK' ? 'px-3' : 'w-8'
                                        } h-10 bg-cp-blue/20 border border-cp-blue text-cp-blue font-cyber text-xs hover:bg-cp-blue hover:text-cp-black transition-all`}
                                >
                                    {key}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>
            )}

            <button
                onClick={startNewGame}
                className="px-6 py-2 bg-cp-pink/20 border-2 border-cp-pink text-cp-pink font-cyber hover:bg-cp-pink hover:text-cp-black transition-all"
            >
                NEW GAME
            </button>
        </div>
    );
};

export default Wordle;
