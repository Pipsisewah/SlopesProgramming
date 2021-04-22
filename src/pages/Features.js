import React, {useEffect, useState} from 'react';
import GetData from "../api/util";

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
                <div className={"flex items-center flex-col bg-white w-full"}>
                    {
                        features.map(feature => {
                                return (<div className={"max-w-md w-full lg:flex grid w-full grid-rows-3 grid-flow-col shadow-lg gap-4"} key={feature.id}>
                                    <h4 className={"col-span-3 font-semibold text-lg tracking-wide"}>{feature.name}</h4>
                                    <p className={"col-span-2 row-span-2 w-full object-center text-gray-500 my-1"}>{feature.description}</p>
                                </div>)
                            }
                        )
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