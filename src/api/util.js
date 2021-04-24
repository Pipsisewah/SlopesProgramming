import axios from "axios";

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

export async function PostData(endpoint, successCallback, failureCallback, postData){
    try {
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
            successCallback(response.data.data);
        }else if(response.status === 201){
            successCallback(response.data);
        } else {
            console.log(endpoint + " did not return a 200");
        }
    }catch (error){
        failureCallback(error?.response?.data?.errors);
    }
}