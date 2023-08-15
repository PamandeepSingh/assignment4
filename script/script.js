function addValue(){
    // get the operands value
    // parse to integer. You can use: parseInt(input, 10);
    // perform operation
    // creating the text output
    // (if you want to check) print out in console
    // change the text area

    let firstNumber = document.getElementById("input_a").value;
    let secondNumber = document.getElementById("input_b").value;

    first = parseInt(firstNumber,10);
    second= parseInt(secondNumber,10);

    let ans = first + second;

    text = firstNumber + " + " + secondNumber + " = " + ans;

    document.getElementById("output").innerHTML = text;

    //document.mycalculator.output.value = text;
}


function mulValue(){

    let firstNumber = document.getElementById("input_a").value;
    let secondNumber = document.getElementById("input_b").value;
    first = parseInt(firstNumber,10);
    second= parseInt(secondNumber,10);
    let result = first * second;
    let ans = result.toFixed(2);
    text = firstNumber + " * " + secondNumber + " = " + ans;
    document.getElementById("output").innerHTML = text;

    //document.mycalculator.output.value = text;
}

function divValue(){

    let firstNumber = document.getElementById("input_a").value;
    let secondNumber = document.getElementById("input_b").value;
    first = parseInt(firstNumber,10);
    second= parseInt(secondNumber,10);
    let result = first / second;
    let ans = result.toFixed(2);
    text = firstNumber + " / " + secondNumber + " = " + ans;
    document.getElementById("output").innerHTML = text;

    //document.mycalculator.output.value = text;
}

function clear1(){
     document.getElementById("input_a").value = "";
    document.getElementById("input_b").value = "";
    document.getElementById("output").innerText = "";
}
