import PropTypes from "prop-types";
import React from "react";

const CompanyInformationComponent = ({company}) => {

    CompanyInformationComponent.propTypes = {
        company: PropTypes.string,
    };

    CompanyInformationComponent.defaultProps = {
        company: '',
    };

    return (
             <div
                className={"bg-gray-100 max-w-2xl w-full grid grid-rows-3 grid-cols-8 gap-1 mb-4 rounded-md p-4 shadow-md border border-white rounded"}
                key={company.id}>
                <p className={"col-span-4 text-md text-left divide-y-1 pl-4"}>{company.name}</p>
                 <p className={"col-span-2 font-thin text-xs w-full object-center text-gray-500 my-1 pl-4"}>{company.city}, {company.state}</p>
                 <p className={"col-span-2 font-thin text-xs row-span-2 w-full object-center text-black my-1 text-left pl-4"}>{company.industry.name}</p>
                <p className={"col-span-3 font-thin text-xs row-span-2 w-full object-center text-black my-1 text-left pl-4"}>{company.description}</p>

            </div>
    )
}

export default CompanyInformationComponent;