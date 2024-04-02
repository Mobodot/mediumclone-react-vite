import { Link } from "react-router-dom";
// import "./Register.css";
import "./auth.css";
import { useState } from "react";
// import { register } from "../../../utils/authService";
import useAuthenticate from "../../hooks/useAuthenticate";

function Register() {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  const apiUrl = "http://localhost:3000/api/users";
  // const apiUrl = "https://api.realworld.io/api/users";

  const authenticate = useAuthenticate(
    {
      username: "",
      email: "",
      password: "",
    },
    apiUrl
  );

  return (
    <>
      <div className="container">
        <div className="auth">
          <div>
            <h1 className="auth__title">Sign up</h1>
            <p className="auth__subtitle">
              <Link className="auth__subtitle-link" to="/login">
                Have an account?
              </Link>
            </p>
          </div>
          {authenticate.backendErrors && (
            <ul className="backendError_text">
              {authenticate
                .convertErrorToStrArr(authenticate.backendErrors)
                .map((error) => (
                  <li key={error}>{error}</li>
                ))}
            </ul>
          )}
          <form onSubmit={authenticate.handleSubmit}>
            <fieldset>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={authenticate.formData.username}
                onChange={authenticate.handleChange}
              ></input>
            </fieldset>
            <fieldset>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={authenticate.formData.email}
                onChange={authenticate.handleChange}
              ></input>
            </fieldset>
            <fieldset>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={authenticate.formData.password}
                onChange={authenticate.handleChange}
              ></input>
            </fieldset>
            <div className="auth__submit">
              <button className="btn" type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
