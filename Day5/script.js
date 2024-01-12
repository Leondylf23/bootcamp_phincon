function changeTheme(i) {
    const switchTheme = document.getElementById("switchTheme").children;
    
    for (let index = 0; index < switchTheme.length; index++) {
        const element = switchTheme[index];
        element.setAttribute("class", "switch-btn");

    }

    switch(i) {
        case 0:
            document.body.className = "theme-color-1";
            break;
        case 1:
            document.body.className = "theme-color-2";
            break;
        case 2:
            document.body.className = "theme-color-3";
            break;
        default:
            document.body.className = "theme-color-1";
            break;
    }

    switchTheme[i].setAttribute("class", "switch-btn active");
}
var display = "0";
var lastOperator = "";
var isClear = false;
var tempNumber = 0;

function buttonClick(data) {
    const displayView = document.getElementById("display");
    const operatorDisplay = document.getElementById("operatorDisplay");
    const operators = "+-x/";

    function result() {
        switch(lastOperator) {
            case "+":
                display = (tempNumber + parseFloat(display)).toString();
                break;
            case "-":
                display = (tempNumber - parseFloat(display)).toString();
                break;
            case "x":
                display = (tempNumber * parseFloat(display)).toString();
                break;
            case "/":
                if(parseFloat(display) === 0) {
                    display = "Can't divided by zero!";
                }
                display = (tempNumber / parseFloat(display)).toString();
                break;
        }
        lastOperator = "";
    }

    if(data === "del") {
        display = display.slice(0, display.length - 1);
        if(!display.length > 0) display = "0";
    } else if(data === ".") {
        if(display.includes(".")) return;
        if(isClear) {
            display = "0";
            isClear = false;
        }
        display += ".";
    } else if(data === "=") {
        if(!isClear) {
            result();
        }
    } else if(data === "res") {
        lastOperator = "";
        tempNumber = 0;
        display = "0";
    } else if(operators.includes(data)) {
        if(tempNumber != 0) result();
        tempNumber = parseFloat(display);
        // isClear = true;
        lastOperator = data;
        display = "0";
        // isClear = false;
    } else {
        if(display === "0") {
            display = "";
            // isClear = false;
        }
        display += data;
    }
    displayView.innerHTML = display;
    operatorDisplay.innerHTML = `${lastOperator != "" ? tempNumber : ""} ${lastOperator}`;
}

function result() {

}