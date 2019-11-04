import React, { Component } from 'react';
import Read from '../unitil/index'
import './css/style.css'
class Dian extends Component{
    state={
       list:[],
       data:[],
      idx:0
     
    }
    dian=(index)=>{
        this.setState({
            idx:index
        })
    }
    render(){
       const {list,idx,data}=this.state   //这个是图片选中
       console.log(list)
        return <div>
            <div className="tou">
                    <img src={data.img} alt=""/>
                    星拼悦蛋糕礼
            </div>
            <div className="conmon">
            {
                list.map((item,index)=>{
                    return <div onClick={()=>{this.dian(index)}}  className={['ge',idx===index?'activeeee':''].join(' ')} key={index}>
                        <img  className="imgtwo" src={item.img} alt=""/>
                    </div>
                })
            }
            </div>
        </div>
    }
    componentDidMount(){
      Read('/imgtwo.json').then(res=>{
          console.log(res)
          this.setState({
              list:res
          })
      })
      Read('/imgone/json').then(res=>{
          this.setState({
              data:res
          })
      })
    }
}
export default Dian