import React,{Component} from 'react';
import {connect} from 'react-redux'
import Read from '../../../unitil/index'
class Router extends Component{
    state={

    }
    dian=(item)=>{
        this.props.history.push({pathname:'/xiang',name:item})
    }
    render(){
        console.log(this)
    const {list}=this.props
        return <div>
            {
                list.map((item,index)=>{
                    return <div onClick={()=>{this.dian(item)}} key={index}>
                  <p>
                  {item.name}
                  </p>
                  <p>
                  {item.id}
                  </p>
                    </div>
                })
            }
        </div>
    }
    componentDidMount(){
        this.props.getlist()
    }
} 
let mapStatetoprops=(store)=>{
    console.log(store)
        const {list}=store //从store中解构
   return {
    list//把这个数据抛出去 抛到props中
   }
}
let mapdispathchprops=(dispatch)=>{
    return{
        getlist(){
            Read('/mock/json').then(res=>{
                console.log(res)
                dispatch({type:'aaa',list:res})
            })
        }
    }
}
Router=connect(mapStatetoprops,mapdispathchprops)(Router)
export default Router