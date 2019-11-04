import { createStore } from 'redux'

let reducer = (state,action) => {
    console.log(state)  //初始的数据
    //   console.log('执行了')
    //   return {...state}
    console.log(action)//{type:}
    if(action.type==='aaa'){
        state.list=action.list
    }
    return {...state}
}
let initState =  {
    list:[]
}

let store = createStore(reducer,initState)
export default store