import React from "react";
import "./SideBar.css";
import { SideBarData } from "./SideBarData";

const SideBar = () => {
  return (
    <div className="SideBbar">
      <ul className="SidebbarList">
        {SideBarData.map((val, key) => {
          return (
            <li key={key} className="listicontitle">
              <div className="icontitle">
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
