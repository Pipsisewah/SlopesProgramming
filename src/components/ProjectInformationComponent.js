import PropTypes from "prop-types";
import React from "react";
import {AiOutlineProject} from "react-icons/all";

const ProjectInformationComponent = ({project}) => {

    ProjectInformationComponent.propTypes = {
        project: PropTypes.string,
    };

    ProjectInformationComponent.defaultProps = {
        project: '',
    };

    return (
        <div
            className={"bg-white max-w-2xl w-full grid grid-rows-3 grid-cols-9 gap-1 mb-4 rounded-md p-4 mx-auto shadow-md border border-white rounded"}
            key={project.id}>
            <div className="flex col-span-4 divide-y-1 pl-4">
                <AiOutlineProject color="#63b9ff"/>
                <p className={"text-md font-thin text-left pl-4"}>{project.name}</p>
            </div>
            <div className="col-span-9 border-b border-gray-300 h-2"> </div>
            <p className={"col-span-3 font-thin text-xs row-span-2 w-full object-center text-black my-1 text-left pl-4"}>{project.description}</p>

        </div>
    )
}

export default ProjectInformationComponent;