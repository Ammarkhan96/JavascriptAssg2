function outerFunction(value1){
   return function(value2){
    console.log(value1 + value2);
   }
}

let returnFunc = outerFunction(10)
returnFunc(5)