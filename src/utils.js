import * as _ from 'lodash'

/* eslint-disable */
Map.prototype.toObj = function() {
    return [...this].reduce((o, [k, v]) => (o[k] = v, o), {});
}
/*eslint-enable */

_.updateIndex = (array, value, index) =>
    [...array.slice(0, index), value, ...array.slice(index + 1)]

_.updateWhere = (array, value, predicate) =>
    _.updateIndex(array, value, _.findIndex(array, predicate))

_.idCheck = id => e => e.id === id

export { Map, _ }