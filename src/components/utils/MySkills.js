import React from "react";

const MySkills = () => {
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
    <div>
      {skills.map((skill, index) => (
        <div
          className="card"
          style={{ background: "rgba(0,0,0,0.1)" }}
          key={index}
        >
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
            className="collapse show"
            aria-labelledby={`heading-${skill.id}`}
          >
            <div className="card-body">
              <ul className="list-group shadow">
                {skill.items.map((item, i) => (
                  <li className="list-group-item" key={i + 1000}>
                    <div className="row">
                      <div className="col-sm-4 col-6">{item[0]}</div>
                      <div className="col">
                        <div className="progress shadow shadow-sm bg-success">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: `${item[1]}%` }}
                          >
                            {item[1]}%
                          </div>
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
  );
};

export default MySkills;
