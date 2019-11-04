import React, { Component } from 'react';
import { connect } from 'react-redux'
import Read from '../unitil/index'
import Dian from '../component/Dian'
class Moren extends Component {
    addlist=(item)=>{  //购物车加加功能
        this.props.addlist(item)
    }
    removelist=(item,index)=>{  //购物车减减功能
        this.props.removelist(item,index)
    }
    dian=(item)=>{
        this.props.history.push('/detail',item)
    }
    render() {
        //通过Redux管理数据 传递数据
        console.log(this)
        const { list,toplist } = this.props.store
        console.log(list,toplist)
        
        return <div className="box">
            <div className="head">
                <Dian/>
            </div>
            <div className="main">
               {
                   list.map((item,index)=>{
                       return <div className="bao" key={index}>
                           <div className="left">
                                <img onClick={()=>{this.dian(item)}} className="gou" src={item.img} alt=""/>
                           </div>
                           <div className="right">
                                <p>{item.name}</p>
                                <p>￥{item.price}</p>
                                <p>
                                <button className="btntwo" onClick={()=>{this.removelist(item,index)}}>-</button>
                                {item.num}
                                <button className={['btntwo',toplist.length===0?'activetwo':'activeone'].join(' ')} onClick={()=>{this.addlist(item)}}>+</button>
                                </p>
                           </div>
                       </div>
                   })
               }
            </div>
            <div className="foot">
                <div className="leftone">
                   {
                       toplist.map((item,index)=>{
                           return <div className="gao" key={index}>{item.price*item.num*1}</div>
                       })
                   }
                </div>
                <div className="rightone">
                    <button className={['btnone',toplist.length===0?'activetwo':'activeone'].join(' ')}>购买</button>
                </div>
               
            </div>
        </div>
    }
    componentDidMount() {
        this.props.getlist()
    }
}
let mapStateToProps = (store) => {
    console.log(store)
    return {
        store
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getlist() {
            Read('/list/json').then(res => {
                console.log(res)
                dispatch({ type: "getlist", list: res })
            })
        },
        addlist(item){
            dispatch({type:"addlist",add:item})
        },
        removelist(item,index){
            const arr=[item,index]
            dispatch({type:"removelist",remove:arr})
        }
    }
}
Moren = connect(mapStateToProps, mapDispatchToProps)(Moren)
export default Moren