import React, { useState, useEffect } from "react";
import { Wrapper, ButtonWrapper } from "./VocabularyCard.styles";

type Props = {
  frenchWord: string;
  arabWord: string;
  wordIndex: number;
  callback: any;
};

function VocabularyCard(props: Props) {
  const { arabWord, frenchWord, wordIndex, callback } = props;
  const [showArabWord, setShowArabWord] = useState<boolean>(false);

  useEffect(() => {
    setShowArabWord(false);
    console.log("here");
  }, [wordIndex]);

  const onClickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowArabWord(true);
    callback(e);
  };

  return (
    <Wrapper>
      <p className="french">French Word : {frenchWord}</p>
      {showArabWord && <p className="arab">Arab Word : {arabWord}</p>}
      <ButtonWrapper known={true} disabled={showArabWord}>
        <button
          onClick={(e) => onClickAction(e)}
          disabled={showArabWord}
          value={"known"}
        >
          I know
        </button>
      </ButtonWrapper>
      <ButtonWrapper known={false} disabled={showArabWord}>
        <button
          disabled={showArabWord}
          onClick={(e) => onClickAction(e)}
          value={"unknown"}
        >
          I don't know
        </button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default VocabularyCard;
