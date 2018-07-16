function add(number1,number2){
    return number1 + number2;
}
function subtract(number1,number2){
    return number1 - number2;
}
function multiply(number1,number2){
    return number1 * number2;
}
function divide(number1,number2){
    return number1/number2;
}
function modulus(number1,number2){
    return number1 % number2;
}
function factorial(number1){
    var factorialTotal = 1;
    for(var i=1;i<=number1;i++){
        factorialTotal *= i;
    }
    return factorialTotal;
}
function squareRoot(number1){
    return Math.sqrt(number1);
}
function power(number1,number2){
    totalPower = 1;
    for(var i = 0; i<number2;i++){
        totalPower*=number1;
    }
    return totalPower;
}

function calculator(num1,num2,fn){
    return fn(num1,num2);
}
var currentAnswer1 = 0;
var currentAnswer2 = 0;
var finalAnswer = 0;
var screenValue = "";
var booleanKey = "";

screen = document.getElementById("calculator_screen_section");
error = document.getElementById("calculator_screen_section_error");
var err = "";
console.log(error);

function arithemeticFuncs(e) {
    let operator = e.target.innerHTML;
    screenValue = screen.innerHTML;
    booleanKey = screenValue;
    if((screenValue[screenValue.length-1]==="+")||(screenValue[screenValue.length-1]==="-")||(screenValue[screenValue.length-1]==="x")||
    (screenValue[screenValue.length-1]==="/")||(screenValue[screenValue.length-1]==="^")||(screenValue[screenValue.length-1]==="%")){
    }
    else{
        if(screenValue.length === 20){
            error.innerHTML = "ERR:too much chacracter clear screen"; 
            err = error.innerHTML; 
            return err;
        }
    for(var i=screenValue.length;i>0;i--){
        if(screenValue.length === 20){
            error.innerHTML = "ERR:too much chacracter clear screen"; 
            error.style.color = "red";
            err = error.innerHTML; 
            return err;
        }
        if(screenValue.length>=15){error.style.color = "greenyellow"; error.innerHTML="NO:"; }
        if(screenValue.length < 14){error.style.color = "green"; error.innerHTML="NO:"; }
        if(screenValue[i] === "+"){
            screenValue.split("");
            var newScreenValue = screenValue.slice(i+1,screenValue.length);
            currentAnswer2 = Number(newScreenValue);
            currentAnswer1 = calculator(currentAnswer1,currentAnswer2,add);
            finalAnswer += currentAnswer1;
            screenValue += operator;
            return screen.innerHTML = screenValue;
        }
        if(screenValue[i] === "-"){
            screenValue.split("");
            var newScreenValue = screenValue.slice(i+1,screenValue.length);
            currentAnswer2 = Number(newScreenValue);
            currentAnswer1 = calculator(currentAnswer1,currentAnswer2,subtract);
            finalAnswer += currentAnswer1;
            screenValue += operator;
            return screen.innerHTML = screenValue;
            }
        if(screenValue[i] === "x"){
            screenValue.split("");
            var newScreenValue = screenValue.slice(i+1,screenValue.length);
            currentAnswer2 = Number(newScreenValue);
            currentAnswer1 = calculator(currentAnswer1,currentAnswer2,multiply);
            finalAnswer += currentAnswer1;
            screenValue += operator;
            return screen.innerHTML = screenValue;
            }
        if(screenValue[i] === "/"){
            screenValue.split("");
            var newScreenValue = screenValue.slice(i+1,screenValue.length);
            currentAnswer2 = Number(newScreenValue);
            currentAnswer1 = calculator(currentAnswer1,currentAnswer2,divide);
            finalAnswer += currentAnswer1;
            screenValue += operator;
            return screen.innerHTML = screenValue;
            }
        if(screenValue[i] === "^"){
            screenValue.split("");
            var newScreenValue = screenValue.slice(i+1,screenValue.length);
            currentAnswer2 = Number(newScreenValue);
            currentAnswer1 = calculator(currentAnswer1,currentAnswer2,power);
            finalAnswer += currentAnswer1;
            screenValue += operator;
            return screen.innerHTML = screenValue;
            }
        if(screenValue[i] === "%"){
            screenValue.split("");
            var newScreenValue = screenValue.slice(i+1,screenValue.length);
            currentAnswer2 = Number(newScreenValue);
            currentAnswer1 = calculator(currentAnswer1,currentAnswer2,modulus);
            finalAnswer += currentAnswer1;
            screenValue += operator;
            return screen.innerHTML = screenValue;
            }
    if(Boolean(Number(booleanKey)) === true){
            currentAnswer2 = Number(screenValue);
            currentAnswer1 = calculator(0,currentAnswer2,add);
            finalAnswer = currentAnswer1;
            screenValue += operator;
            return screen.innerHTML = screenValue;
                }
            }
    }
}

numbadd = document.getElementById("numbadd");
numbadd.addEventListener("click",arithemeticFuncs);

numbsub = document.getElementById("numbsub");
numbsub.addEventListener("click",arithemeticFuncs);

numbmultiply = document.getElementById("numbmultiply");
numbmultiply.addEventListener("click",arithemeticFuncs);

numbdivide = document.getElementById("numbdivide");
numbdivide.addEventListener("click",arithemeticFuncs);

numbmodulus = document.getElementById("numbmodulus");
numbmodulus.addEventListener("click",arithemeticFuncs);

numbpower = document.getElementById("numbpower");
numbpower.addEventListener("click",function(){
    screenValue = screen.innerHTML;
    booleanKey = screenValue;
    if((screenValue[screenValue.length-1]==="+")||(screenValue[screenValue.length-1]==="-")||(screenValue[screenValue.length-1]==="x")||
    (screenValue[screenValue.length-1]==="/")||(screenValue[screenValue.length-1]==="^")||(screenValue[screenValue.length-1]==="%")){
}
else{
    if(screenValue.length === 20){
        error.innerHTML = "ERR:too much chacracter clear screen"; 
        error.style.color = "red";
        err = error.innerHTML; 
        return err;
    }
    if(screenValue.length>=15){error.style.color = "greenyellow"; error.innerHTML="NO:"; }
    if(screenValue.length < 14){error.style.color = "green"; error.innerHTML="NO:"; }
    for(var i=screenValue.length;i>0;i--){
        if(screenValue[i] === "+"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,add);
           finalAnswer += currentAnswer1;
           return screen.innerHTML = "("+screenValue+")^";
        }
        if(screenValue[i] === "-"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,subtract);
           finalAnswer += currentAnswer1;
           return screen.innerHTML = "("+screenValue+")^";
            }
       if(screenValue[i] === "x"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,multiply);
           finalAnswer += currentAnswer1;
           return screen.innerHTML = "("+screenValue+")^";
            }
       if(screenValue[i] === "/"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,divide);
           finalAnswer += currentAnswer1;
           return screen.innerHTML = "("+screenValue+")^";
            }
       if(screenValue[i] === "^"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,power);
           finalAnswer += currentAnswer1;
           return screen.innerHTML = "("+screenValue+")^";
            }
       if(screenValue[i] === "%"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,modulus);
           finalAnswer += currentAnswer1;
           return screen.innerHTML = "("+screenValue+")^";
            } 
    if(Boolean(Number(booleanKey)) === true){
        currentAnswer2 = Number(screenValue);
        currentAnswer1 = calculator(0,currentAnswer2,add);
        finalAnswer = currentAnswer1;
        return screen.innerHTML = "("+screenValue+")^";
           }
        }
}
   });
numbfactorial = document.getElementById("numbfactorial");
numbfactorial.addEventListener("click",function(){
    screenValue = screen.innerHTML;
    booleanKey = screenValue;
    if((screenValue[screenValue.length-1]==="+")||(screenValue[screenValue.length-1]==="-")||(screenValue[screenValue.length-1]==="x")||
    (screenValue[screenValue.length-1]==="/")||(screenValue[screenValue.length-1]==="^")||(screenValue[screenValue.length-1]==="%")){
}
else{
    if(screenValue.length === 20){
        error.innerHTML = "ERR:too much chacracter clear screen"; 
        error.style.color = "red";
        err = error.innerHTML; 
        return err;
    }
    if(screenValue.length>=15){error.style.color = "greenyellow"; error.innerHTML="NO:"; }
    if(screenValue.length < 14){error.style.color = "green"; error.innerHTML="NO:"; }
    for(var i=screenValue.length;i>0;i--){
        if(screenValue[i] === "+"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,add);
           currentAnswer1 = factorial(currentAnswer1);
           finalAnswer += currentAnswer1;
           var finalAnswerString = finalAnswer;
           return screen.innerHTML = finalAnswerString.toString();
        }
       if(screenValue[i] === "-"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,subtract);
           currentAnswer1 = factorial(currentAnswer1);
           finalAnswer += currentAnswer1;
           var finalAnswerString = finalAnswer;
           return screen.innerHTML = finalAnswerString.toString();
            }
      if(screenValue[i] === "x"){
        screenValue.split("");
        var newScreenValue = screenValue.slice(i+1,screenValue.length);
        currentAnswer2 = Number(newScreenValue);
        currentAnswer1 = calculator(currentAnswer1,currentAnswer2,multiply);
        currentAnswer1 = factorial(currentAnswer1);
        finalAnswer += currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
      if(screenValue[i] === "/"){
        screenValue.split("");
        var newScreenValue = screenValue.slice(i+1,screenValue.length);
        currentAnswer2 = Number(newScreenValue);
        currentAnswer1 = calculator(currentAnswer1,currentAnswer2,divide);
        currentAnswer1 = factorial(currentAnswer1);
        finalAnswer += currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
       if(screenValue[i] === "^"){
        screenValue.split("");
        var newScreenValue = screenValue.slice(i+1,screenValue.length);
        currentAnswer2 = Number(newScreenValue);
        currentAnswer1 = calculator(currentAnswer1,currentAnswer2,power);
        currentAnswer1 = factorial(currentAnswer1);
        finalAnswer += currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
       if(screenValue[i] === "%"){
        screenValue.split("");
        var newScreenValue = screenValue.slice(i+1,screenValue.length);
        currentAnswer2 = Number(newScreenValue);
        currentAnswer1 = calculator(currentAnswer1,currentAnswer2,modulus);
        currentAnswer1 = factorial(currentAnswer1);
        finalAnswer += currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            } 
      if(Boolean(Number(booleanKey)) === true){
        var newScreenValue = screenValue;
        currentAnswer2 = Number(screenValue);
        if(finalAnswer>1000000000){
            break;
        }
        currentAnswer1 = factorial(currentAnswer2);
        finalAnswer = currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
      }
           }
}
   });
numbsquareroot = document.getElementById("numbsquareroot");
numbsquareroot.addEventListener("click",function(){
    screenValue = screen.innerHTML;
    booleanKey = screenValue;
    if((screenValue[screenValue.length-1]==="+")||(screenValue[screenValue.length-1]==="-")||(screenValue[screenValue.length-1]==="x")||
    (screenValue[screenValue.length-1]==="/")||(screenValue[screenValue.length-1]==="^")||(screenValue[screenValue.length-1]==="%")){
}
else{
    if(screenValue.length === 20){
        error.innerHTML = "ERR:too much chacracter clear screen"; 
        error.style.color = "red";
        err = error.innerHTML; 
        return err;
    }
    if(screenValue.length>=15){error.style.color = "greenyellow"; error.innerHTML="NO:"; }
    if(screenValue.length < 14){error.style.color = "green"; error.innerHTML="NO:"; }
    for(var i=screenValue.length;i>0;i--){
        if(screenValue[i] === "+"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,add);
           currentAnswer1 = squareRoot(currentAnswer1);
           finalAnswer = currentAnswer1;
           var finalAnswerString = finalAnswer
           return screen.innerHTML = finalAnswerString.toString();
        }
       if(screenValue[i] === "-"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,subtract);
           currentAnswer1 = squareRoot(currentAnswer1);
           finalAnswer = currentAnswer1;
           var finalAnswerString = finalAnswer;
           return screen.innerHTML = finalAnswerString.toString();
            }
      if(screenValue[i] === "x"){
        screenValue.split("");
        var newScreenValue = screenValue.slice(i+1,screenValue.length);
        currentAnswer2 = Number(newScreenValue);
        currentAnswer1 = calculator(currentAnswer1,currentAnswer2,multiply);
        currentAnswer1 = squareRoot(currentAnswer1);
        finalAnswer = currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
      if(screenValue[i] === "/"){
        screenValue.split("");
        var newScreenValue = screenValue.slice(i+1,screenValue.length);
        currentAnswer2 = Number(newScreenValue);
        currentAnswer1 = calculator(currentAnswer1,currentAnswer2,divide);
        currentAnswer1 = squareRoot(currentAnswer1);
        finalAnswer = currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
       if(screenValue[i] === "^"){
        screenValue.split("");
        var newScreenValue = screenValue.slice(i+1,screenValue.length);
        currentAnswer2 = Number(newScreenValue);
        currentAnswer1 = calculator(currentAnswer1,currentAnswer2,power);
        currentAnswer1 = squareRoot(currentAnswer1);
        finalAnswer = currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
       if(screenValue[i] === "%"){
        screenValue.split("");
        var newScreenValue = screenValue.slice(i+1,screenValue.length);
        currentAnswer2 = Number(newScreenValue);
        currentAnswer1 = calculator(currentAnswer1,currentAnswer2,modulus);
        currentAnswer1 = squareRoot(currentAnswer1);
        finalAnswer = currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            } 
      if(Boolean(Number(booleanKey)) === true){
        currentAnswer2 = Number(screenValue);
        currentAnswer1 = squareRoot(currentAnswer2);
        finalAnswer = currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
      }
           }
}
   });
numbequal = document.getElementById("numbequal");
numbequal.addEventListener("click",function(){
    screenValue = screen.innerHTML;
    booleanKey = screenValue;
    if((screenValue[screenValue.length-1]==="+")||(screenValue[screenValue.length-1]==="-")||(screenValue[screenValue.length-1]==="x")||
    (screenValue[screenValue.length-1]==="/")||(screenValue[screenValue.length-1]==="^")||(screenValue[screenValue.length-1]==="%")){
 
}
else{
    if(screenValue.length === 20){
        error.innerHTML = "ERR:too much chacracter clear screen"; 
        error.style.color = "red";
        err = error.innerHTML; 
        return err;
    }
    if(screenValue.length>=15){error.style.color = "greenyellow"; error.innerHTML="NO:"; }
    if(screenValue.length < 14){error.style.color = "green"; error.innerHTML="NO:"; }
    for(var i=screenValue.length;i>0;i--){
        if(screenValue[i] === "+"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,add);
           finalAnswer = currentAnswer1;
           var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
        }
        if(screenValue[i] === "-"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,subtract);
           finalAnswer = currentAnswer1;
           var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
       if(screenValue[i] === "x"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,multiply);
           finalAnswer = currentAnswer1;
           var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
       if(screenValue[i] === "/"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,divide);
           finalAnswer = currentAnswer1;
           var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
       if(screenValue[i] === "^"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,power);
           finalAnswer = currentAnswer1;
           var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            }
       if(screenValue[i] === "%"){
           screenValue.split("");
           var newScreenValue = screenValue.slice(i+1,screenValue.length);
           currentAnswer2 = Number(newScreenValue);
           currentAnswer1 = calculator(currentAnswer1,currentAnswer2,modulus);
           finalAnswer = currentAnswer1;
           var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
            } 
    if(Boolean(Number(booleanKey)) === true){
        currentAnswer2 = Number(screenValue);
        currentAnswer1 = calculator(0,currentAnswer2,add);
        finalAnswer = currentAnswer1;
        var finalAnswerString = finalAnswer;
        return screen.innerHTML = finalAnswerString.toString();
           }
           }
}
});
var numbers = document.getElementsByClassName("calNumber");
console.log(numbers);

[].forEach.call(numbers, function (number){
    var numberVal = number.innerHTML;
    number.addEventListener("click", function(){
        screenValue = screen.innerHTML;
    if(screenValue.length === 20){
        error.innerHTML = "ERR:too much chacracter clear screen"; 
        error.style.color = "red";
        err = error.innerHTML; 
        return err;
    }
    if(screenValue.length>=15){error.style.color = "greenyellow"; error.innerHTML="NO:"; }
    if(screenValue.length < 14){error.style.color = "green"; error.innerHTML="NO:"; }
        screenValue +=numberVal;
        return screen.innerHTML = screenValue;
    })
})
numbon = document.getElementById("numbon");
numbon.addEventListener("click",function(){
    screen.innerHTML = "";
    finalAnswer = 0;
    currentAnswer1 = 0;
    currentAnswer2 = 0;
});
numbback = document.getElementById("numbback");
numbback.addEventListener("click",function(){
    screenValue = screen.innerHTML;
    if(screenValue.length>=15){error.style.color = "greenyellow"; error.innerHTML="NO:"; }
    if(screenValue.length < 14){error.style.color = "green"; error.innerHTML="NO:"; }
    newScreenValue = screenValue.split("");
    newScreenValue.pop();
    newScreenValue = newScreenValue.join("");
    return screen.innerHTML = newScreenValue;
});

