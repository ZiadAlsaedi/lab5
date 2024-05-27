let btn = document.getElementById('btn')

let num = document.getElementById("num")
let result = document.getElementById("result")




btn.addEventListener('click',function() {
result.innerText=(parseInt(num.value) * 0.15) + parseInt(num.value)
})

  


