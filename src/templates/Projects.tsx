import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../css/project.css";
import Divider from "@mui/material/Divider";

type Props = {};

const Projects = (props: Props) => {
    const data = useSelector((state: RootState) => state.dataReducer).content
        .projects;
    return (
        <div className="project-wrapper content-wrapper">
            <div className={`content-title`} > Projects </div>
            <div className="project-content-wrapper scrollbar-thin scrollbar-thumb-white  scrollbar-thumb-rounded">

                {data.map((item, index) => (
                    <>
                        <div className="project-content" id={`project-content-${index}`} key={index * Math.random()}  >
                            <div className="project-name" >
                                {item.projectName}
                            </div>
                            <div className="project-scope" >

                                {item.projectScope}
                            </div>
                            <div className={`technologyUsed`}>
                                Technology Used :
                                {item.technologiesUsed.map((tech, y) => (
                                    <div key={y * Math.random()}>{tech}</div>
                                ))}
                            </div>

                        </div>
                        <Divider variant="middle" />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Projects;
