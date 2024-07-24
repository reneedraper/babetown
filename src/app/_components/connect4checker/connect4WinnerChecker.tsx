import React, { useState } from 'react';
import checkConnect4Outcome, { TokenValue } from './winnerAlgorithm';

export default function Connect4WinnerChecker() {
    const initialBoard: TokenValue[][] = Array(6).fill(Array(7).fill(0));
    const [isValidBoard, setIsValidBoard] = useState(true);
    const [board, setBoard] = useState(initialBoard);
    const [currentPlayer, setCurrentPlayer] = useState<TokenValue>(1);
    const [gameOver, setGameOver] = useState(false);

    const results = (board: TokenValue[][]) => {
        const result = checkConnect4Outcome(board);
        if (result !== null) {
            setGameOver(true);
        }
        switch (result) {
            case 1:
                return <span className="has-text-warning-dark">{`Yellow wins!`}</span>;
            case 2:
                return <span className="has-text-danger-dark">{`Red wins!`}</span>;
            case 0:
                return <span>{`It's a draw!`}</span>;
            default:
                return <span>{`No winner yet! Keep playing!`}</span>;
        }
    };


    const handleColumnClick = (column: number) => {
        if (gameOver) return;
        const newBoard = board.map(row => [...row]);
        for (let row = 5; row >= 0; row--) {
            if (newBoard[row][column] === 0) {
                newBoard[row][column] = currentPlayer;
                setBoard(newBoard);
                setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
                break;
            }
        }
    };


    const squares = () => {
        let cells = [];
        for (var row = 0; row < 6; row++) {
            for (var column = 0; column < 7; column++) {
                let fillColor = 'white';
                if (board[row][column] == 1) {
                    fillColor = '#fcdd32';
                } else if (board[row][column] == 2) {
                    fillColor = 'red';
                }

                cells.push(
                    <div className="cell p-1" key={`${row}-${column}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="48" fill="#152a4a" stroke="#000" strokeWidth="2" />
                            <circle cx="48" cy="48" r="46" fill={fillColor} stroke="#000" strokeWidth="2" />
                            <circle cx="48" cy="48" r="45" fill={fillColor} strokeOpacity='0.2' stroke="#000" strokeWidth="5" />

                        </svg>
                    </div>
                );
            }
        }
        return <div className="grid is-col-min-1 is-gap-0">{cells}</div>;
    };

    const handleBoardSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = (e.target as HTMLFormElement).board.value;
        try {
            const newBoard: TokenValue[][] = JSON.parse(value);
            if (Array.isArray(newBoard) && newBoard.length === 6 && newBoard.every(row => Array.isArray(row) && row.length === 7)) {
                setBoard(newBoard);
                setIsValidBoard(true);
            } else {
                setIsValidBoard(false);
            }
        } catch (error) {
            setIsValidBoard(false);
        }
    };

    return (
        <>
            <div className="content">
                <div className="pb-4 pt-2">
                    <h3>{`Oopsies! Are you really tired and forgot how to count?`}</h3>
                    <h5>{`Or maybe you are a toddler and don't yet know how to count!`}</h5>
                    <div>
                        <span>{`Well, don't you worry! The solution is here whether you're a technologically savvy toddler or
                 just don't wanna try and count all the way up to 4. All you have to do replicate your game of Connect 4 
                 below and this bad boi will tell you what is happening.`}</span>
                    </div>
                </div>
                <div className="columns mb-3">
                    <div className="column is-5">
                        <form className="mx-auto" onSubmit={handleBoardSubmission}>
                            <label className="label">Board Configuration</label>
                            <textarea rows={8} className={`textarea is-family-code is-size-6 ${isValidBoard ? '' : 'is-danger'}`}
                                id="board" name="board" placeholder={`Enter board as an array of arrays. For example: 
[[0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0],
[0, 0, 1, 0, 0, 0, 0],
[0, 2, 1, 0, 0, 0, 0],
[0, 1, 2, 1, 0, 0, 0],
[2, 1, 2, 2, 1, 0, 0]]
                        `}></textarea>

                            {isValidBoard ? '' : <p className="help is-danger">This is not a valid input</p>}
                            <button className="button my-3" type="submit">Check Board</button>
                        </form>
                        <div className="is-size-4">{results(board)}</div>

                    </div>

                    <div className="column is-7">
                        <div className="fixed-grid has-7-cols is-max-width-500 ml-auto mr-0">
                            <div className="grid is-gap-0">
                                {board[0].map((_, columnIndex) => (
                                    <div key={columnIndex} className="cell is-visible-on-hover" onMouseDown={() => handleColumnClick(columnIndex)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill={currentPlayer == 1 ? '#fcdd32' : 'red'} strokeWidth='2px' stroke="black" version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
                                            <path d="M42.2,68.3c-3.2-3.2-15.8-15.8-16-16c-3.1-3-7.9-3-11,0c-3.1,3-3.1,8,0,11c0.2,0.2,29.3,29.4,29.3,29.4  c3.1,3.1,8.1,3.1,11,0c0,0,28.8-28.7,29.4-29.4c3-3,3-7.9,0-11c-3.1-3-8.1-3-11.1,0c-0.6,0.6-16,16.1-16,16.1V12.8  C57.8,8.5,54.3,5,50,5c-4.3,0-7.8,3.5-7.8,7.8V68.3z" />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="fixed-grid has-7-cols is-max-width-500 ml-auto mr-0 pretty-border-black" style={{ backgroundColor: '#5177f5' }}>
                            {squares()}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
