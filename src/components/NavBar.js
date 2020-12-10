// Buttons
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";

// Stores
import authStore from "../stores/authStore";

// React
import { observer } from "mobx-react";
import { RiLogoutCircleRLine } from "react-icons/ri";

// Styles
import { UsernameStyled } from "../styles";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {authStore.user ? (
              <>
                <UsernameStyled>
                  Hello, {authStore.user.username}
                </UsernameStyled>
                <RiLogoutCircleRLine
                  onClick={authStore.signout}
                  size="2em"
                  color="red"
                />
              </>
            ) : (
              <>
                <SigninButton />
                <SignupButton />
              </>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default observer(NavBar);
