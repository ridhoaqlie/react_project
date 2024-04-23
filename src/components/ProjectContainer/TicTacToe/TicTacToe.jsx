import React, { useEffect, useState } from 'react';
import './TicTacToe.css'

const rowStyle = {
    display: 'flex'
}

const squareStyle = {
    'width': '60px',
    'height': '60px',
    'backgroundColor': '#ddd',
    'margin': '4px',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'fontSize': '20px',
    'color': 'black'
}

const boardStyle = {
    'backgroundColor': '#eee',
    'width': '208px',
    'alignItems': 'center',
    'justifyContent': 'center',
    'display': 'flex',
    'flexDirection': 'column',
    'border': '3px #eee solid'
}

const containerStyle = {
    'display': 'flex',
    'alignItems': 'center',
    'flexDirection': 'column'
}

const instructionsStyle = {
    'marginTop': '5px',
    'marginBottom': '5px',
    'fontWeight': 'bold',
    'fontSize': '16px',
}

const buttonStyle = {
    'marginTop': '15px',
    'marginBottom': '16px',
    'width': '80px',
    'height': '40px',
    'backgroundColor': '#0060e5',
    'color': 'white',
    'fontSize': '16px',
    'borderRadius': '0.5em'
}

function Square({ value, onSquareClick }) {
    return (
        <div
            className="square"
            style={squareStyle}
            onClick={onSquareClick}>
            {value}
        </div>
    );
}

function Board({ xIsNext, squares, onPlay, reset }) {
    const handleClick = (idx) => {
        if (calculateWinner(squares) || squares[idx]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[idx] = 'X';
        } else {
            nextSquares[idx] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);

    return (
        <div style={containerStyle} className="gameBoard">
            <div id="statusArea" className="status" style={instructionsStyle}>Next: Player <span>{xIsNext ? '(X)' : '(O)'}</span></div>
            <div style={boardStyle}>
                <div className="board-row" style={rowStyle}>
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div className="board-row" style={rowStyle}>
                    {winner == 'X' && <h1 className='winnerShow'>Player &#40;{winner}&#41; WIN</h1>}
                    {winner == 'O' && <h1 className='winnerShow'>Player &#40;{winner}&#41; WIN</h1>}
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div className="board-row" style={rowStyle}>
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
            <button style={buttonStyle} onClick={reset}>Reset</button>
        </div>
    );
}

function TicTacToe({ project }) {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }
    const handleReset = () => {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    return (
        <div className='project'>
            <h3>{project.name}</h3>
            <p className='project__description'>{project.description}</p>

            <div className="game">
                <div className="game-board">
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} reset={handleReset} history={history} />
                </div>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const winLine = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < winLine.length; i++) {
        const [a, b, c] = winLine[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


export default TicTacToe;