import React from "react";
import * as MyPic from "../../assets/my_pic.jpg";
import BootstrapIcons from "../../../node_modules/bootstrap-icons/bootstrap-icons.svg";

const Homepage = () => {
  const skills = [
    {
      id: 1,
      name: "Languages",
      items: [
        ["Java", 75],
        ["Python", 80],
        ["JavaScript", 70],
        ["HTML", 80],
        ["CSS", 65],
      ],
    },
    {
      id: 2,
      name: "Frameworks",
      items: [
        ["Django", 75],
        ["Flask", 65],
        ["Hibernate", 70],
        ["React", 80],
      ],
    },
  ];
  return (
    <div className="container-fluid p-0">
      <div className="text-center px-0 py-4" id="homepage-about-me">
        <div className="container">
          <div id="image-cross-line" className="rounded m-0 p-0 d-flex">
            <p className="flex-fill h-100 bg-white" />
            <p className="h-100" style={{ width: "230px" }} />
            <p className="flex-fill h-100 bg-white" />
          </div>
          <div id="my-pic-circle" className="text-center">
            <img src={MyPic} alt="Mukesh Sharma" />
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
          <a href="#homepage-my-skills">
            <svg class="bi mt-5" id="down-arrow">
              <use xlinkHref={`${BootstrapIcons}#arrow-down-circle`} />
            </svg>
          </a>
        </div>
      </div>
      <div className="text-left p-4" id="homepage-my-skills">
        <div className="container">
          <h2 className="display-4 text-white text-shadow">My Skills -</h2>
          <hr className="text-light" />
          <div className="accordion" id="skills-accordion">
            {skills.map((skill) => (
              <div className="card" style={{ background: "rgba(0,0,0,0.1)" }}>
                <div className="card-header p-0" id={`heading-${skill.id}`}>
                  <h2 className="mb-0">
                    <button
                      className="btn btn-block text-left text-light p-3 rounded-0"
                      data-toggle="collapse"
                      data-target={`#collapse-${skill.id}`}
                      style={{ background: "rgba(0,0,0,0.3)" }}
                    >
                      {skill.name}
                    </button>
                  </h2>
                </div>
                <div
                  id={`collapse-${skill.id}`}
                  className={`collapse${skill.id === 1 ? " show" : ""}`}
                  aria-labelledby={`heading-${skill.id}`}
                  data-parent="#skills-accordion"
                >
                  <div className="card-body">
                    <ul className="list-group shadow">
                      {skill.items.map((item) => (
                        <li className="list-group-item">
                          <div className="row">
                            <div className="col-sm-4 col-6">{item[0]}</div>
                            <div className="col">
                              <div className="progress shadow shadow-sm bg-warning">
                                <div className="progress-bar bg-primary" style={{ width: `${item[1]}%` }}>{item[1]}%</div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="homepage-my-works">
        <div className="container">
            
        </div>
      </div>
    </div>
  );
};

export default Homepage;
