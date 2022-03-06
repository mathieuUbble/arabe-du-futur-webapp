import React from "react";
import { shuffleArray } from "../../utils";
import data from "../../images/outputfile.json";
import { wordTrad } from "../../App";

import {
  RestartButtonWrapper,
  StartButtonWrapper,
  NextWordButtonWrapper,
  KnownButtonWrapper,
} from "./ButtonsComponents.styles";

type RestartButtonProps = {
  setWordIndex: (value: number) => void;
  setShowNextWord: (value: boolean) => void;
  setIncorrectWord: (value: wordTrad[]) => void;
  setCorrectWord: (value: wordTrad[]) => void;
  setAllWords: (value: wordTrad[]) => void;
};

type StartButtonProps = {
  setIsPlaying: (value: boolean) => void;
  setAllWords: (value: wordTrad[]) => void;
};

type NextWordButtonProps = {
  setWordIndex: (value: number) => void;
  setShowNextWord: (value: boolean) => void;
  wordIndex: number;
};

type KnownWordProps = {
  onClickAction: any;
  showArabWord: any;
  known: boolean;
};

type ShowButtonProps = { setShowArabWord: (value: boolean) => void };

export function RestartButton(props: RestartButtonProps) {
  const {
    setWordIndex,
    setShowNextWord,
    setIncorrectWord,
    setCorrectWord,
    setAllWords,
  } = props;

  function restartGame() {
    setWordIndex(0);
    setShowNextWord(false);
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

export function NextWordButton(props: NextWordButtonProps) {
  const { setWordIndex, setShowNextWord, wordIndex } = props;

  function nextWord() {
    setWordIndex(wordIndex + 1);
    setShowNextWord(false);
  }

  return (
    <NextWordButtonWrapper>
      <button className="next" onClick={nextWord}>
        Next Word
      </button>
    </NextWordButtonWrapper>
  );
}

export function ShowButton(props: ShowButtonProps) {
  const { setShowArabWord } = props;
  return (
    <NextWordButtonWrapper>
      <button onClick={() => setShowArabWord(true)} className="next">
        👁 Show 👁
      </button>
    </NextWordButtonWrapper>
  );
}

export function KnownWordButton(props: KnownWordProps) {
  const { onClickAction, showArabWord, known } = props;
  const value = known ? "known" : "unknown";
  const text = known ? "👍 I know" : "👎 I don't know";

  return (
    <KnownButtonWrapper known={known} disabled={!showArabWord}>
      <button
        onClick={(e) => onClickAction(e)}
        value={value}
        disabled={!showArabWord}
      >
        {text}
      </button>
    </KnownButtonWrapper>
  );
}
