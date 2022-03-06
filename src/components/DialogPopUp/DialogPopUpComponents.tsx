import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { PopUpWrapper } from "./DialogPopUpComponents.styles";

import { wordTrad } from "../../App";

type Props = { missedWords: wordTrad[] };

export function PopUpMissedVoc(props: Props) {
  const { missedWords } = props;
  return (
    <PopUpWrapper disabled={missedWords.length === 0}>
      <Popup
        trigger={
          <button
            className="missedWordButton"
            disabled={missedWords.length === 0}
          >
            {" "}
            Missed Words
          </button>
        }
      >
        <div className="popup">
          {missedWords.map((el) => (
            <div key={el.arab}>
              {el.arab} : {el.french}
            </div>
          ))}
        </div>
      </Popup>
    </PopUpWrapper>
  );
}
