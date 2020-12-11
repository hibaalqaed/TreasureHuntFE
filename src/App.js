// React
import { Link } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";

// Styles
import { GlobalStyle, ButtonsDivStyles } from "./styles";
import { ThemeProvider } from "styled-components";

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
      <br />
      <h1>Welcome to the Treasure Hunt!</h1>
      <ButtonsDivStyles>
        <Link to="/random">
          <button
            style={{
              margin: "30px",
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              fontSize: "200%",
            }}
            onClick={() => window.scroll(0, 1000)}
          >
            Random
          </button>
        </Link>
        <Link to="treasure">
          <button
            style={{
              margin: "30px",
              borderRadius: "50%",
              width: "250px",
              height: "250px",
              backgroundColor: "#ddaa55",
              fontSize: "200%",
            }}
            onClick={() => window.scroll(0, 1000)}
          >
            💰Treasure💰
          </button>
        </Link>
      </ButtonsDivStyles>
    </ThemeProvider>
  );
}

export default App;
