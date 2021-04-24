import React, {useEffect, useState} from 'react';
import GetData from "../api/util";
import CompanyInformationComponent from "../components/CompanyInformationComponent";
import NewCompanySubComponent from "../components/subcomponents/NewCompanySubComponent";

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        GetData('company', handleResponse)
    }, [])

    function handleResponse(data){
        setCompanies(data);
    }

    function ListCompanies() {
        if (companies) {
            return (
                <div className={"flex items-center flex-col bg-white w-full gap-4"}>
                    <NewCompanySubComponent/>
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
                    <NewCompanySubComponent/>
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