import React from "react";
import "../css/navigation.css";
import { useDispatch } from "react-redux";
import { navScreen } from "../redux/features/navSlice";

import Tooltip from "@mui/material/Tooltip";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

type Props = {};

const Navigation: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navSelectedButton = useSelector(
    (state: RootState) => state.navReducer.screen
  );

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(navScreen(e.currentTarget.id));
  };

  const onMouseEnterOnButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.add("hover");
  };

  const onMouseLeaveOnButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.remove("hover");
  };

  const handleFocus = () => {
    console.log("fouces");
  };

  const handleBlur = () => {
    console.log("onblur");
  };

  const navItems = [
    { id: "mainPage", title: "Main Page", icon: <HomeRoundedIcon /> },
    { id: "skills", title: "Skills", icon: <PsychologyRoundedIcon /> },
    { id: "projects", title: "Projects", icon: <DataObjectRoundedIcon /> },
    { id: "education", title: "Education", icon: <SchoolRoundedIcon /> },
    { id: "experience", title: "Experience", icon: <BusinessRoundedIcon /> },
  ];

  return (
    <div className="Navigation">
      {navItems.map((item) => (
        <Tooltip
          key={item.id}
          title={item.title}
          arrow
          disableInteractive
          placement="left"
        >
          <button
            className={`navButton ${item.id} ${
              navSelectedButton === item.id ? "selected" : ""
            }`}
            id={item.id}
            onClick={onButtonClick}
            onMouseEnter={onMouseEnterOnButton}
            onMouseLeave={onMouseLeaveOnButton}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {item.icon}
          </button>
        </Tooltip>
      ))}
    </div>
  );
};

export default Navigation;
