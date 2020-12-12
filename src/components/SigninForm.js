import { useState } from "react";

import { Link } from "react-router-dom";
import authStore from "../stores/authStore";

const SigninForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
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
      {/* <Link to="/"> */}
      <button type="submit" className="btn btn-primary">
        Sign In
      </button>
      {/* </Link> */}
      {/* <button className="btn btn-primary">Back</button> */}
    </form>
  );
};

export default SigninForm;
