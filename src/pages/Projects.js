import React, {useEffect, useState} from 'react';
import GetData from "../api/util";
import ProjectInformationComponent from "../components/ProjectInformationComponent";

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
                <div className={"flex items-center flex-col bg-white w-full gap-4"}>
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
                <div>Projects</div>
            )
        }
    }


    return (
        <ListProjects/>
    )

}

export default Projects;