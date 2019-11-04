import React, { Component } from 'react';
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import Moren from '../component/Moren'
import Detail from '../component/Detail'
import '../component/css/style.css'
class Xing extends Component{
    state={

    }
    render(){
        return <div className="he">
            <BrowserRouter>
            <Switch>
                <Route path="/moren" component={Moren}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Redirect from="/" to="/moren"></Redirect>
            </Switch>
            </BrowserRouter>
        </div>
    }
}
export default Xing