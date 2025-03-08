import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import GuessMode from "./components/GuessMode";
import Notification from "./components/Notification";

function App() {
  const [guessMode, setGuessMode] = useState(false);
  const [guess, setGuess] = useState("");
  const [answer, setAnswer] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [comment, setComment] = useState("");

  const [flipped, setFlipped] = useState(false);

  const [showingNotification, setShowingNotification] = useState(false);

  return (
    <div className="App">
      {showingNotification && (
        <Notification
          guessMode={guessMode}
          showingNotification={showingNotification}
          setShowingNotification={setShowingNotification}
        />
      )}
      <GuessMode
        guessMode={guessMode}
        setGuessMode={setGuessMode}
        guess={guess}
        setGuess={setGuess}
        answer={answer}
        setAnswer={setAnswer}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        flipped={flipped}
        setFlipped={setFlipped}
        comment={comment}
        setComment={setComment}
        showingNotification={showingNotification}
        setShowingNotification={setShowingNotification}
      />
      <Flashcard
        guessMode={guessMode}
        setGuessMode={setGuessMode}
        guess={guess}
        setGuess={setGuess}
        answer={answer}
        setAnswer={setAnswer}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        flipped={flipped}
        setFlipped={setFlipped}
        comment={comment}
        setComment={setComment}
      />
    </div>
  );
}

export default App;
