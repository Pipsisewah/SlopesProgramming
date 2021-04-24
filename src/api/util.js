import axios from "axios";
import {stringify} from "postcss";

export async function GetData(endpoint, successCallback){
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(process.env.REACT_APP_API_URL + endpoint, {
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'accept': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        if (response.status === 200) {
            console.log(response);
            successCallback(response.data.data);
        } else {
            console.log(endpoint + " did not return a 200");
        }
    }catch (error){
        console.log("Failed To Get " + endpoint);
        console.log(error);
        //showErrorsFromAPI(error?.response?.data?.errors);
    }
}

export async function PostData(endpoint, successCallback, postData){
    try {
        console.log("Posting data to " + endpoint);
        const token = localStorage.getItem('token');
        const response = await axios.post(
            process.env.REACT_APP_API_URL + endpoint,
            postData,
            {
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'accept': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        if (response.status === 200) {
            console.log(response);
            successCallback(response.data.data);
        } else {
            console.log(endpoint + " did not return a 200");
        }
    }catch (error){
        console.log("Failed To POST to " + endpoint);
        console.log(JSON.stringify(error));
        //showErrorsFromAPI(error?.response?.data?.errors);
    }
}