import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <>
      <div className="container">
        <div className="register">
          <h1 className="register__title">Sign up</h1>
          <p className="register__subtitle">
            <Link className="register__subtitle-link" to="/login">
              Have an account?
            </Link>
          </p>
          <fieldset>
            <input type="text" placeholder="Username"></input>
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Email"></input>
          </fieldset>
          <fieldset>
            <input type="password" placeholder="Password"></input>
          </fieldset>
          <div className="register__submit">
            <button className="btn" type="submit">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
