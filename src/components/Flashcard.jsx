import React, { useEffect, useState } from "react";
import flashcardsData from "../../public/data.json";
import "./Flashcard.css";
import bookClosed from "../assets/images/book-solid.svg";
import bookOpen from "../assets/images/book-open-solid.svg";

const Flashcard = (props) => {
  const { title, description, cards } = flashcardsData;
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const shuffleCards = (cards) => {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledCards, setShuffledCards] = useState(shuffleCards(cards));

  useEffect(() => {
    setShuffledCards(shuffleCards(cards));
    setTimeout(() => {
      setCurrentCardIndex(0);
    }, 200);
    props.setFlipped(false);
  }, [props.guessMode]);

  useEffect(() => {
    props.setAnswer(shuffledCards[currentCardIndex].answer);
    props.setDifficulty(shuffledCards[currentCardIndex].difficulty);
  }, [currentCardIndex]);

  const handleNextCard = () => {
    setTimeout(() => {
      setCurrentCardIndex((currentCardIndex + 1) % cards.length);
    }, 200);
    props.setFlipped(false);
    if (props.guessMode) {
      props.setGuess("");
      props.setComment("");
    }
  };

  const handlePrevCard = () => {
    setTimeout(() => {
      setCurrentCardIndex((currentCardIndex - 1 + cards.length) % cards.length);
    }, 200);
    props.setFlipped(false);
    if (props.guessMode) {
      props.setGuess("");
      props.setComment("");
    }
  };

  return (
    <div className="flashcard--container">
      <div className="flashcard--headings">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flashcard--wrapper">
        <div
          className={`flashcard ${props.flipped ? "flipped" : ""}`}
          onClick={() => props.setFlipped(!props.flipped)} // Toggle flip state on click
        >
          <div className="flashcard--inner">
            <div className="flashcard--front">
              <div className="flashcard--icon">
                <img src={bookClosed} alt="Book closed" />
              </div>
              <div className="flashcard--content">
                <div>{shuffledCards[currentCardIndex].question}</div>
                {shuffledCards[currentCardIndex].type === "image" && (
                  <div className="flashcard--image">
                    <img
                      src={
                        new URL(
                          `../assets/images/${shuffledCards[currentCardIndex].image}`,
                          import.meta.url
                        ).href
                      }
                      alt=""
                    />
                  </div>
                )}
              </div>
              <div
                className={`flashcard--difficulty_wrapper ${shuffledCards[
                  currentCardIndex
                ].difficulty.toLowerCase()}`}
              >
                <div className="flashcard--difficulty">
                  {shuffledCards[currentCardIndex].difficulty
                    .charAt(0)
                    .toUpperCase() +
                    shuffledCards[currentCardIndex].difficulty
                      .slice(1)
                      .toLowerCase()}
                </div>
              </div>
            </div>
            <div className="flashcard--back">
              <div className="flashcard--icon">
                <img src={bookOpen} alt="Book open" />
              </div>
              <div className="flashcard--content">
                {shuffledCards[currentCardIndex].answer}
              </div>
              <div className="flashcard--difficulty">
                {shuffledCards[currentCardIndex].difficulty
                  .charAt(0)
                  .toUpperCase() +
                  shuffledCards[currentCardIndex].difficulty
                    .slice(1)
                    .toLowerCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flashcard--buttons">
        <button className="flashcard--button" onClick={handlePrevCard}>
          Previous
        </button>
        <button className="flashcard--button" onClick={handleNextCard}>
          Next
        </button>
      </div>
      <div className="flashcard--number">
        {currentCardIndex + 1} / {cards.length}
      </div>
    </div>
  );
};

export default Flashcard;
