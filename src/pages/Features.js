import React, {useEffect, useState} from 'react';
import {GetData} from "../api/util";
import FeatureInformationComponent from "../components/FeatureInformationComponent";
import NewFeatureSubComponent from "../components/subcomponents/NewFeatureSubComponent";
import FeatureImage from "../svg/FeatureImage";

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
                <div className={"bg-gray-light flex flex-grow flex-col w-screen gap-4"}>
                    <NewFeatureSubComponent projects={projects}/>
                    <div className="w-screen">
                        <div className="text-lg text-gray-700 font-light dark:text-white pb-4">features</div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
                            <div>
                                {
                                    features.map(feature => { return(
                                        <FeatureInformationComponent feature={feature}/>
                                    )
                                    })
                                }
                            </div>
                            <FeatureImage/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return (
                <div>
                    <NewFeatureSubComponent projects={projects}/>
                    <div>features</div>
                </div>
            )
        }
    }


    return (
        <ListFeatures/>
    )

}

export default Features;