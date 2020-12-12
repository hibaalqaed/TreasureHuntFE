// React
import { observer } from "mobx-react";
// Components

// Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import Routes from "./components/Routes";
import NavBar from "./components/NavBar";

function App() {
  const theme = {
    mainColor: "white",
    backgroundColor: "lightgray",
    dark: "black",
    button: "#C3A098",
    buttonHover: "DB4620",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar />
      <Routes />
    </ThemeProvider>
  );
}

export default observer(App);
