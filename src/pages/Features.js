import React, {useEffect, useState} from 'react';
import {GetData} from "../api/util";
import FeatureInformationComponent from "../components/FeatureInformationComponent";
import NewFeatureSubComponent from "../components/subcomponents/NewFeatureSubComponent";

const Features = () => {
    const [projects, setProjects] = useState([]);
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        GetData('feature', handleResponse);
        GetData('project', storeProjects);
        window.addEventListener('refreshFeatures', () => {
            GetData('feature', handleResponse);
        });
    }, [])

    function handleResponse(data){
        setFeatures(data);
    }

    function storeProjects(data){
        setProjects(data);
    }


    function ListFeatures(){
        if(features) {
            return (
                <div className={"flex items-center flex-col bg-white w-full gap-4"}>
                    <NewFeatureSubComponent projects={projects}/>
                    {
                        features.map(feature => { return(
                            <FeatureInformationComponent feature={feature}/>
                        )
                        })
                    }
                </div>
            )
        }else{
            return (
                <div>
                    <NewFeatureSubComponent projects={projects}/>
                    <div>Features</div>
                </div>
            )
        }
    }


    return (
        <ListFeatures/>
    )

}

export default Features;