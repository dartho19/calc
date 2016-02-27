/* Global Variables */
var number=""; //the number that has been inserted
var expression=""; //the total expression that has been inserted
var result=0; //the value to display on screen
var MAX_LEGTH=10; //maximum amout of digit that screen can handle
var len=0; //actual length of the current number

/*
 This function is called when a digit button is clicked,
 it allow the concateneation of digits into a single number, and
 also it update the screen for every number insertion.
    i.e.: click on "1", click on "9" => number is equal to "19"
*/
function createNumber(digit) {
    if(len < MAX_LEGTH){ //accept new digit
        number = number + digit;
        len++;
    }
    document.getElementById('screen').innerHTML = number;
}

/*
 This function is called when an operand button is clicked,
 it's used to concatenate the previously inserted number with the
 clicked operand.
    i.e.: click on "1", click on "9", click on "+" => expression=="19 +"
 */
function updateExpression(operand) {
    //concatenate the number and the operand within the expression
    expression = expression + number + " " + operand + " ";
    //and than reset number and len to allow a new number insertion
    number="";
    len=0;
}

/*
 Called when the "equal" button is pressed, it allows the dislay of the
 result of the expression's evaluation or the screen's default value, 0
*/
function updateScreen() {

    if( expression != "" ){
        //if an expression is present, it can be evaluated and than displayed
        expression = expression + number; //appending last number

        try {   //try to evaluate the expression
            result = eval(expression);
        } catch (e) {   //catch error if expression is incorrect
            if (e instanceof SyntaxError) {
                document.getElementById('screen').innerHTML = "Error";
                resetValues();
                return;
            }
        }
        //if expression has been correctly evaluated print the result
        document.getElementById('screen').innerHTML = result.toPrecision(2);
    }else if( number!="" ){
        //if there isn't an expression, just display the current number
        document.getElementById('screen').innerHTML = number;
    }else document.getElementById('screen').innerHTML = "0"; //default screen value

    //before returning reset variables to default value:
    resetValues();
}

function resetValues(){
    number=""; //reset number
    expression=""; //reset expression
    result=0; //reset result
    len=0;
}
