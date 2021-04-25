import React, {useEffect, useState} from 'react';
import {GetData} from "../api/util";
import CompanyInformationComponent from "../components/CompanyInformationComponent";
import NewCompanySubComponent from "../components/subcomponents/NewCompanySubComponent";

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [industries, setIndustries] = useState([]);


    useEffect(() => {
        GetData('company', handleResponse);
        GetData('industry', storeIndustries);
    }, [])

    function handleResponse(data){
        setCompanies(data);
    }

    function storeIndustries(data){
        setIndustries(data);
    }

    function ListCompanies() {
        if (companies) {
            return (
                <div className={"flex flex-grow items-center flex-col bg-white w-screen h-screen gap-4"}>
                    <NewCompanySubComponent industries={industries}/>
                    <div>Companies</div>
                    {
                        companies.map(company => { return(
                            <CompanyInformationComponent company={company}/>
                            )
                        })
                    }
                </div>
            )
        } else {
            return (
                <div>
                    <NewCompanySubComponent industries={industries}/>
                    <div>Companies</div>
                </div>
            )
        }
    }

    return (
            <ListCompanies/>
    )

}

export default Companies;