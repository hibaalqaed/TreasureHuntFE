// Stores
import authStore from "../stores/authStore";

// React
import { observer } from "mobx-react";
import { RiLogoutCircleRLine } from "react-icons/ri";

// Styles
import { UsernameStyled } from "../styles";
import { Link } from "react-router-dom";

import SignupButton from "./SignupButton";
import SigninButton from "./SigninButton";

const NavBar = () => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          {authStore.user ? (
            <>
              <Link to="/">
                <UsernameStyled>
                  Hello, {authStore.user.username}
                </UsernameStyled>
                <RiLogoutCircleRLine
                  onClick={authStore.signout}
                  size="2em"
                  color="black"
                />
              </Link>
            </>
          ) : (
            <>
              <Link to="/signin">
                <SigninButton />
              </Link>
              <Link to="/signup">
                <SignupButton />
              </Link>
            </>
          )}
        </a>
      </li>
    </ul>
  );
};

export default observer(NavBar);
