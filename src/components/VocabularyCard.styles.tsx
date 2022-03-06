import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #edfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  > p {
    font-size: 1rem;
  }
`;
type ButtonWrapperProps = { known: boolean; disabled: boolean };
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: ${({ disabled }) => (disabled ? "1" : "0.6")};
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
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
