let weight = prompt('enter your weight in kilograms')
let height = prompt('enter your height in meters')
alert(`Are you overweight? ${weight / height ** 2 >= 25}`)
