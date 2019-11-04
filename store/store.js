import { createStore } from 'redux'
let reducer = (state, action) => {
    // console.log("执行力")
    if (action.type === "getlist") {
        // console.log(action)
        state.list = action.list
    }
    if (action.type === 'addlist') {
        ++action.add.num
        state.toplist.push(action.add)

    }
    if (action.type === 'removelist') {
        if (action.remove[0].num > 0) {
            --action.remove[0].num
            state.toplist.splice(action.remove[1], 1)
        }
    }
    return {...state }
}
let initState = {
    list: [],
    toplist: [],
}
let store = createStore(reducer, initState)
export default store