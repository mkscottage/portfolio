import React, { useEffect, useState } from "react";
import scrollIntoView from "./scrollIntoView";
import BootstrapIcons from "../../../node_modules/bootstrap-icons/bootstrap-icons.svg";
import bootstrap from "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import PropTypes from "prop-types";

const ScrollSpy = ({ sections }) => {
  useEffect(() => {
    new bootstrap.ScrollSpy(document.body, {
      target: "#scroll-spy-menu-items",
    });
    // eslint-disable-next-line
  }, []);

  let scrollSpyMenu = null;

  const [showSS, setShowSS] = useState(false);

  const onClickSSB = () => {
    scrollSpyMenu = document.querySelector("#scroll-spy-menu");
    if (!showSS) scrollSpyMenu.style.right = "70px";
    else scrollSpyMenu.style.right = "-120px";

    setShowSS(!showSS);
  };

  return (
    <div id="scroll-spy">
      <button className="btn btn-link" id="scroll-spy-btn" onClick={onClickSSB}>
        <svg className="bi h-100 w-100">
          <use
            xlinkHref={`${BootstrapIcons}#${
              !showSS ? "arrow-left-circle-fill" : "x-circle-fill"
            }`}
          />
        </svg>
      </button>

      <div id="scroll-spy-menu">
        <div className="list-group" id="scroll-spy-menu-items">
          {sections.map((section, i) => (
            <a
              className="list-group-item list-group-item-action"
              data-target={section[1]}
              onClick={() => scrollIntoView(section[1])}
              key={i}
            >
              {section[0]}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

ScrollSpy.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default ScrollSpy;
