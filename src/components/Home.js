import React from "react";
import { ButtonsDivStyles } from "../styles";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const Home = () => {
  return (
    <div>
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
        {/* if token exist show */}
        <Link to="/treasure">
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
    </div>
  );
};

export default observer(Home);
