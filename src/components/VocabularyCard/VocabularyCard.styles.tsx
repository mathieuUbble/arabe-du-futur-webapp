import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  width: 400px;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
