function formLocalStorage(key){
    let localForm = localStorage.getItem(key)
    return JSON.parse(localForm)
}

const car = {
    type: 'four wheel',
    color: 'black',
    engine: '300cc',
    runningKm: 12000
}

let carDetails = JSON.stringify(car)

localStorage.setItem('vehicle', carDetails)
let ObjPrint = formLocalStorage('vehicle')
console.log(ObjPrint);