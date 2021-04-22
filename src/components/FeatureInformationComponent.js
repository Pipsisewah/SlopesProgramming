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
                className={"footer max-w-xl w-full grid grid-rows-3 grid-cols-8 gap-1 border border-gray rounded"}
                key={feature.id}>
                 <div className={"col-span-1 row-span-4 bg-purple-500"}><div className={"m-auto p-auto h-full flex items-center justify-center"}><TiFlashOutline className={"stroke-0 stroke-current text-white"} /></div></div>
                <p className={"col-span-7 font-semibold text-md text-left divide-y-1 pl-4"}>{feature.name}</p>
                <p className={"col-span-3 font-thin text-xs row-span-2 w-full object-center text-black my-1 text-left pl-4"}>{feature.description}</p>

            </div>
    )
}

export default FeatureInformationComponent;