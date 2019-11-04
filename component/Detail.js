import React, { Component } from 'react';

class Detail extends Component{
    state={

    }
    dian=()=>{
        this.props.history.push("/moren")
    }
    render(){
        //这是详情组件 也有详情展示
        console.log(this.props.location.state)
        return <div>
             <button onClick={this.dian}>返回</button>
            <p>
                {
                    this.props.location.state.name
                }
            </p>
            <p>
                {
                  <img src={this.props.location.state.img} alt=""/>
                }
            </p>
            <p>
                {
                    this.props.location.state.price
                }
            </p>
        </div>
    }
}
export default Detail