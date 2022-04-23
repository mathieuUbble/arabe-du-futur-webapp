import styled from "styled-components";
import { ValidateButton } from "./ButtonsComponents";

export const RestartButtonWrapper = styled.div`
  .restartButton {
    max-width: 200px;
    cursor: point;
    background: linear-gradient(180deg, #fff, #3379ff);
    border: 2px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
`;

export const StartButtonWrapper = styled.div`
  .startButton {
    max-width: 200px;
    cursor: point;
    background: linear-gradient(180deg, #fff, #3379ff);
    border: 2px solid #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
`;

export const ShowWordButtonWrapper = styled.div`
  .next {
    width: 90%;
    cursor: point;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
`;

type ValidateButtonWrapperProps = { known: boolean; disabled: boolean };
export const ValidateButtonWrapper = styled.div<ValidateButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.6")};
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 150px;
    height: 40px;
    margin: 5px 0;
    background: ${({ known, disabled }) =>
      disabled
        ? "linear-gradient(90deg, #909090, #A8A8A8)"
        : known
        ? "linear-gradient(90deg, #56ffa4, #59bc86)"
        : "linear-gradient(90deg, #ff5656, #c16868)"};

    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;
