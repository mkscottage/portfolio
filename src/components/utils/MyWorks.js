import React from "react";
import ReactPic from "../../assets/reactjs-1.jpg";
import FlaskPic from "../../assets/flask-1.png";

const MyWorks = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 px-5 my-3">
          <div className="card shadow-lg border-0 my-works-card">
            <div className="card-body p-0">
              <img src={ReactPic} alt="React" className="w-100 rounded-top" />
            </div>
            <div className="card-header border-0 py-1 my-0 bg-success shadow-sm">
              <h5 className="my-1 text-light">Profile Manager (frontend)</h5>
            </div>
            <div className="card-body py-2">
              <p>
                Profile Manager is a simple app just to demonstrate usage of
                React JS and created primarily for my reference.
              </p>
              <hr className="my-1" />
              <h6>Technologies used -</h6>
              <ul>
                <li>React JS</li>
              </ul>
            </div>
            <div className="card-footer p-0">
              <a
                target="_blank"
                without="true"
                rel="noopener noreferrer"
                href="https://github.com/mkscottage/react-profile-manager"
                className="btn btn-primary d-block rounded-0 rounded-bottom"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 px-5 my-3">
          <div className="card shadow-lg border-0 my-works-card">
            <div className="card-body p-0">
              <img src={FlaskPic} alt="React" className="w-100 rounded-top" />
            </div>
            <div className="card-header border-0 py-1 my-0 bg-success shadow-sm">
              <h5 className="my-1 text-light">Profile Manager (backend)</h5>
            </div>
            <div className="card-body py-2">
              <p>
                Profile Manager is a simple app just to demonstrate usage of
                Flask framework and created primarily for my reference.
              </p>
              <hr className="my-1" />
              <h6>Technologies used -</h6>
              <ul>
                <li>Flask</li>
              </ul>
            </div>
            <div className="card-footer p-0">
              <a
                target="_blank"
                without="true"
                rel="noopener noreferrer"
                href="https://github.com/mkscottage/flask-profile-manager"
                className="btn btn-primary d-block rounded-0 rounded-bottom"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 px-5 my-3">
          <div className="card shadow-lg border-0 my-works-card">
            <div className="card-body p-0">
              <img src={ReactPic} alt="React" className="w-100 rounded-top" />
            </div>
            <div className="card-header border-0 py-1 my-0 bg-success shadow-sm">
              <h5 className="my-1 text-light">Portfolio</h5>
            </div>
            <div className="card-body py-2">
              <p>
                Portfolio is the app which you are viewing now. It is also made
                to showcase my skills as well as for my reference.
              </p>
              <hr className="my-1" />
              <h6>Technologies used -</h6>
              <ul>
                <li>React JS</li>
              </ul>
            </div>
            <div className="card-footer p-0">
              <a
                target="_blank"
                without="true"
                rel="noopener noreferrer"
                href="https://github.com/mkscottage/portfolio"
                className="btn btn-primary d-block rounded-0 rounded-bottom"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
