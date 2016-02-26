var number="";
var expression="";
var result;

/*function to concatenate digit into a single number*/
function createNumber(digit) {
    number = number + digit;
}

/*function that concatenate a number with an operand*/
function updateExpression(operand) {

    //operand evaluation
    if( operand == "sum"){
        operand = " + ";
    }else if (operand == "sub"){
        operand = " - ";
    }else if (operand == "prod"){
        operand = " * ";
    }else operand = " / ";

    //expression evaluation
    
}

/*called when the "equal" button is pressed*/
function updateScreen() {

    /*ricorda di stampare solo i primi 10 caratteri (a partire dal
    less significant ) con un ciclo for per la stampa senza uscire fuori
    dallo spazio per lo schermo */
    document.getElementById('screen').innerHTML = " "; //clear screen

    if( expression != null ){
        document.getElementById('screen').innerHTML = expression;
    }else{
        document.getElementById('screen').innerHTML = number;
    }

    number=""; //reset number
    expression=""; //reset expression
}
