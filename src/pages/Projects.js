import React, {useEffect, useState} from 'react';
import GetData from "../api/util";

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
                <div className={"flex items-center flex-col bg-white w-full"}>
                    {
                        projects.map(project => {
                                return (<div className={"max-w-md w-full lg:flex grid w-full grid-rows-3 grid-flow-col shadow-lg gap-4"} key={project.id}>
                                    <h4 className={"col-span-3 font-semibold text-lg tracking-wide"}>{project.name}</h4>
                                    <p className={"col-span-2 row-span-2 w-full object-center text-gray-500 my-1"}>{project.description}</p>
                                </div>)
                            }
                        )
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