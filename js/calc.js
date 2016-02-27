var number="";
var expression="";
var result=0;

/*
 This function is called when a digit button is clicked,
 it allow the concateneation of digits into a single number.
    i.e.: click on "1", click on "9" => number is equal to "19"
*/
function createNumber(digit) {
    number = number + digit;
}

/*
 This function is called when an operand button is clicked,
 it's used to concatenate the inserted number with the
 clicked operand.
    i.e.: click on "1", click on "9", click on "+" => expression=="19 +"
 */
function updateExpression(operand) {

    // first evaluate the operand clicked by user
    if( operand == "sum"){
        operand = "+";
    }else if (operand == "sub"){
        operand = "-";
    }else if (operand == "prod"){
        operand = "*";
    }else operand = "/";

    //than concatenate the operand within the expression
    expression = expression + number + " " + operand + " ";

    //and than reset number to allow a new number insertion
    number="";
}

/*
 Called when the "equal" button is pressed, used to dislay the
 result of the expression's evaluation
*/
function updateScreen() {

    /*Note: ricorda di stampare solo i primi 10 caratteri (a partire dal
    less significant ) con un ciclo for per la stampa senza uscire fuori
    dallo spazio per lo schermo */

    //document.getElementById('screen').innerHTML = ""; //clear screen

    if( expression != "" ){
        //an expression has been inserted and can be evaluated and than displayed
        expression = expression + number; //inserting last number
        result = eval(expression);

        document.getElementById('screen').innerHTML = result.toFixed(2);

    }else{
        //there isn't an expression, display the number
        document.getElementById('screen').innerHTML = number;
    }

    number=""; //reset number
    expression=""; //reset expression
    result=0; //reset result
}
