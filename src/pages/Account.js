import React from "react";

const Account = () => {


    return (
        <section className="w-full bg-white p-2 border border-gray-200 dark:bg-gray-800 max-w-l m-auto">
            <h2 className="text-lg font-semibold capitalize dark:text-white">Account Information</h2>

            <div className="m-auto max-w-l">
                <div className="grid grid-cols-1 gap-2 mt-4 sm:grid-cols-2 m-auto max-w-l">
                    <div className="max-w-l">
                        <label className="font-medium dark:text-gray-200 text-sm max-w-l" htmlFor="first_name">First Name</label>
                        <input id="first_name" type="text"
                               className="max-w-xl text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-sm"/>
                    </div>

                    <div>
                        <label className="font-medium dark:text-gray-200 text-sm" htmlFor="last_name">Last Name</label>
                        <input id="last_name" type="text"
                               className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-sm"/>
                    </div>

                    <div>
                        <label className="font-medium dark:text-gray-200 text-sm" htmlFor="city">City</label>
                        <input id="city" type="text"
                               className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-sm"/>
                    </div>

                    <div>
                        <label className="font-medium dark:text-gray-200 text-sm" htmlFor="state">State</label>
                        <select id="state" className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-sm">
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
                        <label className="font-medium dark:text-gray-200 text-sm" htmlFor="zip">ZipCode</label>
                        <input id="zip" type="number"
                               className="text-sm block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring text-sm"/>
                    </div>
                </div>
            </div>
        </section>
    )


}

export default Account;