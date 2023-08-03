import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import "../css/experience.css";
import { Divider } from "@mui/material";

type Props = {};

const Experience = (props: Props) => {
  const data = useSelector((state: RootState) => state.dataReducer).content
    .experiences;

  return (
    <div className="experience-wrapper content-wrapper">
      <div className={`content-title`}>Experience</div>
      <div className="experience-content-wrapper scrollbar-thin scrollbar-thumb-white  scrollbar-thumb-rounded">
        {data.map((item, index) => (
          <div key={index}>
            <div className="experience-content-container">
              {Object.entries(item).map(([key, value]) => (
                <div key={key} className="experience-content">
                  <dt className=" font-medium leading-6 ">{key}:</dt>
                  <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                    {value}
                  </dd>
                </div>
              ))}
            </div>
            <Divider variant="middle" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
