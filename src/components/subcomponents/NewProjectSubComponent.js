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
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
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
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>Loading...</option>
                </select>
            )
        }
    }

    return (
        <div className="w-full">
            <section className="w-full p-2 bg-white border border-gray-200 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">New Project</h2>

                <div>
                    <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-5">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="name">Name</label>
                            <input id="name" type="text"
                                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="description">Description</label>
                            <input id="description" type="text"
                                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="startDate">Start Date</label>
                            <input id="startDate" type="date"
                                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="endDate">End Date</label>
                            <input id="endDate" type="date"
                                   className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                            </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="company">Company</label>
                            <ListCompanies/>
                        </div>
                    </div>

                    <div className="flex justify-end mt-2">
                        <button
                            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                        onClick={createProject}>Save
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default NewProjectSubComponent;