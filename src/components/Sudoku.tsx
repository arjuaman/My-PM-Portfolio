import React, { useState, useEffect } from 'react';
import { useSound } from '../hooks/useSound';

const Sudoku: React.FC = () => {
    const { playClick, playSuccess, playError } = useSound();
    const [board, setBoard] = useState<(number | null)[][]>([]);
    const [solution, setSolution] = useState<number[][]>([]);
    const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);
    const [gameStatus, setGameStatus] = useState<'playing' | 'won'>('playing');

    // Generate a 9x9 Sudoku puzzle (medium difficulty)
    const generatePuzzle = () => {
        // Classic 9x9 Sudoku solution
        const newSolution = [
            [5, 3, 4, 6, 7, 8, 9, 1, 2],
            [6, 7, 2, 1, 9, 5, 3, 4, 8],
            [1, 9, 8, 3, 4, 2, 5, 6, 7],
            [8, 5, 9, 7, 6, 1, 4, 2, 3],
            [4, 2, 6, 8, 5, 3, 7, 9, 1],
            [7, 1, 3, 9, 2, 4, 8, 5, 6],
            [9, 6, 1, 5, 3, 7, 2, 8, 4],
            [2, 8, 7, 4, 1, 9, 6, 3, 5],
            [3, 4, 5, 2, 8, 6, 1, 7, 9]
        ];

        const newBoard = newSolution.map(row => [...row]) as (number | null)[][];
        // Remove 40-45 numbers for medium difficulty (out of 81 total)
        const cellsToRemove = 40 + Math.floor(Math.random() * 6);
        const removed = new Set<string>();

        while (removed.size < cellsToRemove) {
            const row = Math.floor(Math.random() * 9);
            const col = Math.floor(Math.random() * 9);
            const key = `${row}-${col}`;
            if (!removed.has(key)) {
                newBoard[row][col] = null;
                removed.add(key);
            }
        }

        setBoard(newBoard);
        setSolution(newSolution);
        setGameStatus('playing');
        setSelectedCell(null);
    };

    useEffect(() => {
        generatePuzzle();
    }, []);

    const handleCellClick = (row: number, col: number) => {
        if (board[row][col] === null) {
            playClick();
            setSelectedCell({ row, col });
        }
    };

    const handleNumberInput = (num: number) => {
        if (selectedCell && board[selectedCell.row][selectedCell.col] === null) {
            const newBoard = board.map(row => [...row]);
            newBoard[selectedCell.row][selectedCell.col] = num;

            if (num === solution[selectedCell.row][selectedCell.col]) {
                playSuccess();
                setBoard(newBoard);
                setSelectedCell(null);

                // Check if puzzle is complete
                const isComplete = newBoard.every((row, r) =>
                    row.every((cell, c) => cell === solution[r][c])
                );
                if (isComplete) {
                    setGameStatus('won');
                }
            } else {
                playError();
            }
        }
    };

    return (
        <div className="flex flex-col items-center">
            {gameStatus === 'won' && (
                <div className="mb-4 text-cp-yellow font-cyber text-xl animate-pulse">
                    🎉 PUZZLE SOLVED! 🎉
                </div>
            )}

            {/* 9x9 Grid */}
            <div className="grid grid-cols-9 gap-0.5 mb-4 bg-cp-pink p-2">
                {board.map((row, rowIndex) =>
                    row.map((cell, colIndex) => {
                        // Add thicker borders for 3x3 boxes
                        const rightBorder = (colIndex + 1) % 3 === 0 && colIndex !== 8 ? 'border-r-[3px] border-r-cp-pink' : 'border-r border-r-cp-dim/30';
                        const bottomBorder = (rowIndex + 1) % 3 === 0 && rowIndex !== 8 ? 'border-b-[3px] border-b-cp-pink' : 'border-b border-b-cp-dim/30';

                        return (
                            <button
                                key={`${rowIndex}-${colIndex}`}
                                onClick={() => handleCellClick(rowIndex, colIndex)}
                                className={`w-9 h-9 flex items-center justify-center font-cyber text-sm transition-all ${rightBorder} ${bottomBorder} ${selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                                        ? 'bg-cp-yellow text-cp-black font-bold'
                                        : cell === null
                                            ? 'bg-cp-dark hover:bg-cp-dark/70 text-cp-text'
                                            : 'bg-cp-pink/20 text-cp-yellow font-bold'
                                    }`}
                            >
                                {cell || ''}
                            </button>
                        );
                    })
                )}
            </div>

            {/* Number Pad */}
            {selectedCell && (
                <div className="grid grid-cols-9 gap-1 mb-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <button
                            key={num}
                            onClick={() => handleNumberInput(num)}
                            className="w-9 h-9 bg-cp-pink/20 border border-cp-pink text-cp-pink font-cyber text-sm hover:bg-cp-pink hover:text-cp-black transition-all"
                        >
                            {num}
                        </button>
                    ))}
                </div>
            )}

            <button
                onClick={generatePuzzle}
                className="px-6 py-2 bg-cp-pink/20 border-2 border-cp-pink text-cp-pink font-cyber hover:bg-cp-pink hover:text-cp-black transition-all"
            >
                NEW PUZZLE
            </button>
        </div>
    );
};

export default Sudoku;
