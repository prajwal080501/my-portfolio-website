import React from "react";
import "./DynamicText.css";

const DynamicText = () => {
  return (
    <div className="wrapper">
      <ul className="dynamic-text">
        <li>
          <span>ReactJS</span>
        </li>
      
        <li>
          <span>JS</span>
        </li>
        <li>
          <span>HTML</span>
        </li>
        <li>
          <span>CSS</span>
        </li>
      </ul>
    </div>
  );
};

export default DynamicText;
