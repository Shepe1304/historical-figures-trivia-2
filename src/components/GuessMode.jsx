import React, { useEffect, useState } from "react";
import "./GuessMode.css";

const GuessMode = (props) => {
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    if (props.guess.toLowerCase() == props.answer.toLowerCase()) {
      let scoreIncrease = 0;
      if (props.difficulty.toLowerCase() == "easy") scoreIncrease = 1;
      if (props.difficulty.toLowerCase() == "medium") scoreIncrease = 2;
      if (props.difficulty.toLowerCase() == "hard") scoreIncrease = 3;

      setScore(score + scoreIncrease);
      props.setComment("Correct!");
    } else {
      props.setComment("Incorrect / Not Full");
    }
    props.setFlipped(true);
  };

  return (
    <div className="guessMode">
      <button
        className="guessMode--button"
        onClick={() => {
          props.setGuessMode(!props.guessMode);
          props.setShowingNotification(true);
        }}
      >
        {props.guessMode ? "Exit Guessing" : "Start Guessing"}
      </button>
      {props.guessMode && (
        <div className="guessMode--frame">
          <div className="guessMode--currentScore">
            Your score: {score}
          </div>
          <div className="guessMode--input_bar">
            <input
              type="text"
              placeholder="Your guess..."
              value={props.guess}
              onChange={(e) => props.setGuess(e.target.value)}
            />
            <button
              className="guessMode--submit"
              onClick={handleSubmit}
              disabled={props.flipped ? true : false}
            >
              Submit
            </button>
          </div>
          <div>{props.comment}</div>
        </div>
      )}
    </div>
  );
};

export default GuessMode;
