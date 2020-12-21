import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./pages/home/Home";
import Facts from "./pages/facts/Facts";

const Router = (props) => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/facts" component={Facts} factItems={props.factItems}/>
        <Redirect from="/" exact to="/home" />
    </Switch>
);

export default Router;