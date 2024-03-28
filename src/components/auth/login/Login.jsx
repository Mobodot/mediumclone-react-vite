import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="container">
        <div className="login">
          <h1 className="login__title">Sign in</h1>
          <p className="login__subtitle">
            <Link to="/register" className="login__subtitle-link">
              Need an account?
            </Link>
          </p>
          <fieldset>
            <input type="text" placeholder="Email"></input>
          </fieldset>
          <fieldset>
            <input type="password" placeholder="Password"></input>
          </fieldset>
          <div className="login__submit">
            <button className="btn" type="submit">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
