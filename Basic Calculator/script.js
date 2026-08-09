let inputOne = document.getElementById('a')
let inputTwo = document.getElementById('b')

const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')

let result = document.getElementById('result')



const add = (num1, num2) => {
    return num1 + num2;
}
const sub = (num1, num2) => {
    return num1 - num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
}
const divide = (num1, num2) => {
    return num1 / num2;
}

addBtn.addEventListener("click", () => {
    let num1 = Number(inputOne.value);
    let num2 = Number(inputTwo.value);
    add(num1, num2)
    const ans = add(num1 , num2)
    result.innerHTML = ans
})
subBtn.addEventListener("click", () => {
    let num1 = Number(inputOne.value);
    let num2 = Number(inputTwo.value);
    sub(num1, num2)
    const ans = sub(num1 , num2)
    result.innerHTML = ans
})
multiplyBtn.addEventListener("click", () => {
    let num1 = Number(inputOne.value);
    let num2 = Number(inputTwo.value);
    multiply(num1, num2)
    const ans = multiply(num1 , num2)
    result.innerHTML = ans
})
divideBtn.addEventListener("click", () => {
    let num1 = Number(inputOne.value);
    let num2 = Number(inputTwo.value);
    divide(num1, num2)
    const ans = divide(num1 , num2)
    result.innerHTML = ans
})

