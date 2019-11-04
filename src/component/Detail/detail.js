import React,{Component} from 'react';

class Router extends Component{
    state={
        
    }
    fan=()=>{
        this.props.history.Backgo()  //返回首页
    }
    render(){
        console.log(this.props.location.name.detile)
        return <div>
           <p> <button onClick={this.fan}>返回</button></p>
            {
                this.props.location.name.detile
            }
        </div>
    }
} 
export default Router