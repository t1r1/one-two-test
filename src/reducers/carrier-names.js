import * as data from '../data/data.json'

let carrierMap = {}
data.flights.forEach( item => {
    carrierMap[item.carrier] = null
})
let carrierNameArray = Object.keys(carrierMap)
carrierNameArray = carrierNameArray.sort()
carrierNameArray = carrierNameArray.map(item => { return { name: item, filter: item } })
carrierNameArray.splice(0, 0, { name: "Все Авиакомпании", filter: "ALL" })

const carrierNames = (state, action) => {
    return carrierNameArray
}

export default carrierNames