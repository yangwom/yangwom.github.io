import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  font-size: 100%;
  box-sizing: border-box;
}
body {
  background: ${({theme}) => theme.color.background};
  font-size: 15px;
  color: ${({theme}) => theme.color.text};
}
`;