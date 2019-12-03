import React, { Component } from 'react';
import {connect} from 'react-redux'
class Routers extends Component{
    add=(index)=>{
       this.props.add(index)
       this.props.price()
    }
    remove=(index)=>{
        this.props.remove(index)
        this.props.price()
     }


     check=(e,index)=>{
        console.log(e.checked)
        this.props.checked(index,this.refs.allcheck)
        this.props.price()
     }
     
     all=()=>{
        console.log(this.refs.allcheck.checked)
        this.props.getbool(this.refs.allcheck.checked)
        this.props.price()
     }
    render(){
        // console.log(this.props.store)
        const {newShopp}=this.props.store
        return <div>
            <div className="head">购物车</div><br/><br/>
            <p> <input ref="allcheck" type="checkbox"  onClick={()=>{this.all()}}/> 点击全选 </p> <br/><br/>
            <div className="main">
                {
                    newShopp.map((item,index)=>{
                        return <div key={index} className="shoumain">
                            <div className="left">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="right">
                            <p>
                            <input type="checkbox"  checked={item.bool} onClick={(e)=>{this.check(e.target,index)}} /> <span> {item.name} </span>
                            </p>
                             <p>{item.price}</p>
                             <p>
                                 <button onClick={()=>this.remove(index)}>-</button>
                                 {item.num}
                                 <button onClick={()=>this.add(index)}>+</button>
                             </p>
                            </div>
                        </div>
                    })
                }
            </div>
            <div> 总价： <span> {this.props.store.price} 人民币</span> </div>
        </div>
    }
    componentDidMount(){
        // alert(1)
        // console.log(this.refs.allcheck.checked)
        
    }
}
let mapstatetoprops=(store)=>{
    // console.log(store)
    return{
        store
    }
}
let mapdispatchtoprops=(dispatch)=>{
    return{
        add(index){
            dispatch({type:'add',list:index})
        },
        remove(index){
            dispatch({type:'remove',list:index})
        },
        getbool(bool){
            dispatch({type:"BOOL",bool:bool})
        },
        checked(index,__refs){
            dispatch({type:"CHECKED",lists:{index:index,__refs:__refs}})
        },
        price(){
            dispatch({type:"PRICE"})
        }
    }
}
Routers=connect(mapstatetoprops,mapdispatchtoprops)(Routers)
export default Routers