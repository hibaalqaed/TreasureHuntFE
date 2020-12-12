import { useState } from "react";
import authStore from "../stores/authStore";

const SignupForm = ({ closeForm, isOpen }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Username:</label>
        <input
          name="username"
          value={user.username}
          type="text"
          className="form-control"
          onChange={handleChange}
          isOpen={isOpen}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          name="password"
          value={user.password}
          type="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
