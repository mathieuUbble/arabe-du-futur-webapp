import React, { useState, useEffect } from "react";
import { Wrapper } from "./VocabularyCard.styles";

import { ValidateButton, ShowButton } from "../Buttons/ButtonsComponents";

type Props = {
  frenchWord: string;
  arabWord: string;
  setWordIndex: (value: number) => void;
  wordIndex: number;
  callback: any;
};

function VocabularyCard(props: Props) {
  const { arabWord, frenchWord, wordIndex, setWordIndex, callback } = props;
  const [showArabWord, setShowArabWord] = useState<boolean>(false);

  useEffect(() => {
    setShowArabWord(false);
  }, [wordIndex]);

  const onClickAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    callback(e);
    setWordIndex(wordIndex + 1);
  };

  return (
    <Wrapper>
      <p className="french">🇫🇷 Word : {frenchWord}</p>
      <ShowButton setShowArabWord={setShowArabWord} />
      {showArabWord && <p className="arab">🇦🇪 Word : {arabWord}</p>}

      <ValidateButton
        showArabWord={showArabWord}
        onClickAction={onClickAction}
        known={true}
      />

      <ValidateButton
        showArabWord={showArabWord}
        onClickAction={onClickAction}
        known={false}
      />
    </Wrapper>
  );
}

export default VocabularyCard;
