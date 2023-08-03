import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import "../css/skills.css";

type Props = {};

const Skills = (props: Props) => {
  const data = useSelector((state: RootState) => state.dataReducer).content
    .skills;

  return (
    <div className="skills-wrapper content-wrapper">
      <div className={`content-title`}>Skills</div>

      <div className="skill-cards-wrapper scrollbar-thin scrollbar-thumb-white  scrollbar-thumb-rounded">
        {data.map((item, index) => (
          <div key={index} id={`card_${index}`} className="card">
            <div className="title">{item.title}</div>
            <div className="text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
