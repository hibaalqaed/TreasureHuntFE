import { useState } from "react";
import authStore from "../stores/authStore";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [user2, setUser2] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser2({ ...user2, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Username:</label>
        <input
          name="username"
          value={user2.username}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password:</label>
        <input
          name="password"
          value={user2.password}
          type="password"
          className="form-control"
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        style={{
          margin: "5px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
        }}
      >
        Sign Up
      </button>
      <Link to="/">
        <button
          style={{
            margin: "5px",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
          }}
        >
          Back
        </button>
      </Link>
    </form>
  );
};

export default SignupForm;
