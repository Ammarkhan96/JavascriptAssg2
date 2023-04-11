function localStore(key, obj){
     localStorage.setItem(key, obj)
}

const players = {
    type: "batsman",
    hand: "left hand",
    position: "opener",
    age: 33,
    canBowl: true
}

let modifiedPlayer = JSON.stringify(players)
localStore('sportsman', modifiedPlayer)