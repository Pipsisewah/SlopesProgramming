import PropTypes from "prop-types";
import React from "react";

const ProjectInformationComponent = ({project}) => {

    ProjectInformationComponent.propTypes = {
        project: PropTypes.string,
    };

    ProjectInformationComponent.defaultProps = {
        project: '',
    };

    return (
        <div
            className={"bg-gray-50 max-w-2xl w-full grid grid-rows-3 grid-cols-8 gap-1 mb-4 rounded-md p-4 shadow-md border border-white rounded"}
            key={project.id}>
            <p className={"col-span-3 text-md text-left divide-y-1 pl-4"}>{project.name}</p>
            <p className={"col-span-3 font-thin text-xs row-span-2 w-full object-center text-black my-1 text-left pl-4"}>{project.description}</p>

        </div>
    )
}

export default ProjectInformationComponent;