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

const a=parseInt(firstNumber.value)
const b=parseInt(secondNumber.value)

function add(a,b){
    return a+b
}
// for(loop b number of times){total = add(total, a)}
function multiply(a,b){
    let multiP=0
for(let i=1;i<=b;i+=1){
        multiP=add(multiP,a)
    }
    return multiP
}

function exp(a,b){
    let xPon=1
    for(let i=1;i<=b;i+=1){
         xPon= multiply(xPon,a)
        
    }
    return xPon
}    

function factor(a,b){
        let fact=1
        for(let i=1;i<=a;i+=1){
            fact=multiply(fact,i)
        }
        return fact
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
    console.log(exp(one,two))
    power.innerHTML=exp(one,two)

})
factorButton.addEventListener("click",function(){
    const one=parseInt(firstNumber.value)
    const two=parseInt(secondNumber.value)
console.log("That's a foct")
console.log(factor(one,two))

    act.innerHTML=factor(one,two)
})