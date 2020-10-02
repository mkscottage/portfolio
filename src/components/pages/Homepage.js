import React from "react";
import * as MyPic from "../../assets/my_pic.jpg";

const Homepage = () => {
  return (
    <div className="container-fluid p-0">
      <div
        className="bg-dark text-center px-0 py-4"
        style={{ position: "relative" }}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quisquam maiores facere minus at consequuntur ipsam minima! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Unde in nisi
            numquam vitae doloremque esse distinctio ducimus iusto suscipit,
            similique cumque, dicta totam, facere quia? Nesciunt, nam! Rem
            assumenda totam alias dolore accusantium vel, nisi excepturi sit
            commodi, reprehenderit ducimus.
          </p>
        </div>
      </div>
      <div className="bg-primary text-left p-4">
        <div className="container">
          <h2>My Skills -</h2>
          <ul className="text-light">
            <li className="row">
              <div className="col-4">Java</div>
              <div className="col">
                <div class="progress">
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
            </li>
            <li className="row">
              <div className="col-4">Python</div>
              <div className="col">
                <div class="progress">
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
            </li>
            <li className="row">
              <div className="col-4">JavaScript</div>
              <div className="col">
                <div class="progress">
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
            </li>
            <li className="row">
              <div className="col-4">HTML</div>
              <div className="col">
                <div class="progress">
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
