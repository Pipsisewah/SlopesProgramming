import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Router = () => {
    return (
            <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/register" component={Register} exact/>
                        <Route path="/login" component={Login} exact/>
                        <Route component={Error}/>
                    </Switch>
            </BrowserRouter>
    );
};

export default Router