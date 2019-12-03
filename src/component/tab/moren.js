import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom'
import shou from '../tab/shou'
import fen from '../tab/fen'
import gou from '../tab/gou'
import my from '../tab/my'
import "../../component/css/style.css"
class Router extends Component {
    state = {
        toplist: [
            { title: "首页", path: "/moren/shou", component: shou },
            { title: "分类", path: "/moren/fen", component: fen },
            { title: "购物车", path: "/moren/gou", component: gou },
            { title: "我", path: "/moren/my", component: my },
        ]
    }
    dian = (item) => {
        this.props.history.push(item.path)
    }
    render() {
        const { toplist } = this.state
        return <div className="moren">
            <div className="main">
                <Switch>
                    {
                        toplist.map((item, index) => {
                            return <Route key={index} path={item.path} component={item.component}></Route>
                        })
                    } 
                </Switch>
                <Redirect from="/" to="/moren/shou"></Redirect>
            </div>

            <div className="foot">
                {
                    toplist.map((item, index) => {
                        return <div key={index} onClick={() => { this.dian(item) }}>
                            {item.title}
                        </div>
                    })
                }
               
            </div>
        </div>
    }
}
export default Router