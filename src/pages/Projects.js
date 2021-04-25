import React, {useEffect, useState} from 'react';
import {GetData} from "../api/util";
import ProjectInformationComponent from "../components/ProjectInformationComponent";
import NewProjectSubComponent from "../components/subcomponents/NewProjectSubComponent";

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
                <div className={"flex items-center flex-col bg-white w-screen h-screen gap-4"}>
                    <NewProjectSubComponent companies={companies}/>
                    <div>Projects</div>
                    {
                        projects.map(project => { return(
                            <ProjectInformationComponent project={project}/>
                        )
                        })
                    }
                </div>
            )
        }else{
            return (
                <div>
                    <NewProjectSubComponent companies={companies}/>
                    <div>Projects</div>
                </div>
            )
        }
    }


    return (
        <ListProjects/>
    )

}

export default Projects;