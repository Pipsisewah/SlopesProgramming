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
                <div className={"flex flex-grow flex-col bg-white w-screen h-screen gap-4"}>
                    <NewCompanySubComponent industries={industries}/>
                    <div className="w-screen">
                        <div className="text-4xl font-semibold pb-4">Companies</div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
                            <CompanyImage/>
                            <div>
                            {
                                companies.map(company => { return(
                                    <CompanyInformationComponent company={company}/>
                                    )
                                })
                            }
                            </div>
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