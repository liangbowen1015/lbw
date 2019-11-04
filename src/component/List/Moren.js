import React, { Component } from 'react';
import Guan from './second/Guan'
import Tui from './second/Tui'
import Re from './second/Re'
import { Switch, Route,Redirect} from 'react-router-dom'
import './style.css'
class Router extends Component {
    state = {
        //基本数据列表
        toplist: [  
            { title: "关注", path: "/moren/guan", component: Guan },
            { title: "推荐", path: "/moren/tui", component: Tui },
            { title: "热榜", path: "/moren/re", component: Re },
        ],
        idx:0
    }
    dian=(item,index)=>{
        this.props.history.push(item.path)  //用路由实现切换
        this.setState({   //更新数据 setState 下标更新
            idx:index
        })
    }
    render() {
        const { toplist,idx } = this.state
        return <div>
            <div className="top"> 
                {
                    toplist.map((item, index) => {
                        return <div className={[idx===index?'active':'']} onClick={()=>{this.dian(item,index)}} key={index}>{item.title}</div>
                    })
                   
                } 
            </div>
            <div className="bottom">
                <Switch>
                    {
                        toplist.map((item, index) => {
                            return <Route  key={index} path={item.path} component={item.component}></Route> 
                        })
                    }  
                     <Redirect from="/moren" to="/moren/guan"></Redirect>
                </Switch>
            </div>
        </div>
    }
}
export default Router