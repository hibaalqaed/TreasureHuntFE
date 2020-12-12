// Stores
import authStore from "../stores/authStore";

// React
import { observer } from "mobx-react";
import { RiLogoutCircleRLine } from "react-icons/ri";

// Styles
import { UsernameStyled } from "../styles";
import { Link } from "react-router-dom";

import SignupButton from "./SignupButton";

const NavBar = () => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          {authStore.user ? (
            <>
              <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
              <RiLogoutCircleRLine
                onClick={authStore.signout}
                size="2em"
                color="red"
              />
            </>
          ) : (
            <>
              <Link to="/signin">
                <button
                  onClick={() => window.scroll(0, 1000)}
                  style={{
                    margin: "5px",
                    borderRadius: "50%",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  Sign In
                </button>
              </Link>

              {/* <Link to="/signup"> */}
              <SignupButton />
              {/* </Link> */}
            </>
          )}
        </a>
      </li>
    </ul>
  );
};

export default observer(NavBar);
