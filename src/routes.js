import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import ClassList from "./components/ClassList/ClassList"
import Student from "./components/Student/Student"

export default (
<Switch>
    <Route path="/about" component={About}/>
    <Route path="/classlist/:class" component={ClassList}/>
    <Route path="/students/:id" component={Student}/>
    <Route path="/" component={Home}/>
</Switch>
)