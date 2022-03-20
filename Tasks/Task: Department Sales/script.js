let dep1 = [55,1000,77]
let dep2 = [150,120,87]
const getAverage = (x) => (x.reduce((a, b) => a + b, 0)) / 3
let avDep1 = getAverage(dep1)
let avDep2 = getAverage(dep2)
let perc = 0
printBonus(avDep1,avDep2)
function printBonus(avDep1, avDep2){
    if (avDep1 > avDep2){
      perc = avDep1 / avDep2  
    } else {
      perc = avDep2 / avDep1
    }
    if (perc > 1.30){
        console.log(`${avDep1>avDep2?"Dept1":"Dept2"} will get bonus of ${(perc - 1) * 100}`)
    }
}