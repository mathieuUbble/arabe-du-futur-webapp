import React, { useState } from "react";
import VocabularyCard from "../VocabularyCard/VocabularyCard";
import { RestartButton, StartButton } from "../Buttons/ButtonsComponents";

import { PopUpMissedVoc } from "../DialogPopUp/DialogPopUpComponents";

import { GlobalStyle, Wrapper } from "./Quizz.style";

export type wordTrad = { arab: string; french: string };

function Quizz() {
  const [wordIndex, setWordIndex] = useState(0);
  const [incorrectWord, setIncorrectWord] = useState<wordTrad[]>([]);
  const [correctWord, setCorrectWord] = useState<wordTrad[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [allWords, setAllWords] = useState<wordTrad[]>([]);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    if (answer === "unknown") {
      setIncorrectWord([...incorrectWord, allWords[wordIndex]]);
    } else {
      setCorrectWord([...correctWord, allWords[wordIndex]]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>Arabe du Futur</h1>
        {isPlaying && <PopUpMissedVoc missedWords={incorrectWord} />}
        <p className="score">
          ✅ : {correctWord.length} / {allWords.length}
        </p>
        <p className="score">
          ❌ : {incorrectWord.length} / {allWords.length}
        </p>

        {isPlaying && (
          <RestartButton
            setWordIndex={setWordIndex}
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
            setWordIndex={setWordIndex}
            callback={checkAnswer}
          />
        )}
      </Wrapper>
    </>
  );
}

export default Quizz;
