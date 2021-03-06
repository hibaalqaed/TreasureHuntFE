import React, { useState } from "react";

const SignupButton = () => {
  return (
    <>
      <button
        style={{
          margin: "5px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        onClick={() => window.scroll(0, 1000)}
      >
        Sign Up
      </button>
    </>
  );
};

export default SignupButton;
