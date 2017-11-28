export function selectCarrier(carrier) {
    //selectCarrier - action creater, должен возвращать объект с type property, который описывает назначение экшена
    return {
        type: 'SET_FILTER',
        payload: carrier
    }
}