import React, { useState } from "react";
import VocabularyCard from "../VocabularyCard/VocabularyCard";
import { RestartButton, StartButton } from "../Buttons/ButtonsComponents";
import { useCookie } from "react-use";

import { PopUpMissedVoc } from "../DialogPopUp/DialogPopUpComponents";

import { GlobalStyle, Wrapper } from "./Quizz.style";

export type wordTrad = { arab: string; french: string };

async function getQuizz(value: string | null) {
  const response = await fetch("user", {
    method: "GET",
    headers: { "x-access-token": value !== null ? value : "value" },
  });
  response.json().then((data) => {
    console.log(data);
  });
}

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
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  getQuizz(value);

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
