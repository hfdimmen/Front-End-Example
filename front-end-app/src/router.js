import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./pages/home/Home";
import Facts from "./pages/facts/Facts";
import Unknown from "./pages/unknown_page/Unknown";

const Router = (props) => (
    <Switch>
        <Route path="/home" component={Home} />
        <Route path="/facts" component={Facts} factItems={props.factItems}/>
        <Route path="/unknown_page" component={Unknown} />
        <Redirect from="/" exact to="/home" />
        <Redirect exact to="/unknown_page" />
    </Switch>
);

export default Router;