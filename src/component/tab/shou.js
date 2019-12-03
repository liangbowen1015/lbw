import React, { Component } from 'react';
import {connect} from 'react-redux'
import Read from '../../unitil/index'
class Routers extends Component{
    add=(index)=>{
       this.props.add(index)
    }
    remove=(index)=>{
        this.props.remove(index)
     }
    
    addshopping=(index,item)=>{
        // console.log(index,item.num)
        this.props.addshopping(index,item.num)
    }
    detail=()=>{
        this.props.history.push('/detail')
    }

    render(){
        const {list}=this.props.store
        // console.log(list)
        return <div>
            <div className="head">首页</div>
            <div className="main">
                {
                    list.map((item,index)=>{
                        return <div key={index} className="shoumain">
                            <div className="left">
                                <img onClick={this.detail} src={item.img} alt=""/>
                            </div>
                            <div className="right">
                            <p>{item.name}</p>
                             <p>{item.price}</p>
                             <p>
                                 {/* <button onClick={()=>this.remove(index)}>-</button>
                                 {item.num}
                                 <button onClick={()=>this.add(index)}>+</button> <br/> */}
                                 <button onClick={()=>{this.addshopping(index,item)}} > 添加购物车 </button>
                             </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    }
    componentDidMount(){
        this.props.getlist()
    }
}
let mapstatetoprops=(store)=>{
    return{
        store
    }
}
let mapdispatchtoprops=(dispatch)=>{
    return{
        getlist(){
            Read('/mock/json').then(res=>{
                // console.log(res)
                dispatch({type:'getlist',list:res})
            })
        } ,
        add(index){
            dispatch({type:'add',list:index})
        },
        remove(index){
            dispatch({type:'remove',list:index})
        },
        addshopping(index,num){
            dispatch({type:"ADD__SHOPPING",lists:{index:index,num:num}})
        }
    }
}
Routers=connect(mapstatetoprops,mapdispatchtoprops)(Routers)
export default Routers