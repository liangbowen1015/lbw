import listmock from './list.json'
import imgonejson from './imgone.json'
import imgtwojson from './img.json'
const mock = {
    '/list/json': function() {
        return listmock
    },
    '/imgone/json': function() {
        return imgonejson
    },
    '/imgtwo.json': function() {
        return imgtwojson
    }
}
export default mock