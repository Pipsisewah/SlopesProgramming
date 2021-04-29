import {PostData} from "../../api/util";
import {useToasts} from "react-toast-notifications";
import React from "react";

function NewProjectSubComponent(props) {
    const { addToast } = useToasts();

    function createProject(){
        PostData(
            'project',
            handleSuccessfulResponse,
            handleFailedResponse,
            {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                startDate: document.getElementById("startDate").value,
                endDate: document.getElementById("endDate").value,
                company: document.getElementById("company").value,
            })
    }

    function handleSuccessfulResponse(data){
        addToast(data.message, {
            appearance: 'success',
            autoDismiss: true,
        });
        window.dispatchEvent(new Event('refreshProjects'));
    }

    function handleFailedResponse(errors){
        for (let field of Object.keys(errors)){
            addToast(errors[field][0], {
                appearance: 'error',
                autoDismiss: true,
            });
        }
    }

    function ListCompanies(){
        if(props.companies) {
            return (
                <select id="company"
                        className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm">
                    {
                        props.companies.map(company => {
                            return (
                                <option value={company.id}>{company.name}</option>
                            )
                        })
                    }
                </select>
            )
        }else{
            return (
                <select id="company"
                        className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm">
                    <option>Loading...</option>
                </select>
            )
        }
    }

    return (
        <div className="w-full">
            <section className="w-full bg-white p-1 bg-white border border-gray-200 dark:bg-gray-800">
                <div className="text-lg text-gray-700 font-light dark:text-white">new project</div>

                <div>
                    <div className="grid grid-cols-1 sm:gap-12 mt-2 sm:grid-cols-5">
                        <div>
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="name">Name</label>
                            <input id="name" type="text"
                                   className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm"/>
                        </div>

                        <div>
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="description">Description</label>
                            <input id="description" type="text"
                                   className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm"/>
                        </div>

                        <div>
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="startDate">Start Date</label>
                            <input id="startDate" type="date"
                                   className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm"/>
                        </div>

                        <div>
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="endDate">End Date</label>
                            <input id="endDate" type="date"
                                   className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm"/>
                            </div>

                        <div>
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="company">Company</label>
                            <ListCompanies/>
                        </div>
                    </div>

                    <div className="flex justify-end mt-2">
                        <button
                            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-base rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-500"
                        onClick={createProject}>Save
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default NewProjectSubComponent;