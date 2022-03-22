const calculateTips = x => x < 20 ? 0.2 * x : 0.15 * x
let arr = [11,20,47]
let arrTips = []
let arrTotal = []
for (let i = 0; i < arr.length; i++){
    arrTips.push(calculateTips(arr[i]))
}
for (let i = 0; i < arr.length; i++){
    arrTotal[i] = arrTips[i] + arr[i]
}
console.log(arrTotal)