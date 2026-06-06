import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };
  return (
    <>
      <div className="container d-flex justify-items-center align-items-center">
        <div className="border p-4 w-50 mt-5 bg-light shadow rounded d-flex flex-column">
          <h2 className="text-center">Welcome back!</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="changePassword"
              value={confirmPassword}
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="btn btn-primary text-center">
              Submit
            </button>
            <br /><hr />
            <p>Already have an account? <Link to="/login">Login Here</Link> </p>
          </form>
        </div>
      </div>
    </>
  );
}
export default Register;
