import React from "react";
import PlayNumber from "./PlayNumber";
import "./StarMatch.css";
import { useGameState } from "./useGameState";
import { utils } from "./utils";

function StarMatch(props) {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  } = useGameState();

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const gameStatus =
    availableNums.length === 0 ? "won" : secondsLeft === 0 ? "lost" : "active";
  const numberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return "used";
    }
    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };
  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === "used" && gameStatus !== "active") {
      return;
    }
    const newCandidateNums =
      currentStatus === "available"
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);
    setGameState(newCandidateNums);
  };
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <>
              <div style={{ color: gameStatus === "lost" ? "red" : "green" }}>
                {gameStatus === "lost" ? "Game Over. You Lost!" : "You Won!"}
              </div>
              <button onClick={props.startNewGame}>Play Again</button>
            </>
          ) : (
            utils.range(1, stars).map((id) => <div key={id} className="star" />)
          )}
        </div>
        <div className="right">
          {utils.range(1, 9).map((num) => (
            <PlayNumber
              key={num}
              number={num}
              status={numberStatus(num)}
              onClick={onNumberClick}
            />
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: {secondsLeft}</div>
    </div>
  );
}

export default StarMatch;
