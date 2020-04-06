import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const styles = {
    width: "200px",
    margin: "20px auto",
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        const clonedBoard = [...board];
        // check on user click if it's an occupied square, true? => return
        if (winner || clonedBoard[i]) return;
        // show X or O on the clicked square
        clonedBoard[i] = xIsNext ? "X" : "O";
        setBoard(clonedBoard);
        setXIsNext(!xIsNext);
    };

    const renderMoves = () => {
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start game
        </button>;
    };

    return (
        <React.Fragment>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>
                    {winner
                        ? `Winner: ${winner}`
                        : `Next Player: ${xIsNext ? "X" : "O"}`}
                </p>
            </div>
        </React.Fragment>
    );
};

export default Game;
