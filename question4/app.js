function addItems(text){
    let unOrder = document.querySelector("#ul")
    let itemList  = document.createElement("li")

    itemList.append(text)
    unOrder.append(itemList)
}

addItems("Eraser")