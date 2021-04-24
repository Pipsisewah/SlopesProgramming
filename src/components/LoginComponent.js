import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToasts } from 'react-toast-notifications'
import HelpBar from "./subcomponents/HelpBarSubComponent";
import BackToHomeLinkSubComponent from "./subcomponents/BackToHomeLinkSubComponent";

function LoginComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { addToast } = useToasts();
    let history = useHistory();

    function showError(message){
        addToast(message, {
            appearance: 'error',
            autoDismiss: true,
        })
    }



    async function loginUser(){
        try {
            console.log(email);
            console.log(password);

            const response = await axios.post(process.env.REACT_APP_API_URL + 'login', {
                    email: email,
                    password: password,
                }, {
                    headers: {
                        'content-type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'accept': 'application/json',
                    }
                }
            );
            if (response.status === 200) {
                localStorage.setItem('token', response.data.access_token);
                window.dispatchEvent(new Event('token'));
                addToast("Successfully Logged In!", {
                    appearance: 'success',
                    autoDismiss: true,
                });
                history.push("/");
            } else {
                console.log("Failed To Login");
            }
        }catch (error){
            console.log("Failed To Login");
            showErrorsFromAPI(error?.response?.data?.errors);
        }

    }

    function showErrorsFromAPI(errors){
        for (let field of Object.keys(errors)){
            showError(errors[field][0]);
        }
    }



    return (
        <div class="min-h-screen bg-white flex flex-col justify-center sm:py-12">
            <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 class="font-bold text-center text-2xl mb-5">Slopes Programming</h1>
                <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div class="px-5 py-7">
                        <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(event) => setEmail(event.target.value)}/>
                        <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                        <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(event) => setPassword(event.target.value)}/>
                        <button type="button"
                                class="transition duration-200 bg-gray-900 hover:bg-blue-900 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                                onClick={loginUser}>
                            <span class="inline-block mr-2">Login</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" class="w-4 h-4 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </button>
                    </div>
                    <HelpBar/>
                </div>
                <BackToHomeLinkSubComponent/>
            </div>
        </div>
    );
}

export default LoginComponent;