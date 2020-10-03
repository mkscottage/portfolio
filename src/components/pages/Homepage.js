import React from "react";
import * as MyPic from "../../assets/my_pic.jpg";

const Homepage = () => {
  return (
    <div className="container-fluid p-0">
      <div
        className="text-center px-0 py-4"
        style={{
          position: "relative",
          minHeight: "100vh",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 51%, rgba(0, 0, 0, 0.93) 85%)",
        }}
      >
        <div className="container">
          <div
            style={{
              width: "100%",
              height: "2px",
              position: "relative",
              top: "100px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="rounded m-0 p-0 d-flex"
          >
            <p className="flex-fill h-100 bg-white" />
            <p className="h-100" style={{ width: "230px" }} />
            <p className="flex-fill h-100 bg-white" />
          </div>
          <div
            style={{
              width: "210px",
              height: "210px",
              borderRadius: "50%",
              backgroundColor: "white",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="text-center shadow"
          >
            <img
              className=""
              style={{
                height: "200px",
                width: "200px",
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
                borderRadius: "50%",
              }}
              src={MyPic}
              alt="Mukesh Sharma"
            />
          </div>

          <hr className="bg-white" />
          <h2 className="mt-3 mb-0 display-4 text-white text-shadow">
            Mukesh Kumar Sharma
          </h2>
          <hr className="bg-white" />
          <p className="text-light">
            I am a full stack developer and an enthusiast learner. I worked on
            many technologies including some powerful frameworks. I started my
            learning using C/C++, Java, Python then moved to web technologies
            such as HTML, CSS, JavaScript, JQuery, Bootstrap, PHP. Then started
            learning some frameworks such as Django (Python - backend), Flask
            (Python - backend), Hibernate (Java - Backend) and React (JavaScript
            - Frontend).
          </p>
          <a href="#my-skills">
            <svg
              width="4em"
              height="4em"
              viewBox="0 0 16 16"
              className="bi bi-arrow-down-circle mt-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              id="down-arrow"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                fill-rule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        className="text-left p-4"
        id="my-skills"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(50deg, rgb(0, 88, 115, 0.90) 0%, rgb(11, 152, 175, 0.97) 30%, rgb(11, 152, 175, 0.94) 50%, rgb(0, 88, 115, 0.90) 100%",
          // "linear-gradient(50deg, rgb(32, 210, 239, 0.8) 0%, rgb(11, 152, 175, 0.94) 51%, rgb(0, 88, 115, 0.90) 85%",
        }}
      >
        <div className="container">
          <h2 className="display-4 text-white text-shadow">My Skills -</h2>
          <hr className="text-light" />
          {/* <ul className="list-group shadow">
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-4 col-6">Java</div>
                <div className="col">
                  <div className="progress">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-4 col-6">Python</div>
                <div className="col">
                  <div className="progress">
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-4 col-6">JavaScript</div>
                <div className="col">
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      60%
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-sm-4 col-6">HTML</div>
                <div className="col">
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      70%
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul> */}

          <div className="accordion" id="accordionExample">
            <div className="card" style={{ background: "rgba(0,0,0,0.1)" }}>
              <div className="card-header p-0" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left text-light p-3 rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    Languages
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <ul className="list-group shadow">
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-sm-4 col-6">Java</div>
                        <div className="col">
                          <div className="progress shadow shadow-sm bg-primary">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              75%
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-sm-4 col-6">Python</div>
                        <div className="col">
                          <div className="progress shadow shadow-sm bg-danger">
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              80%
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-sm-4 col-6">JavaScript</div>
                        <div className="col">
                          <div className="progress shadow shadow-sm bg-warning">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              60%
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-sm-4 col-6">HTML</div>
                        <div className="col">
                          <div className="progress shadow shadow-sm bg-dark">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="70"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              70%
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-0" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-light btn-block text-left collapsed p-3 rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Frameworks
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                <ul className="list-group shadow">
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-sm-4 col-6">Django</div>
                        <div className="col">
                          <div className="progress shadow shadow-sm bg-primary">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              75%
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-sm-4 col-6">Flask</div>
                        <div className="col">
                          <div className="progress shadow shadow-sm bg-danger">
                            <div
                              className="progress-bar bg-secondary"
                              role="progressbar"
                              style={{ width: "80%" }}
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              80%
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-sm-4 col-6">Hibernate</div>
                        <div className="col">
                          <div className="progress shadow shadow-sm bg-warning">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              style={{ width: "60%" }}
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              60%
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-sm-4 col-6">React</div>
                        <div className="col">
                          <div className="progress shadow shadow-sm bg-dark">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              style={{ width: "70%" }}
                              aria-valuenow="70"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              70%
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
