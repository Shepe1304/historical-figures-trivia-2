import React, { useEffect, useState } from "react";
import "./GuessMode.css";
import fire from "../assets/images/fire.png";

const GuessMode = (props) => {
  const [score, setScore] = useState(0);

  const [difficultyCounts, setDifficultyCounts] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
  });

  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  useEffect(() => {
    setMaxStreak(Math.max(streak, maxStreak));
  }, [streak]);

  const handleSubmit = () => {
    let scoreIncrease = 0;
    if (props.difficulty.toLowerCase() == "easy") scoreIncrease = 1;
    if (props.difficulty.toLowerCase() == "medium") scoreIncrease = 2;
    if (props.difficulty.toLowerCase() == "hard") scoreIncrease = 3;

    if (props.guess.toLowerCase() == props.answer.toLowerCase()) {
      setStreak(streak + 1);
      setScore(score + scoreIncrease);
      props.setComment(
        `Correct! ${
          props.difficulty.charAt(0).toUpperCase() +
          props.difficulty.slice(1).toLowerCase()
        }: ${scoreIncrease} ${
          scoreIncrease == 1 ? "point" : "points"
        } awarded.`
      );
      setDifficultyCounts({
        ...difficultyCounts,
        [props.difficulty.toLowerCase()]:
          difficultyCounts[props.difficulty.toLowerCase()] + 1,
      });
    } else {
      setStreak(0);

      const answerWords = props.answer.toLowerCase().split(" ");
      const trimmedGuess = props.guess.replace("  ", " ").trimEnd();
      const guessWords = trimmedGuess.toLowerCase().split(" ");

      let partialAnswer = false;

      console.log(answerWords);
      console.log(guessWords);

      for (let i = 0; i < guessWords.length; i++) {
        if (answerWords.includes(guessWords[i])) {
          partialAnswer = true;
          break;
        }
      }

      if (partialAnswer) {
        props.setComment(
          `Partially Correct. ${
            props.difficulty.charAt(0).toUpperCase() +
            props.difficulty.slice(1).toLowerCase()
          }: ${scoreIncrease / 2} points awarded!`
        );
        setScore(score + scoreIncrease / 2);
      } else {
        props.setComment("Incorrect. No points awarded.");
      }
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
          setScore(0);
          props.setComment("");
          props.setGuess("");
        }}
      >
        {props.guessMode ? "Exit Guessing" : "Start Guessing"}
      </button>
      {props.guessMode && (
        <div className="guessMode--frame">
          <div className="guessMode--first_line">
            <div className="guessMode--difficulty_counts">
              <div className="guessMode--difficulty_easy">
                {difficultyCounts["easy"]}
              </div>
              <div className="guessMode--difficulty_medium">
                {difficultyCounts["medium"]}
              </div>
              <div className="guessMode--difficulty_hard">
                {difficultyCounts["hard"]}
              </div>
            </div>
            <div className="guessMode--currentScore">Score: {score}</div>
            <div className="guessMode--streak_container">
              <div className="guessMode--streak">
                <div className="guessMode--streak_count">{streak}</div>
                <img src={fire} alt="" />
              </div>
              <div className="guessMode--longest_streak">Best: {maxStreak}</div>
            </div>
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
          <div className="guessMode--comment">{props.comment}</div>
        </div>
      )}
    </div>
  );
};

export default GuessMode;
