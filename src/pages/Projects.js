import React, {useEffect, useState} from 'react';
import {GetData} from "../api/util";
import ProjectInformationComponent from "../components/ProjectInformationComponent";
import NewProjectSubComponent from "../components/subcomponents/NewProjectSubComponent";
import ProjectImage from "../svg/ProjectImage";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        GetData('project', handleResponse);
        GetData('company', storeCompanies);
        window.addEventListener('refreshProjects', () => {
            GetData('project', handleResponse);
        });
    }, [])

    function handleResponse(data){
        setProjects(data);
    }

    function storeCompanies(data){
        setCompanies(data);
    }

    function ListProjects(){
        if(projects) {
            return (
                <div className={"bg-gray-light flex flex-grow flex-col w-screen gap-4"}>
                    <NewProjectSubComponent companies={companies}/>
                    <div className="w-screen">
                        <div className="text-lg text-gray-700 font-light dark:text-white pb-4">projects</div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
                            <div>
                            {
                                projects.map(project => {
                                    return(
                                    <ProjectInformationComponent project={project}/>
                                    )
                                })
                            }
                            </div>
                            <ProjectImage/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <NewProjectSubComponent companies={companies}/>
                    <div>projects</div>
                </div>
            )
        }
    }


    return (
        <ListProjects/>
    )

}

export default Projects;