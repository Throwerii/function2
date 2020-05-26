let firstNumber = document.querySelector("#number1")
let secondNumber = document.querySelector("#number2")
let addButton = document.querySelector("#add")
let sumN = document.querySelector("#sum")
let multiplyButton = document.querySelector("#multiply")
let product = document.querySelector("#product")
let powerButton = document.querySelector("#power")
let power = document.querySelector("#exp")
let factorButton = document.querySelector("#factor")
let act = document.querySelector("#fact")

const one=parseInt(firstNumber.value)
const two=parseInt(secondNumber.value)

function add(a,b){
    return a+b
}

function multiply(a,b){
    var currentNumber=one
    for(let i=2;i<=two;i+=1){
        let newNumber= add(one,currentNumber)
        currentNumber=newNumber
    }
    return currentNumber
}

function exp(a,b){
    let Number=one
    console.log(Number)
    for(let i=1;i<=two;i+=1){
        var newNumber= multiply(one,Number)
        Number=newNumber
        console.log(newNumber,Number,i)
    }
    return Number
    
    function factor(a,b){
        var currentNumber=one
        for(let i=1;i<=two;i+=1){
            let n=currentNumber-1
            console.log(n)
            let newNumber=multiply(currentNumber,n)
            currentNumber=newNumber
            console.log(newNumber,currentNumber,i,n)
        }
        return currentNumber
    }
}    

function factor(a,b){
        var currentNumber=one
        for(let i=1;i<=two;i+=1){
            let n=currentNumber-1
            console.log(n)
            let newNumber=multiply(currentNumber,n)
            currentNumber=newNumber
            console.log(newNumber,currentNumber,i,n)
        }
        return currentNumber
    }
addButton.addEventListener("click", function(){
    const one=parseInt(firstNumber.value)
    const two=parseInt(secondNumber.value)
    console.log("Add button clicked")
    console.log(add(one,two))
    sumN.innerHTML=add(one,two)
})
multiplyButton.addEventListener("click", function(){
    const one=parseInt(firstNumber.value)
    const two=parseInt(secondNumber.value)
    console.log("Multiply button clicked")
    console.log(multiply(one,two))
    product.innerHTML=multiply(one,two)
})
powerButton.addEventListener("click",function(){
    const one=parseInt(firstNumber.value)
    const two=parseInt(secondNumber.value)
    console.log("POOOOWWWEEERRRR!!!! button clicked")
    power.innerHTML=exp(one,two)
})
factorButton.addEventListener("click",function(){
    const one=parseInt(firstNumber.value)
    const two=parseInt(secondNumber.value)
console.log("That's a foct")
    act.innerHTML=factor(one,two)
})