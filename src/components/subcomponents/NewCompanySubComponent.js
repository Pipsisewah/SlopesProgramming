import {PostData} from "../../api/util";
import {useToasts} from "react-toast-notifications";
import React from "react";

function NewCompanySubComponent(props) {
    const { addToast } = useToasts();

    function createCompany(){
        PostData(
            'company',
            handleSuccessfulResponse,
            handleFailedResponse,
            {
                name: document.getElementById("name").value,
                description: document.getElementById("description").value,
                city: document.getElementById("city").value,
                state: document.getElementById("state").value,
                industry: document.getElementById("industry").value,
            })
    }

    function handleSuccessfulResponse(data){
        addToast(data.message, {
            appearance: 'success',
            autoDismiss: true,
        });
        window.dispatchEvent(new Event('refreshCompanies'));
    }

    function handleFailedResponse(errors){
        for (let field of Object.keys(errors)){
            addToast(errors[field][0], {
                appearance: 'error',
                autoDismiss: true,
            });
        }
    }

    function ListIndustries(){
        if(props.industries) {
            return (
                <select id="industry"
                        className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm">
                    {
                        props.industries.map(industry => {
                            return (
                                <option className="text-sm" value={industry.id}>{industry.name}</option>
                            )
                        })
                    }
                </select>
            )
        }else{
            return (
                <select id="industry"
                        className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm">
                    <option>Loading...</option>
                </select>
            )
        }
    }


    return (
        <div className="w-full">
            <section className="w-full bg-white p-1 bg-white border border-gray-200 dark:bg-gray-800">
                <div className="text-lg text-gray-700 font-light dark:text-white">new company</div>

                <div>
                    <div className="grid grid-cols-1 sm:gap-12 mt-2 sm:grid-cols-5">
                        <div>
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="name">Name</label>
                            <input id="name" type="text"
                                   className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm"/>
                        </div>

                        <div>
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="description">Description</label>
                            <input id="description" type="text"
                                   className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm"/>
                        </div>

                        <div>
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="city">City</label>
                            <input id="city" type="text"
                                   className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm"/>
                        </div>

                        <div>
                            <label className="font-light text-gray-700 dark:text-gray-200 text-sm" htmlFor="state">State</label>
                            <select id="state" className="text-sm block w-full px-2 py-1 mt-2 text-gray-700 bg-white border-b-2 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:outline-none focus:ring text-sm">
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AR">AR</option>
                                <option value="AZ">AZ</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DC">DC</option>
                                <option value="DE">DE</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="IA">IA</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="MA">MA</option>
                                <option value="MD">MD</option>
                                <option value="ME">ME</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MO">MO</option>
                                <option value="MS">MS</option>
                                <option value="MT">MT</option>
                                <option value="NC">NC</option>
                                <option value="NE">NE</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NV">NV</option>
                                <option value="NY">NY</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WI">WI</option>
                                <option value="WV">WV</option>
                                <option value="WY">WY</option>
                            </select>
                            </div>

                        <div>
                            <label className="font-light text-gray-700 text-sm dark:text-gray-200 text-sm" htmlFor="industry">Industry</label>
                            <ListIndustries/>
                        </div>
                    </div>

                    <div className="flex justify-end mt-2">
                        <button
                            className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-base rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-500"
                        onClick={createCompany}>Save
                        </button>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default NewCompanySubComponent;