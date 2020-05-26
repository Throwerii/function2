let firstNumber = document.querySelector("#number1")
let secondNumber = document.querySelector("#number2")
let addButton = document.querySelector("#add")
let sumN = document.querySelector("#sum")
let multiplyButton = document.querySelector("#multiply")
let product = document.querySelector("#product")
let powerButton = document.querySelector("#power")
let power = document.querySelector("#exp")
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
    
        var currentNumber=one
        for(let i=2;i<=two;i+=1){
            let newNumber= add(one,currentNumber)
            currentNumber=newNumber
            console.log(newNumber,currentNumber,i)
           
          
        }
        return currentNumber
    }
    console.log("Multiply button clicked")
    
    // console.log(multiply(one,two))
    product.innerHTML=multiply(one,two)
})
powerButton.addEventListener("click",function(){
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
            // console.log(newNumber,currentNumber,i)
           
          
        }
        return currentNumber
    }
    function exp(a,b){
    
        let currentNumber=one
        console.log(currentNumber)
        for(let i=1;i<=two;i+=1){
            var newNumber= multiply(one,currentNumber)
            currentNumber=newNumber
            console.log(newNumber,currentNumber,i)
           
          
        }
        return currentNumber
    }
    console.log("POOOOWWWEEERRRR!!!! button clicked")
    
    // console.log(multiply(one,two))
    power.innerHTML=exp(one,two)
})
// factorButton.addEventListener("click",function(){
    // const one=parseInt(firstNumber.value)
    // const two=parseInt(secondNumber.value)
// })