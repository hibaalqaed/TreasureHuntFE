import React from "react";

const SigninButton = () => {
  return (
    <>
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
    </>
  );
};

export default SigninButton;
