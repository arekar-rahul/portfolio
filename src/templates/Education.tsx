import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import "../css/education.css";
import { Divider } from "@mui/material";

type Props = {};

const Education = (props: Props) => {
  const data = useSelector((state: RootState) => state.dataReducer).content
    .education;

  return (
    <div className="eduation-wrapper content-wrapper ">
      <div className={`content-title`}>Education</div>
      <div className="table-wrapper">
        <table>
          <tr>
            <th>Degree</th>
            <th>College</th>
            <th>Board</th>
            <th>Location</th>
            <th>Year</th>
            <th>Score</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.degree}</td>
                <td>{val.college}</td>
                <td>{val.board}</td>
                <td>{val.location}</td>
                <td>{val.year}</td>
                <td>{val.score}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="eduaction-list-wrapper scrollbar-thin scrollbar-thumb-white  scrollbar-thumb-rounded">
        {data.map((val, index) => {
          return (
            <div key={index}>
              <div className="experience-content-container">
                {Object.entries(val).map(([key, value]) => (
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
          );
        })}
      </div>
    </div>
  );
};

export default Education;
