import React from "react";
import { shuffleArray } from "../../utils";
import data from "../../images/outputfile.json";
import { wordTrad } from "../Quizz/Quizz";

import {
  RestartButtonWrapper,
  StartButtonWrapper,
  ShowWordButtonWrapper,
  ValidateButtonWrapper,
} from "./ButtonsComponents.styles";

type RestartButtonProps = {
  setWordIndex: (value: number) => void;
  setIncorrectWord: (value: wordTrad[]) => void;
  setCorrectWord: (value: wordTrad[]) => void;
  setAllWords: (value: wordTrad[]) => void;
};

type StartButtonProps = {
  setIsPlaying: (value: boolean) => void;
  setAllWords: (value: wordTrad[]) => void;
};

type KnownWordProps = {
  onClickAction: any;
  showArabWord: any;
  known: boolean;
};

type ShowButtonProps = { setShowArabWord: (value: boolean) => void };

export function RestartButton(props: RestartButtonProps) {
  const { setWordIndex, setIncorrectWord, setCorrectWord, setAllWords } = props;

  function restartGame() {
    setWordIndex(0);
    setIncorrectWord([]);
    setCorrectWord([]);
    setAllWords(shuffleArray(data));
  }
  return (
    <RestartButtonWrapper>
      <button className="restartButton" onClick={restartGame}>
        Restart Game 🔁
      </button>
    </RestartButtonWrapper>
  );
}

export function StartButton(props: StartButtonProps) {
  const { setIsPlaying, setAllWords } = props;

  function startGame() {
    setIsPlaying(true);
    setAllWords(shuffleArray(data));
  }

  return (
    <StartButtonWrapper>
      <button className="startButton" onClick={startGame}>
        Start The Quizz 🚀
      </button>
    </StartButtonWrapper>
  );
}

export function ShowButton(props: ShowButtonProps) {
  const { setShowArabWord } = props;
  return (
    <ShowWordButtonWrapper>
      <button onClick={() => setShowArabWord(true)} className="next">
        👁 Show 👁
      </button>
    </ShowWordButtonWrapper>
  );
}

export function ValidateButton(props: KnownWordProps) {
  const { onClickAction, showArabWord, known } = props;
  const value = known ? "known" : "unknown";
  const text = known ? "👍 I know" : "👎 I don't know";

  return (
    <ValidateButtonWrapper known={known} disabled={!showArabWord}>
      <button
        onClick={(e) => onClickAction(e)}
        value={value}
        disabled={!showArabWord}
      >
        {text}
      </button>
    </ValidateButtonWrapper>
  );
}
