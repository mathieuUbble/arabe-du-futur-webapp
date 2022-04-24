import React, { useState, useEffect } from "react";
import VocabularyCard from "../VocabularyCard/VocabularyCard";
import { RestartButton, StartButton } from "../Buttons/ButtonsComponents";
import { useCookie } from "react-use";
import { useNavigate } from "react-router-dom";

import { PopUpMissedVoc } from "../DialogPopUp/DialogPopUpComponents";

import { getQuizz } from "../Helper/Helper";

import { GlobalStyle, Wrapper } from "./Quizz.style";

export type wordTrad = { arab: string; french: string };

function Quizz() {
  const [wordIndex, setWordIndex] = useState(0);
  const [incorrectWord, setIncorrectWord] = useState<wordTrad[]>([]);
  const [correctWord, setCorrectWord] = useState<wordTrad[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [allWords, setAllWords] = useState<wordTrad[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  // getQuizz(value, navigate);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    if (answer === "unknown") {
      setIncorrectWord([...incorrectWord, allWords[wordIndex]]);
    } else {
      setCorrectWord([...correctWord, allWords[wordIndex]]);
    }
  };
  useEffect(() => {
    getQuizz(value, navigate).then((data) => {
      setLoading(false);
      if (!data) {
        console.log("bienvenue");
      } else {
        navigate("/");
      }
    });
  }, []);

  const a = (
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
  const test = <div>hello </div>;
  const display = loading ? test : a;
  return display;
}

export default Quizz;
