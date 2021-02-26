let input
let inputVal
let minusButton
let plusButton
input = document.querySelector('input')
inputVal = input.value
minusButton = document.getElementById('minus-button')
plusButton = document.getElementById('plus-button')
text = document.querySelector("p")

minusButton.addEventListener("click", function(){
  inputVal = parseInt(input.value) 
  let textVal = parseInt(text.innerText)
  textVal += -inputVal
  text.innerText = textVal
  if (textVal < 0){
    text.style.color = "red"
  }
  
})
plusButton.addEventListener("click", function(){
  inputVal = parseInt(input.value) 
  let textVal = parseInt(text.innerText)
  textVal += inputVal
  text.innerText = textVal
  if (textVal >= 0){
    text.style.color = "black"
}
})

