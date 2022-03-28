let bmi = function(){
    return this.BMI = this.weight / this.height ** 2
}
let mikeObject = {
    firstName: "Mike",
    lastName: "Black",
    weight: 91,
    height: 1.93,
    calcBMI: bmi
};
let jackObject = {
    firstName: "Jack",
    lastName: "White",
    weight: 79,
    height: 1.70,
    calcBMI: bmi
};

mikeObject.calcBMI()
jackObject.calcBMI()
console.log(jackObject.BMI > mikeObject.BMI ? `Jack White BMI ${jackObject.BMI} is higher than Mike Black ${mikeObject.BMI}!` 
            : `Mike Black BMI (${mikeObject.BMI}) is higher than Jack White (${jackObject.BMI})!`)