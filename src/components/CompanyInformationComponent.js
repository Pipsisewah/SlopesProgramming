import PropTypes from "prop-types";
import React from "react";
import {RiBuilding2Line} from "react-icons/all";

const CompanyInformationComponent = ({company}) => {

    CompanyInformationComponent.propTypes = {
        company: PropTypes.string,
    };

    CompanyInformationComponent.defaultProps = {
        company: '',
    };

    return (
             <div
                className={"bg-white max-w-2xl w-full grid grid-rows-3 grid-cols-9 gap-1 mb-4 rounded-md p-4 mx-auto shadow-md border border-white rounded"}
                key={company.id}>
                 <div className="flex col-span-4 divide-y-1 pl-4">
                     <RiBuilding2Line color="#63b9ff"/>
                     <p className={"text-md font-thin text-left pl-4 z-50"}>{company.name}</p>
                </div>
                 <p className={"col-span-2 font-thin text-xs w-full object-center text-gray-500 my-1 pl-4"}>{company.city}, {company.state}</p>
                 <p className={"col-span-2 font-thin text-xs w-full object-center text-black my-1 text-left pl-4"}>{company.industry.name}</p>
                 <div className="col-span-9 border-b border-gray-300 h-2"> </div>
                <p className={"col-span-3 font-thin text-xs row-span-2 w-full object-center text-black my-1 text-left pl-4"}>{company.description}</p>

            </div>
    )
}

export default CompanyInformationComponent;