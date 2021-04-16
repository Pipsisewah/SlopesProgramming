import React, {useState} from "react";
import axios from "axios";
import { useToasts } from 'react-toast-notifications'

function RegisterComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { addToast } = useToasts();

    function showError(message){
        addToast(message, {
            appearance: 'error',
            autoDismiss: true,
        })
    }



    async function registerUserAxios(){
        try {
            console.log(email);
            console.log(password);
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                    name: 'Testing',
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
                console.log("User Successfully Created");
            } else {
                console.log("Failed To Create User");
                console.log(response);
            }
        }catch (error){
            console.log("Failed To Create User");
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
                            <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(event) => setPassword(event.target.value)}/>
                            <button type="button"
                                    class="transition duration-200 bg-gray-900 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                                    onClick={registerUserAxios}>
                                <span class="inline-block mr-2">Register</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor" class="w-4 h-4 inline-block">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </button>
                        </div>
                        <div class="py-5">
                            <div class="grid grid-cols-2 gap-1">
                                <div class="text-center sm:text-left whitespace-nowrap">
                                    <button
                                        class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                                        </svg>
                                    </button>
                                </div>
                                <div class="text-center sm:text-right whitespace-nowrap">
                                    <button
                                        class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom	">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                                        </svg>
                                        <span class="inline-block ml-1">Help</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-5">
                        <div class="grid grid-cols-2 gap-1">
                            <div class="text-center sm:text-left whitespace-nowrap">
                                <button
                                    class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                                    </svg>
                                    <span class="inline-block ml-1"><a href="/">Back to slopesprogramming.com</a></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default RegisterComponent;