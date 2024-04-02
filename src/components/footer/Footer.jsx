import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <p className="footer__text">
            <span>
              <Link className="footer__app-text app-link" to="">
                conduit
              </Link>
            </span>{" "}
            An interactive learning project from{" "}
            <span>
              <Link className="footer__app-text text-link" to="">
                Thinkster.
              </Link>
            </span>{" "}
            Code & design licensed under MIT.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
