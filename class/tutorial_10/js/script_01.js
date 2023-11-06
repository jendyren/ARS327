window.onload = function() {
    document.getElementById("heading").innerHTML = "Happy Halloween";
}

function addFunction(){
    let num1 = document.getElementById("add_num1").value;
    let num2 = document.getElementById("add_num2").value;
    let result = parseInt(num1) + parseInt(num2);
    document.getElementById("add_result").innerHTML = num1 + "+" + num2 + " = " + result;
}

function subtractFunction(){
    let num1 = document.getElementById("sub_num1").value;
    let num2 = document.getElementById("sub_num2").value;
    let result = parseInt(num1) - parseInt(num2);
    document.getElementById("sub_result").innerHTML = num1 + "-" + num2 + " = " + result;
}

function multiplyFunction(){
    let num1 = document.getElementById("mul_num1").value;
    let num2 = document.getElementById("mul_num2").value;
    let result = parseInt(num1) * parseInt(num2);
    document.getElementById("mul_result").innerHTML = num1 + "*" + num2 + " = " + result;
}

function divideFunction(){
    let num1 = document.getElementById("div_num1").value;
    let num2 = document.getElementById("div_num2").value;
    let result = parseInt(num1) / parseInt(num2);
    document.getElementById("div_result").innerHTML = num1 + "/" + num2 + " = " + result;
}