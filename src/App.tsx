import React, { useState } from "react";
import VocabularyCard from "./components/VocabularyCard/VocabularyCard";
import {
  RestartButton,
  StartButton,
  NextWordButton,
} from "./components/Buttons/ButtonsComponents";

import { PopUpMissedVoc } from "./components/DialogPopUp/DialogPopUpComponents";

import { GlobalStyle, Wrapper } from "./App.style";

export type wordTrad = { arab: string; french: string };

function App() {
  const [wordIndex, setWordIndex] = useState(0);
  const [incorrectWord, setIncorrectWord] = useState<wordTrad[]>([]);
  const [correctWord, setCorrectWord] = useState<wordTrad[]>([]);
  const [showNextWord, setShowNextWord] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [allWords, setAllWords] = useState<wordTrad[]>([]);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    if (answer === "unknown") {
      setIncorrectWord([...incorrectWord, allWords[wordIndex]]);
    } else {
      setCorrectWord([...correctWord, allWords[wordIndex]]);
    }
    setShowNextWord(true);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Arabe du Futur</h1>
        {isPlaying && <PopUpMissedVoc missedWords={incorrectWord} />}
        <p className="score">✅ : {correctWord.length}</p>
        <p className="score">❌ : {incorrectWord.length}</p>

        {isPlaying && (
          <RestartButton
            setWordIndex={setWordIndex}
            setShowNextWord={setShowNextWord}
            setIncorrectWord={setIncorrectWord}
            setCorrectWord={setCorrectWord}
            setAllWords={setAllWords}
          />
        )}

        {!isPlaying && (
          <StartButton setIsPlaying={setIsPlaying} setAllWords={setAllWords} />
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
          <NextWordButton
            setShowNextWord={setShowNextWord}
            wordIndex={wordIndex}
            setWordIndex={setWordIndex}
          />
        )}
      </Wrapper>
    </>
  );
}

export default App;
