import styled from "styled-components";

type PopUpWrapperProps = { disabled: boolean };
export const PopUpWrapper = styled.div<PopUpWrapperProps>`
  :hover {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.6")};
  }
  .missedWordButton {
    max-width: 200px;
    cursor: point;
    background: ${({ disabled }) =>
      disabled
        ? "linear-gradient(90deg, #909090, #A8A8A8)"
        : "linear-gradient(90deg, #ff5656, #c16868)"};
    border: 2px solid #a8a8a8;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .popup {
    background: linear-gradient(180deg, #fff, #ffcc91);
  }
`;
