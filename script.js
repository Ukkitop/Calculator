const buttonsArray = document.querySelectorAll(".btnNumber");
buttonsArray.forEach(function (btn)  {
    
    btn.addEventListener("click" , function()  {        
      let input = document.querySelector("#input");
      let numbersStack;
      numbersStack= input.getAttribute("value");
      input.setAttribute("value",numbersStack != null ? numbersStack + btn.innerHTML: btn.innerHTML);
      
      
    });
})

const OperatorsKeys = document.querySelectorAll(".btnOperation");
let firstNumber = 0;
let operatorPressed;
OperatorsKeys.forEach(function (operator)  {
    
  operator.addEventListener("click" , function()  {        
    let input = document.querySelector("#input");
    firstNumber = input.getAttribute("value");
    operatorPressed = operator.innerHTML;    
    input.setAttribute("value", "");    
    
  });
})

const ResultKey = document.querySelector(".result");

ResultKey.addEventListener ("click", function() {
  console.log(firstNumber)
  console.log(input.getAttribute("value"))
  console.log(operatorPressed)
  switch (operatorPressed){
    case "+":
      console.log("+")
        input.setAttribute("value", parseFloat(firstNumber)  + parseFloat(input.getAttribute("value")));
        break;
    case "-":
        console.log("-")
        input.setAttribute("value", parseFloat(firstNumber)  - parseFloat(input.getAttribute("value")));
        break;
    case "/":
        console.log("/")
        input.setAttribute("value", parseFloat(firstNumber)  / parseFloat(input.getAttribute("value")));
        break;
    case "*":
        console.log("*")
        input.setAttribute("value", parseFloat(firstNumber)  * parseFloat(input.getAttribute("value")));
        break;
  }
})


const ResetKey = document.querySelector(".Reset")

ResetKey.addEventListener("click", function(){
  let input = document.querySelector("#input");
  operatorPressed = "";
  firstNumber = "";
  input.setAttribute("value", "");
})


const negativeKey = document.querySelector(".negative");

negativeKey.addEventListener("click", function(){
  let input = document.querySelector("#input");
  if (input.getAttribute("value") != null && input.getAttribute("value").length != 0)
  {
    input.setAttribute("value", parseFloat(input.getAttribute("value")) * (-1)); 
  }
})


document.addEventListener("keyup", function(e)  {
  e = e || window.event;
  console.log(isFinite(e.key));
  console.log(e.key);
  if (isFinite(e.key))
  {
      let input = document.querySelector("#input");
      let numbersStack;
      numbersStack= input.getAttribute("value");
      input.setAttribute("value",numbersStack != null ? numbersStack + e.key: e.key);
  }
  switch(e.key){
    case "+":
      document.getElementById("add").click();
    break
    case "-":
        document.getElementById("sub").click();
    break
    case "/":
        document.getElementById("div").click();
    break
    case "*":
        document.getElementById("mult").click();
    break
    case "Enter":
        document.getElementById("result").click();
    break
    case ".":
        document.getElementById("decimal").click();
    break
    case "Backspace":
        document.getElementById("deleteLast").click();
    break
  }

});


const DeleteLastKey = document.querySelector(".deleteLast");

DeleteLastKey.addEventListener("click", function(){
  let inputString = input.getAttribute("value").toString();
  let resultString = inputString.substr(0, inputString.length-1);
  console.log(resultString);
  if (resultString === "-"){
    input.setAttribute("value",""); 
  }
  else{
    input.setAttribute("value",resultString)
  }
})


