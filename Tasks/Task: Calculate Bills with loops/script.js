let bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57], tips = [], total = []
const calculateTips = x => x < 20 ? 0.2 * x : 0.15 * x
for (let i = 0; i < bills.length; i++){
    tips.push(calculateTips(bills[i]))
    total[i] = bills[i] + tips[i]
}
console.log(total)
let arr = [1, 2, 3, 4]
const calculateAverage = function(x){
    let sum = 0
    for (let i = 0; i < x.length; i++){
     sum += x[i]
    }
    return sum / x.length
}
console.log(calculateAverage(arr))
console.log(calculateAverage(total))