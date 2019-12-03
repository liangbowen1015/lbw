import React, { Component } from 'react';
import {BrowserRouter,Switch,Redirect,Route} from 'react-router-dom'
import moren from '../component/tab/moren'
import detail from '../component/tab/detail'
class Router extends Component{
    render(){
        return <div className="router">
            <BrowserRouter>
            <Switch>
                <Route path="/moren" component={moren}></Route>
                <Route path="/detail" component={detail}></Route>
            </Switch>
            <Redirect from='/' to="/moren/shou"></Redirect>
            </BrowserRouter>
        </div>
    }
}
export default Router