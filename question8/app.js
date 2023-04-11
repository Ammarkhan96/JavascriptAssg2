function setGetFunc(obj1) {
    const allKeys = Object.keys(obj1);
    const allValues = Object.values(obj1);
    for (let i = 0; i < allKeys.length; i++) {   
        localStorage.setItem(allKeys[i], allValues[i]);

    }
    let house2 = [];
    let keys = Object.keys(localStorage);
    for (let key of keys) {
        
        house2.push(`${key}: ${localStorage.getItem(key)}`);    
    }
   
    const obj2 = { ...house2 };
    return obj2;

}

const house = {
    stories: 8,
    color: 'offwhite',
    area: '200 sq-yard'
}


let retObj = setGetFunc(house); 
console.log(retObj);