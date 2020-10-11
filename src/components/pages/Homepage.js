import React, { Fragment } from "react";
import MySkills from "../utils/MySkills";
import MyPic from "../../assets/my_pic.jpg";
import BootstrapIcons from "../../../node_modules/bootstrap-icons/bootstrap-icons.svg";
import MyWorks from "../utils/MyWorks";
import ScrollSpy from "../utils/ScrollSpy";
import scrollIntoView from "../utils/scrollIntoView";
import {ReactComponent as FacebookIcon} from "../../assets/nucleo-social-icons/svg/social-1_round-facebook.svg";
import {ReactComponent as WhatsappIcon} from "../../assets/nucleo-social-icons/svg/social-1_logo-whatsapp.svg";
import {ReactComponent as InstagramIcon} from "../../assets/nucleo-social-icons/svg/social-1_round-instagram.svg";
import {ReactComponent as GithubIcon} from "../../assets/nucleo-social-icons/svg/social-1_logo-github.svg";

const Homepage = () => {
  return (
    <Fragment>
      <div className="container-fluid p-0" id="homepage">
        {/********************************* homepage-about-me ***********************************/}
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
            <p className="text-dark">
              I am a full stack developer and an enthusiast learner. I worked on
              many technologies including some powerful frameworks. I started my
              learning using C/C++, Java, Python then moved to web technologies
              such as HTML, CSS, JavaScript, JQuery, Bootstrap, PHP. Then
              started learning some frameworks such as Django (Python -
              backend), Flask (Python - backend), Hibernate (Java - Backend) and
              React (JavaScript - Frontend).
            </p>
            <button
              className="btn btn-link"
              onClick={() => scrollIntoView("#homepage-my-skills")}
            >
              <svg className="bi mt-5" id="down-arrow">
                <use xlinkHref={`${BootstrapIcons}#arrow-down-circle`} />
              </svg>
            </button>
          </div>
        </div>
        {/********************************* homepage-about-me-end *******************************/}

        {/********************************* homepage-my-skills **********************************/}
        <div className="text-left p-4" id="homepage-my-skills">
          <div className="container">
            <h2 className="display-4 text-white text-shadow">My Skills -</h2>
            <hr className="text-light" />
            <MySkills />
          </div>
        </div>
        {/********************************* homepage-my-skills-end ******************************/}

        {/********************************* homepage-my-works ***********************************/}
        <div id="homepage-my-works">
          <div className="container">
            <h2 className="display-4 text-white text-shadow">My Works -</h2>
            <hr className="text-light" />
            <MyWorks />
          </div>
        </div>
        {/********************************* homepage-my-works-end *******************************/}
        {/********************************* homepage-social-media *******************************/}
        <div id="homepage-social-medias">
          <div className="container d-flex justify-content-evenly p-1">
            <button className="btn btn-link"><FacebookIcon /></button>
            <button className="btn btn-link"><WhatsappIcon /></button>
            <button className="btn btn-link"><InstagramIcon /></button>
            <button className="btn btn-link"><GithubIcon /></button>
          </div>
        </div>
        {/********************************* homepage-social-media-end ***************************/}
      </div>

      <ScrollSpy
        sections={[
          ["About Me", "#homepage-about-me"],
          ["My Skills", "#homepage-my-skills"],
          ["My Works", "#homepage-my-works"],
        ]}
      />
    </Fragment>
  );
};

export default Homepage;
