let weight = prompt('enter your weight in kilograms')
let height = prompt('enter your height in meters')
if (weight / Math.pow(height, 2) > 25){
    let diff = weight / Math.pow(height, 2) - 25
    alert(`Yes, your BMI is more than normal by ${diff}`)
} else {
    alert(`No, your weight is normal`)
}
