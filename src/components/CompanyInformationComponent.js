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
                className={"footer max-w-xl w-full grid grid-rows-3 grid-cols-8 gap-1 border border-gray rounded"}
                key={company.id}>
                 <div className={"col-span-1 row-span-4 bg-blue-500"}> </div>
                <p className={"col-span-5 font-semibold text-md text-left divide-y-1 pl-4"}>{company.name}</p>
                 <p className={"col-span-2 font-thin text-xs w-full object-center text-gray-500 my-1 pl-4"}>{company.city}, {company.state}</p>
                <p className={"col-span-3 font-thin text-xs row-span-2 w-full object-center text-black my-1 text-left pl-4"}>{company.description}</p>

            </div>
    )
}

export default CompanyInformationComponent;