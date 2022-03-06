import React, { useState, useEffect } from "react";
import { Wrapper } from "./VocabularyCard.styles";

import { KnownWordButton } from "../Buttons/ButtonsComponents";

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
      <p className="french">🇫🇷 Word : {frenchWord}</p>
      {showArabWord && <p className="arab">🇦🇪 Word : {arabWord}</p>}
      <KnownWordButton
        showArabWord={showArabWord}
        onClickAction={onClickAction}
        known={true}
      />

      <KnownWordButton
        showArabWord={showArabWord}
        onClickAction={onClickAction}
        known={false}
      />
    </Wrapper>
  );
}

export default VocabularyCard;
