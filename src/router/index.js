import React,{Component} from 'react';
import Moren from '../component/List/Moren'
import xiang from '../component/Detail/detail'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
class Router extends Component{
    state={

    }
    render(){
        return <div>
            <BrowserRouter>
            <Switch>
                <Route path="/moren" component={Moren}></Route>
                <Route path="/xiang" component={xiang}></Route>
                  <Redirect from="/" to="/moren"></Redirect>
            </Switch>
              
            </BrowserRouter>
        </div>
    }
} 
export default Router