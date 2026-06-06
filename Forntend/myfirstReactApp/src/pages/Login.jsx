import { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(userName);
    console.log(password);
    
  }
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
              onChange={(e)=> setUserName(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              onChange={(e)=> setPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="btn btn-primary float-end">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
