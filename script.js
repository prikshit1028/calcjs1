function addNum(a,b){
return a+b;
}

function subtractNum(a,b){
return a-b;
}

function multiplyNum(a,b){
return a*b;
}

function divideNum(a,b){
return a/b;
}


let number1;
let number2;
let operator$ = "+";
let result11;

function operate(operatorsign,firstNum,secondNum){
if (operatorsign == "+"){
    //alert(`it matched ${firstNum}`);
result11 = addNum(firstNum,secondNum);
result11 = result11.toFixed(2);

     return addNum(firstNum,secondNum);
}
 else if (operatorsign == "-"){
  result11 = subtractNum(firstNum, secondNum);
  result11 = result11.toFixed(2);

   return  subtractNum(firstNum, secondNum);
}
 else if (operatorsign == "*" ){
  result11 =  multiplyNum(firstNum, secondNum);
  result11 = result11.toFixed(2);

   return  multiplyNum(firstNum, secondNum);
}
else(operatorsign == "/")
 {
  result11 = divideNum(firstNum, secondNum);
  result11 = result11.toFixed(2);

   return  divideNum(firstNum, secondNum);
}
}

let div1 = document.querySelector("#firstone");
let displayDiv = document.querySelector("#secondone");

let button1 = document.querySelector("#numero1");
button1.textContent = "1";
//div1.appendChild(button1);

let button2 = document.querySelector("#numero2");
button2.textContent = "2";
//div1.appendChild(button2);
let button3 = document.querySelector("#numero3");
button3.textContent = "3";
//div1.appendChild(button3);

let button4 = document.querySelector("#numero4")
button4.textContent = "4";
//div1.appendChild(button4);

let button5 = document.querySelector("#numero5");
button5.textContent = "5";
//div1.appendChild(button5);

let button6 = document.querySelector("#numero6");
button6.textContent = "6";
//div1.appendChild(button6);

let button7 = document.querySelector("#numero7");
button7.textContent = "7";
//div1.appendChild(button7);

let button8 = document.querySelector("#numero8");
button8.textContent = "8";
//div1.appendChild(button8);

let button9 = document.querySelector("#numero9");
button9.textContent = "9";
//div1.appendChild(button9);

let button0 = document.querySelector("#numero0");
button0.textContent = "0"
//div1.appendChild(button0);



let emptyData1;
let firstTry = "";
let buttonList = document.querySelectorAll("button.firstClass")
buttonList.forEach((button)=>{
  button.addEventListener("click",function(e){
    emptyData1 = e.target.innerHTML;
    firstTry += emptyData1;
    displayDiv.textContent += emptyData1;
    console.log(emptyData1);
    //console.log(e);
  })
});


////////////////////////////////////////////////////////////////////////
let clearButton = document.querySelector("#clear_id");
clearButton.addEventListener("click", () =>{
  displayDiv.textContent = "";
  firstTry = "";
});
////////////////////////////////////////////////////////////////////////

let point1 = document.querySelector("#point_id");
point1.addEventListener("click",()=>{
 displayDiv.textContent += "."
  firstTry += ".";
})
////////////////////////////////////////////////////////////////////////


let addVar = document.querySelector("#add_id");
addVar.addEventListener("click", () =>{
  number1 = firstTry;
  number1 = Number(number1);
  operator$ = "+";
displayDiv.textContent += "+";
firstTry = "";
});


let subVar = document.querySelector("#subtract_id");
subVar.addEventListener("click",() =>{
number1 = firstTry;
number1 = Number(number1);
operator$ = "-";
displayDiv.textContent += "-";
firstTry = "";
});


let mulVar = document.querySelector("#multiply_id");
mulVar.addEventListener("click", () =>{
  number1 = firstTry;
  number1 = Number(number1);
  operator$ = "*";
  displayDiv.textContent += "*";
  firstTry = "";
});


let divVar = document.querySelector("#divide_id");
divVar.addEventListener("click", () =>{
  number1 = firstTry;
  number1 = Number(number1);
  operator$ = "/";
  displayDiv.textContent += "/";
  firstTry = "";
});



let finalResult = document.querySelector("#finalResult_id")
finalResult.addEventListener("click", () =>{
number2 = firstTry;
number2 = Number(number2);
displayDiv.textContent += "=";
operate(operator$, number1, number2);
displayDiv.textContent += result11;
});
