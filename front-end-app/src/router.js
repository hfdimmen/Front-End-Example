import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./pages/home/Home";
import Facts from "./pages/facts/Facts";
import PageNotFound from "./pages/pageNotFound/PageNotFound";

const Router = (props) => (
    <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" exact to="/home" />
        <Route path="/facts" component={Facts} factItems={props.factItems}/>
        <Route component={PageNotFound} />
    </Switch>
);

export default Router;