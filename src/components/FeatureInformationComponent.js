import PropTypes from "prop-types";
import React from "react";
import {TiFlashOutline} from "react-icons/all";

const FeatureInformationComponent = ({feature}) => {

    FeatureInformationComponent.propTypes = {
        feature: PropTypes.string,
    };

    FeatureInformationComponent.defaultProps = {
        feature: '',
    };

    return (
        <div
            className={"bg-gray-50 max-w-2xl w-full grid grid-rows-3 grid-cols-8 gap-1 mb-4 rounded-md p-4 shadow-md border border-white rounded"}
            key={feature.id}>
            <p className={"col-span-3 text-md text-left divide-y-1 pl-4"}>{feature.name}</p>
            <p className={"col-span-3 font-thin text-xs row-span-2 w-full object-center text-black my-1 text-left pl-4"}>{feature.description}</p>

        </div>
    )
}

export default FeatureInformationComponent;