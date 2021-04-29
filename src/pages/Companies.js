import React, {useEffect, useState} from 'react';
import {GetData} from "../api/util";
import CompanyInformationComponent from "../components/CompanyInformationComponent";
import NewCompanySubComponent from "../components/subcomponents/NewCompanySubComponent";
import CompanyImage from "../svg/CompanyImage";

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    const [industries, setIndustries] = useState([]);


    useEffect(() => {
        GetData('company', handleResponse);
        GetData('industry', storeIndustries);
        window.addEventListener('refreshCompanies', () => {
            GetData('company', handleResponse);
        });
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
                <div className={"bg-gray-light flex flex-grow flex-col w-screen gap-4"}>
                    <NewCompanySubComponent industries={industries}/>
                    <div className="w-screen">
                        <div className="text-lg text-gray-700 font-light dark:text-white pb-4">companies</div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
                            <div>
                            {
                                companies.map(company => { return(
                                    <CompanyInformationComponent company={company}/>
                                    )
                                })
                            }
                            </div>
                            <CompanyImage/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <NewCompanySubComponent industries={industries}/>
                    <div className="w-screen">
                        <div className="text-4xl font-semibold pb-4">Companies</div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
                            <CompanyImage/>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
            <ListCompanies/>
    )

}

export default Companies;