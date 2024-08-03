import React, { useState, useRef } from 'react';
import checkConnect4Outcome, { TokenValue } from './winnerAlgorithm';


export default function Connect4() {
    const initialBoard: TokenValue[][] = Array(6).fill(Array(7).fill(0));
    const [board, setBoard] = useState(initialBoard);
    const [currentPlayer, setCurrentPlayer] = useState<TokenValue>(1);
    const [result, setResult] = useState<TokenValue>(null);

    const getResult = () => {
        switch (result) {
            case 1:
                return <span className="has-text-warning-dark">{`Yellow wins!`}</span>;
            case 2:
                return <span className="has-text-danger-dark">{`Red wins!`}</span>;
            case 0:
                return <span>{`It's a draw!`}</span>;
            default:
                return <span>{`Player ${currentPlayer}'s Turn!`}</span>;
        }
    };

    const getPlayerColor = () => {
        return currentPlayer == 1 ? '#fcdd32' : 'red'
    }

    const handleColumnClick = (column: number) => {
        if (result) { return }
        const newBoard = board.map(row => [...row]);
        for (let row = 5; row >= 0; row--) {
            if (newBoard[row][column] === 0) {
                newBoard[row][column] = currentPlayer;
                const token = document.getElementById(`${row}-${column}`)
                const tokenDistance = -10 - row * 10
                const duration = 150 + row * 60
                token!.animate([{ transform: `translateY(${tokenDistance}px)` }, {}], { duration: duration, iterations: 1 })
                setBoard(newBoard)
                setResult(checkConnect4Outcome(newBoard));
                if (!result) {
                    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
                }
                break;
            }
        }
    };

    const svgMasks = () => {
        let masks = [];
        for (var row = 0; row < 6; row++) {
            for (var column = 0; column < 7; column++) {
                masks.push(
                    <g key={`m${row}-${column}`} >
                        <circle cx={8 + 13 * (column)} cy={8 + 13 * (row)} r="5.6" fill="white" stroke="white" strokeWidth=".25" />
                        <circle cx={7.7 + 13 * (column)} cy={7.5 + 13 * (row)} r="5.50" fill="white" stroke="white" strokeWidth=".25" />
                    </g>
                );
            }
        }
        return (
            <mask id="circleMask" >{masks}</mask>
        )
    }

    const svgsquares = () => {
        let squares = [];
        for (var row = 0; row < 6; row++) {
            for (var column = 0; column < 7; column++) {
                let fillColor = "white";
                if (board[row][column] == 1) {
                    fillColor = '#fcdd32';
                } else if (board[row][column] == 2) {
                    fillColor = 'red';
                }

                squares.push(
                    <g style={{ display: 'inline-block' }} key={`${row}-${column}`} >
                        <circle cx={8 + 13 * (column)} cy={8 + 13 * (row)} r="5.6" fill="#1a2b66" fillOpacity='0.8' stroke="#000" strokeWidth=".25" />
                        <circle cx={7.7 + 13 * (column)} cy={7.5 + 13 * (row)} r="5.50" fill="white" stroke="white" strokeWidth=".25" />
                        <g id={`${row}-${column}`}>
                            <circle cx={7.7 + 13 * (column)} cy={7.5 + 13 * (row)} r="5.5" fill={fillColor} stroke="black" strokeWidth=".25" />
                        </g>
                        <circle cx={7.7 + 13 * (column)} cy={7.5 + 13 * (row)} r="5.50" fill="none" stroke="black" strokeWidth=".25" />
                    </g>
                );
            }
        }


        return (<svg id="board" viewBox="0 0 94 81" xmlns="http://www.w3.org/2000/svg">
            {svgMasks()}
            <rect height="80" width="93" x="0" y="0" rx="4" ry="4" fill="#1a2b66" />
            <rect height="80" width="93" x=".75" y=".75" rx="4" ry="4" fill="#5177f5" />
            <g mask="url(#circleMask)" >{squares}</g></svg>
        )
    };

    const resetGame = (): void => {
        setBoard(initialBoard);
        setCurrentPlayer(1);
        setResult(null);
    };

    return (
        <>
            <div className="content mx-4">
                <div className="pb-4 pt-2">
                    <h3 className="title is-size-3 has-text-centered">{getResult()}</h3>
                    <button className="button mx-auto" style={{ display: 'block' }} onClick={resetGame}>Reset Game</button>
                </div>
                <div className="board">
                    <div className="fixed-grid has-7-cols is-max-width-500 mx-auto">
                        <div className="grid is-gap-0">
                            {board[0].map((_, columnIndex) => (
                                <div key={columnIndex} id={`${columnIndex}`} className="cell is-visible-on-hover has-text-primary" onMouseDown={() => handleColumnClick(columnIndex)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill={getPlayerColor()} strokeWidth='2px' stroke='black' version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
                                        <path d="M42.2,68.3c-3.2-3.2-15.8-15.8-16-16c-3.1-3-7.9-3-11,0c-3.1,3-3.1,8,0,11c0.2,0.2,29.3,29.4,29.3,29.4  c3.1,3.1,8.1,3.1,11,0c0,0,28.8-28.7,29.4-29.4c3-3,3-7.9,0-11c-3.1-3-8.1-3-11.1,0c-0.6,0.6-16,16.1-16,16.1V12.8  C57.8,8.5,54.3,5,50,5c-4.3,0-7.8,3.5-7.8,7.8V68.3z" />
                                    </svg>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="is-max-width-500 mx-auto ">
                        {svgsquares()}
                    </div >
                </div>
                <div className="buttons is-centered">
                    <a role="button" className="mx-auto my-3 button is-info" href="https://codesandbox.io/p/sandbox/green-sky-cl4ys8?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clyz3onst00063b6j4u9sgbrw%2522%252C%2522sizes%2522%253A%255B100%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clyz3onst00023b6jw6j2ddkf%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clyz3onst00033b6jy07wax6b%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clyz3onst00053b6jmnrnrd3g%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B53.38682742065471%252C46.61317257934529%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clyz3onst00023b6jw6j2ddkf%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyz3onss00013b6jmy324ksw%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clzeav7id00023b6iswdhgw9q%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A10%252C%2522startColumn%2522%253A28%252C%2522endLineNumber%2522%253A10%252C%2522endColumn%2522%253A28%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clyz3onst00023b6jw6j2ddkf%2522%252C%2522activeTabId%2522%253A%2522clzeav7id00023b6iswdhgw9q%2522%257D%252C%2522clyz3onst00053b6jmnrnrd3g%2522%253A%257B%2522id%2522%253A%2522clyz3onst00053b6jmnrnrd3g%2522%252C%2522activeTabId%2522%253A%2522clzeavwnn001p3b6ix7g0y4ny%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clyz3onst00043b6jjgu6b66p%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%252C%257B%2522type%2522%253A%2522SANDBOX_INFO%2522%252C%2522isCloud%2522%253Afalse%252C%2522id%2522%253A%2522clyz3orw4002p3b6jzx6dsv2p%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TESTS%2522%252C%2522id%2522%253A%2522clzeavbhx00113b6ivhhh2vyc%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522clzeavwnn001p3b6ix7g0y4ny%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clyz3onst00033b6jy07wax6b%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clyz3onst00033b6jy07wax6b%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D" target="_blank" >
                        <span>View Code Sandbox</span>
                        <span className="icon material-symbols-outlined is-size-5">open_in_new</span>
                    </a>
                </div>

            </div>
        </>
    )
}
