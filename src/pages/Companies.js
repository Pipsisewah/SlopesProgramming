import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useToasts } from 'react-toast-notifications'

const Companies = () => {
    const { addToast } = useToasts();
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getCompanies();
    }, [])

    async function getCompanies(){
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(process.env.REACT_APP_API_URL + 'company', {
                    headers: {
                        'content-type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'accept': 'application/json',
                        "Authorization": `Bearer ${token}`
                    }
                }
            );
            if (response.status === 200) {
                setCompanies(response.data.data);
            } else {
                console.log("Companies did not return a 200");
            }
        }catch (error){
            console.log("Failed To Get Companies");
            console.log(error);
            //showErrorsFromAPI(error?.response?.data?.errors);
        }

    }

    function showErrorsFromAPI(errors){
        for (let field of Object.keys(errors)){
            showError(errors[field][0]);
        }
    }

    function showError(message){
        addToast(message, {
            appearance: 'error',
            autoDismiss: true,
        })
    }

    function ListCompanies(){
        if(companies) {
            return (
                <div className={"min-h-screen flex items-center justify-top px-4 bg-white"}>
                    {
                        companies.map(company => {
                                return (<div className={"max-w-xl w-full rounded-lg shadow-lg p-4 flex md:flex-row flex-col"} key={company.id}>
                                    <h4 className={"font-semibold text-lg tracking-wide"}>{company.name}</h4>
                                    <p className={"text-gray-500 my-1"}>{company.description}</p>
                                </div>)
                            }
                        )
                    }
                </div>
            )
        }else{
            return (
                <div>Companies</div>
            )
        }
    }


    return (
            <ListCompanies/>
    )

}

export default Companies;