import React, { useState } from "react";
import SignupForm from "./SignupForm";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeForm = () => setIsOpen(false);
  const openForm = () => setIsOpen(true);

  return (
    <>
      <button
        style={{
          margin: "5px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
        onClick={openForm}
      >
        Sign Up
      </button>
      <SignupForm isOpen={isOpen} closeForm={closeForm} />
    </>
  );
};

export default SignupButton;
