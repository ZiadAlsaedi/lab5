let btn = document.getElementById('btn')
let num = document.getElementById("num")
let result = document.getElementById("result")
btn.addEventListener('click',function() {
result.innerText=(parseInt(num.value) * 0.15) + parseInt(num.value)
})
let btn2 = document.getElementById('btn2')
let num2 = document.getElementById("num2")
let result2 = document.getElementById("result2")
btn2.addEventListener('click',function() {
let total =(parseInt(num.value) * 0.15) + parseInt(num.value)
let total2 =total/num2.value
result2.innerText=total2
})
    




