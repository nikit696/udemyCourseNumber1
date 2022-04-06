
function printHumiditiesForecast(arr){
let str = "... "
for (let i = 1; i <= arr.length; i++){
    index = i - 1
    str += `${arr[index]}% humidity in ${i} days ... `
}
return str
}
console.log(printHumiditiesForecast([49,51,63]))
console.log(printHumiditiesForecast([31,29,43,58,52]))