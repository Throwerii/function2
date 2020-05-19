let firstNumber = document.querySelector("#number1")
let secondNumber = document.querySelector("#number2")
let addButton = document.querySelector("#add")
let sumN = document.querySelector("#sum")
let multiplyButton = document.querySelector("#multiply")
let product = document.querySelector("#product")
let powerButton = document.querySelector("#power")
let exponent = document.querySelector("#exp")
let factorButton = document.querySelector("#factor")
let factor = document.querySelector("#fact")
addButton.addEventListener("click", function(){
    const one=parseInt(firstNumber.value)

    const two=parseInt(secondNumber.value)
    

    function add(a,b){
        return a+b
    }
    console.log("Add button clicked")
    console.log(add(one,two))
    sumN.innerHTML=add(one,two)
})
multiplyButton.addEventListener("click", function(){
    const one=parseInt(firstNumber.value)
    const two=parseInt(secondNumber.value)
    function add(a,b){
        return a+b
    }
    function multiply(a,b){
        let numberOne=one
        let numberTwo=two
        for(let i=0;i<=numberTwo;i+=1){
            let currentNumber=numberOne
            let newNumber= add(currentNumber,numberOne)
            currentNumber=newNumber
            console.log(newNumber)
            return newNumber
        }
    }
    console.log("Multiply button clicked")
    
    // console.log(multiply(one,two))
    product.innerHTML=multiply(one,two)
})