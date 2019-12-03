import { createStore } from 'redux'
let reducer = (state, actions) => {
    // console.log('执行了')
    if (actions.type === 'getlist') {
        state.list = actions.list
    }
    if (actions.type === 'add') {
        // console.log(state.newShopp[actions.list].num)
        // if(state.newShopp[actions.list].bool){
        ++state.newShopp[actions.list].num
            // }
    }
    if (actions.type === 'remove') {
        // if(state.newShopp[actions.list].bool){
        if (state.newShopp[actions.list].num >= 1) {
            --state.newShopp[actions.list].num
                // }
        }

    }
    if (actions.type === "ADD__SHOPPING") {
        if (!state.newShopp.includes(state.list[actions.lists.index])) {
            state.newShopp.push(state.list[actions.lists.index])
            if (actions.lists.num > 1) {
                state.newShopp[actions.lists.index].num += actions.lists.num
            }
        }
        // console.log(state.newShopp)
    }


    if (actions.type === "BOOL") {
        // console.log(actions.bool)
        state.newShopp.map(item => {
            // console.log(item.bool)
            return item.bool = actions.bool
        })
        return {...state, newShopp: [...state.newShopp] }
    }
    if (actions.type === "CHECKED") {
        console.log(state.newShopp[actions.lists.index].bool)
        state.newShopp[actions.lists.index].bool = !state.newShopp[actions.lists.index].bool //反选功能 取反
        state.newShopp.map(item => {
            if (item.bool) {
                return actions.lists.__refs.checked = false
            }
            return {...state, newShopp: [...state.newShopp] }
        })

        let aaa = state.newShopp.some(item => {
            return item.bool === false
        })
        console.log(aaa)
        if (aaa === false) {
            actions.lists.__refs.checked = true
        }
        // console.log(aaa)
        return {...state, newShopp: [...state.newShopp] }
    }


    if (actions.type === "PRICE") {
        let newprice = state.newShopp.filter(item => {
            return item.bool === true
        })
        state.booltrue = newprice
        console.log(state.booltrue)
        let nums = 0
        state.booltrue.forEach(item => {
            nums += item.price * 1 * item.num
        })
        state.price = nums
            // console.log(state.price)
    }


    // console.log(state, 'redux仓库')
    return {...state }
}
let initState = {
    list: [],
    goulist: [],
    newShopp: [],
    price: "",
    booltrue: []
}
let store = createStore(reducer, initState)
export default store