// import React, {Component} from 'react'

// class Front extends Component {
  
//        state = {  }

//     componentDidMount(){
//         fetch("http://127.0.0.1:5050/api/gallery")
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }

    


//     render() {
//         return ( 
//             <div>
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item ">
//         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item ">
//         <a className="nav-link" href="#">Features</a>
//       </li>
//       <li className="nav-item ">
//         <a className="nav-link" href="#">Pricing</a>
//       </li>
//       <li className="nav-item ">
//         <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </li>
//     </ul>
//   </div>
// </nav>
//             </div>

//          );
//     }
// }
 
// export default Front;

import React from "react";
import { Link } from "react-router-dom";

const Front = (props) => {
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
                <button type="submit" className="signin-button">
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
                <button type="submit" className="signin-button">
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

export default Front;
