import React, { useState } from "react";
import VocabularyCard from "./components/VocabularyCard";
import { shuffleArray } from "./utils";
import data from "./images/outputfile.json";
//Components

import { GlobalStyle, Wrapper } from "./App.style";

type wordTrad = { arab: string; french: string };

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [wordIndex, setWordIndex] = useState(0);
  const [incorrectWord, setIncorrectWord] = useState<wordTrad[]>([]);
  const [correctWord, setCorrectWord] = useState<wordTrad[]>([]);
  const [showNextWord, setShowNextWord] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [allWords, setAllWords] = useState<wordTrad[]>([]);

  function startGame() {
    setIsPlaying(true);
    setAllWords(shuffleArray(data));
  }

  function restartGame() {
    setWordIndex(0);
    setShowNextWord(false);
    setIncorrectWord([]);
    setCorrectWord([]);
    setAllWords(shuffleArray(data));
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    if (answer === "unknown") {
      setIncorrectWord([...incorrectWord, data[wordIndex]]);
    } else {
      setCorrectWord([...correctWord, data[wordIndex]]);
    }
    setShowNextWord(true);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Arab Quizz</h1>
        <p className="score">✅ : {correctWord.length}</p>
        <p className="score">❌ : {incorrectWord.length}</p>
        {!showNextWord && isPlaying && (
          <button className="start" onClick={restartGame}>
            Restart Game 🔁
          </button>
        )}
        {!isPlaying && (
          <button className="start" onClick={startGame}>
            Start The Quizz 🚀
          </button>
        )}

        {isPlaying && (
          <VocabularyCard
            frenchWord={allWords[wordIndex].french}
            arabWord={allWords[wordIndex].arab}
            wordIndex={wordIndex}
            callback={checkAnswer}
          />
        )}
        {wordIndex < allWords.length - 1 && showNextWord && (
          <button
            className="next"
            onClick={() => {
              setWordIndex(wordIndex + 1);
              setShowNextWord(false);
            }}
          >
            Next Word
          </button>
        )}
      </Wrapper>
    </>
  );
}

export default App;
