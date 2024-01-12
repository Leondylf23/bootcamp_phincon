let theme = parseInt(localStorage.getItem('theme'));
if(theme) {
    changeTheme(theme);
}
if(isNaN(theme) || theme > 2) {
    localStorage.removeItem('theme');
}

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
    localStorage.setItem("theme", i);
}

var display = "0";
var lastOperator = "";
var isClear = false;
var tempNumber = 0;

function numberWithPeriods(value) {
    if (!value) return "0";
    value = value.toString();
    let valueSplit = value.split(".");
    let frontValue = valueSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let behindValue = valueSplit.length > 1 ? "." + valueSplit[1] : "";
    
    return frontValue + behindValue;
}

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
        if(isClear) {
            display = "0";
        } else {
            display = display.slice(0, display.length - 1);
            if(!display.length > 0) display = "0";
        }
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
            isClear = true;
        }
    } else if(data === "res") {
        lastOperator = "";
        tempNumber = 0;
        display = "0";
    } else if(operators.includes(data)) {
        if(tempNumber != 0) result();
        tempNumber = parseFloat(display);
        lastOperator = data;
        display = "0";
    } else {
        if(display === "0" || isClear) {
            display = "";
            isClear = false;
        }
        display += data;
    }
    displayView.innerHTML = numberWithPeriods(display);
    operatorDisplay.innerHTML = `${lastOperator != "" ? numberWithPeriods(tempNumber) : ""} ${lastOperator}`;
}
addEventListener("keydown", (e) => {
    const key = e.key;
    const registeredKeys = "1234567890-+*/=x.";
    const registeredSpecialKeys = ["Delete", "Backspace", "Enter", "Escape"];
    
    if(registeredKeys.includes(key) || registeredSpecialKeys.includes(key)) {
        switch (key) {
            case "Delete": {
                const btn = document.getElementById("del");
                btn.setAttribute("class", "text-2-btns text-2-btns-active");
                btn.click();
                break;
            }
            case "Backspace": {
                const btn = document.getElementById("del");
                btn.setAttribute("class", "text-2-btns text-2-btns-active");
                btn.click();
                break;
            }
            case "=": {
                const btn = document.getElementById("=");
                btn.setAttribute("class", "btn-grid-2-cols text-equal text-equal-active");
                btn.click();
                break;
            }
            case "Enter": {
                const btn = document.getElementById("=");
                btn.setAttribute("class", "btn-grid-2-cols text-equal text-equal-active");
                btn.click();
                break;
            }
            case "Escape": {
                const btn = document.getElementById("res");
                btn.setAttribute("class", "text-2-btns btn-grid-2-cols text-2-btns-active");
                btn.click();
                break;
            }
            case "*": {
                const btn = document.getElementById("x");
                btn.setAttribute("class", "app-keypad-active");
                btn.click();
                break;
            }
            default: {
                const btn = document.getElementById(key);
                btn.setAttribute("class", "app-keypad-active");
                btn.click();
                break;
            }
        }
    }
});
addEventListener("keyup", (e) => {
    const key = e.key;
    const registeredKeys = "1234567890-+*/=x.";
    const registeredSpecialKeys = ["Delete", "Backspace", "Enter", "Escape"];
    
    if(registeredKeys.includes(key) || registeredSpecialKeys.includes(key)) {
        switch (key) {
            case "Delete": {
                const btn = document.getElementById("del");
                btn.setAttribute("class", "text-2-btns");
                break;
            }
            case "Backspace": {
                const btn = document.getElementById("del");
                btn.setAttribute("class", "text-2-btns");
                break;
            }
            case "Enter": {
                const btn = document.getElementById("=");
                btn.setAttribute("class", "btn-grid-2-cols text-equal");
                break;
            }
            case "=": {
                const btn = document.getElementById("=");
                btn.setAttribute("class", "btn-grid-2-cols text-equal");
                break;
            }
            case "Escape": {
                const btn = document.getElementById("res");
                btn.setAttribute("class", "text-2-btns btn-grid-2-cols");
                break;
            }
            case "*": {
                const btn = document.getElementById("x");
                btn.removeAttribute("class");
                break;
            }
            default: {
                const btn = document.getElementById(key);
                
                btn.removeAttribute("class");
                break;
            }
        }
    }
});