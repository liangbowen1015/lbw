import mock from '../mock/mock'

function name(params) {
    return new Promise(res => {
        res(mock[params]())
    })
}
export default name