import React, {useEffect, useState} from 'react';
import {GetData} from "../api/util";
import ProjectInformationComponent from "../components/ProjectInformationComponent";
import NewProjectSubComponent from "../components/subcomponents/NewProjectSubComponent";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        GetData('project', handleResponse)
    }, [])

    function handleResponse(data){
        setProjects(data);
    }

    function ListProjects(){
        if(projects) {
            return (
                <div className={"flex items-center flex-col bg-white w-screen h-screen gap-4"}>
                    <NewProjectSubComponent/>
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
                    <NewProjectSubComponent/>
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