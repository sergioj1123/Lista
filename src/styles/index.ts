import styled, { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto ,sans-serif;
    }
`

export const Card = styled.div`
  padding: 16px;
  max-width: 600px;
  margin: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

export const Label = styled.p`
  color: #8b8b8b;
  font-weight: bold;
  font-size: 14px;
  margin-top: 8px;
  line-height: 24px;
  font-family: "Roboto Mono", monospace;
`;

export const Information = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  overflow: hidden;
  max-height: 40px;
  border-radius: 4px;
  font-family: "Roboto Mono", monospace;
  padding: 8px;
  resize: none;
  background-color: transparent;
`;

export const InformationBigger = styled(Information)`
  max-height: 60px;
`;

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variables.darkBlue};
  border-radius: 8px;
`;

export const SaveButton = styled(Button)`
  background-color: ${variables.green};
`;

export const DeleteButton = styled(Button)`
  background-color: ${variables.red};
`;

export default GlobalStyle