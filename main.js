

let input = document.querySelector('#number')
let plusBtn = document.querySelector('#plus-btn')
let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn')

let x = []

plusBtn.addEventListener('click', plusFunction)
minusBtn.addEventListener('click', minusFunction)
resetBtn.addEventListener('click', resetFunction)
input.addEventListener('focus',()=>{if(input.value==0){
    input.value=''
}})
input.addEventListener('focusout', ()=>{
    if(input.value==''){
        input.value=0
    }
})
input.value = JSON.parse(localStorage.getItem('total'))

function startPage(){
  if(!localStorage.getItem('total')){
    input.value = 0
  }
}
startPage()

let y = []

setInterval(function writeValue(){
  if(input.value){
    y.push(input.value)
    localStorage.setItem('total', JSON.stringify(y))
    y.shift()
  }
},500)


function plusFunction(){
  input.value++
  x.push(input.value)
  history()
}

function minusFunction(){
  input.value--
  x.push(input.value)
  history()
}

function resetFunction(){
  localStorage.clear()
  input.value=0
}

function history(){
  if(input.value){
    localStorage.setItem('total',JSON.stringify(x))
  }
  if(localStorage.getItem('total')){
    x.shift()
  }
}

