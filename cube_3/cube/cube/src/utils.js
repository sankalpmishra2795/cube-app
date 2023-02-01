export const convertFeetToMeter = (obj) => {
    let newObj = {}
    Object.entries(obj).map(item=>{
        newObj[`${item[0]}`] = (+item[1]*0.3048)?.toPrecision(3);
    })
    return newObj;
}

export const convertMeterToFeet = (obj) => {
    let newObj = {}
    Object.entries(obj).map(item=>{
        newObj[`${item[0]}`] = (+item[1]*3.28084)?.toPrecision(3);
    })
    return newObj;
}
