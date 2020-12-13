import styled, { createGlobalStyle } from "styled-components";

//Global style for the page
export const GlobalStyle = createGlobalStyle`
body{
    color:${(props) => props.theme.dark};
    background: ${(props) => props.theme.backgroundColor};
    font-family: Monaco;
    h1{
      text-align: center;
    }
    .displayflex{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
}
`;

export const ButtonsDivStyles = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  margin-top: 30px;
  background-color: #17a2b8;
  margin-bottom: 200px;
  height: 400px;
`;

export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
  color: black;
`;
