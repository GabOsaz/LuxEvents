import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="ErrorPage-container">
      <div className="form-mobile">
        <div className="form signin-form">
          <form>
            <ul className="form-container">
              <li>
                <p className="errorPage-heading-1">
                  <b>Uh ohohoh!</b>
                </p>
              </li>

              <li>
                <p className="errorPage-heading-2">
                  We couldn't find the page you are looking for
                </p>
              </li>
              <Link to="/">
                <button type="submit" className="signin-button" style={{textDecoration: "none"}}>
                  Go Back{" "}
                </button>
              </Link>
            </ul>
          </form>
        </div>
      </div>

      <div className="form-web">
        <div className="form signin-form">
          <form>
            <ul className="form-container">
              <li>
                <p className="errorPage-heading-1">
                  <b>Uh ohohoh!</b>
                </p>
              </li>

              <li>
                <p className="errorPage-heading-2">
                  We couldn't find the page you are looking for
                </p>
              </li>
              <Link to="/">
                <button type="submit" className="signin-button" style={{textDecoration: "none"}}>
                  Go Back{" "}
                </button>
              </Link>
            </ul>
          </form>
        </div>
      </div>

      <div className="signin-web-image-container">
        <img
          className="signin-web-image"
          src="https://res.cloudinary.com/dsipecjov/image/upload/v1597708857/gkczeo9v454iuxxvdxkg.jpg"
        />
      </div>
    </div>
  );
};

export default ErrorPage;