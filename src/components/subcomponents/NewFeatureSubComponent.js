import {PostData} from "../../api/util";
import {useToasts} from "react-toast-notifications";
import React from "react";

function NewFeatureSubComponent(props) {
    const { addToast } = useToasts();

    function createFeature(){
        PostData(
            'feature',
            handleSuccessfulCreateFeatureResponse,
            handleFailedCreateFeatureResponse,
            {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                startDate: document.getElementById("startDate").value,
                endDate: document.getElementById("endDate").value,
                project: document.getElementById("project").value,
            })
    }

    function handleSuccessfulCreateFeatureResponse(data){
        addToast(data.message, {
            appearance: 'success',
            autoDismiss: true,
        });
        window.dispatchEvent(new Event('refreshFeatures'));
    }

    function handleFailedCreateFeatureResponse(errors){
        for (let field of Object.keys(errors)){
            addToast(errors[field][0], {
                appearance: 'error',
                autoDismiss: true,
            });
        }
    }

    function ListProjects(){
        if(props.projects) {
            return (
                <select id="project"
                        className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm">
                    {
                        props.projects.map(project => {
                            return (
                                <option value={project.id}>{project.name}</option>
                            )
                        })
                    }
                </select>
            )
        }else{
            return (
                <select id="project"
                        className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm">
                    <option>Loading...</option>
                </select>
            )
        }
    }

    return (
        <div className="w-full">
            <section className="w-full bg-white p-1 bg-white border border-gray-200 dark:bg-gray-800">
                <h2 className="text-lg text-gray-700 font-light dark:text-white">new feature</h2>

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
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="company">Project</label>
                            <ListProjects/>
                        </div>
                    </div>

                    <div className="flex justify-end mt-2">
                        <button
                            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-base rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-500"
                        onClick={createFeature}>Save
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default NewFeatureSubComponent;