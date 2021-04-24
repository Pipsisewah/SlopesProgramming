import React, {useEffect, useState} from 'react';
import {GetData} from "../api/util";
import FeatureInformationComponent from "../components/FeatureInformationComponent";

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
            GetData('feature', handleResponse);
    }, [])

    function handleResponse(data){
        console.log(data);
        setFeatures(data);
    }


    function ListFeatures(){
        if(features) {
            return (
                <div className={"flex items-center flex-col bg-white w-full gap-4"}>
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
                <div>Features</div>
            )
        }
    }


    return (
        <ListFeatures/>
    )

}

export default Features;