import { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import useAuthenticate from "../../hooks/useAuthenticate";

function Login() {
  const apiUrl = "http://localhost:3000/api/users/login";

  const authenticate = useAuthenticate(
    {
      username: "",
      password: "",
    },
    apiUrl
  );

  // const apiUrl = "http://api.realworld.io/api/users/login"

  return (
    <>
      <div className="container">
        <div className="auth">
          <div>
            <h1 className="auth__title">Sign in</h1>
            <p className="auth__subtitle">
              <Link to="/register" className="auth__subtitle-link">
                Need an account?
              </Link>
            </p>
          </div>
          {authenticate.backendErrors && (
            <ul className="backendError_text">
              {authenticate
                .convertErrorToStrArr(authenticate.backendErrors)
                .map((error) => (
                  <li key={error}>{error} </li>
                ))}
            </ul>
          )}
          <form onSubmit={authenticate.handleSubmit}>
            <fieldset>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={authenticate.formData.email}
                onChange={authenticate.handleChange}
              ></input>
            </fieldset>
            <fieldset>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={authenticate.formData.password}
                onChange={authenticate.handleChange}
              ></input>
            </fieldset>
            <div className="auth__submit">
              <button className="btn" type="submit">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
