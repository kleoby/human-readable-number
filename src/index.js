module.exports = function toReadable(number) {
    const myNum = number;


    let str = myNum.toString();
    let digit;
    let a = [];
    for (let i = 0; i < str.length; i++) {
        digit = str[i];
        a.push(digit);
    }
    const myArray = a;
    let firstNumber = myArray[0];
    let secondNumber = myArray[1];
    let thirdNumber = myArray[2];
    let numOne = '';
    let numTwo = '';
    let numThree = '';


    if (firstNumber == 9) {
        switch (myArray.length) {
            case 1:
                numOne = 'nine';
                break;
            case 2:
                numOne = 'ninety';
                break;
            default:
                numOne = 'nine hundred';
                break;
        }

    } else if (firstNumber == 8) {
        switch (myArray.length) {
            case 1:
                numOne = 'eight';
                break;
            case 2:
                numOne = 'eighty';
                break;
            default:
                numOne = 'eight hundred';
                break;
        }

    } else if (firstNumber == 7) {
        switch (myArray.length) {
            case 1:
                numOne = 'seven';
                break;
            case 2:
                numOne = 'seventy';
                break;
            default:
                numOne = 'seven hundred';
                break;
        }

    } else if (firstNumber == 6) {
        switch (myArray.length) {
            case 1:
                numOne = 'six';
                break;
            case 2:
                numOne = 'sixty';
                break;
            default:
                numOne = 'six hundred';
                break;
        }

    } else if (firstNumber == 5) {
        switch (myArray.length) {
            case 1:
                numOne = 'five';
                break;
            case 2:
                numOne = 'fifty';
                break;
            default:
                numOne = 'five hundred';
                break;
        }
    } else if (firstNumber == 4) {
        switch (myArray.length) {
            case 1:
                numOne = 'four';
                break;
            case 2:
                numOne = 'forty';
                break;
            default:
                numOne = 'four hundred';
                break;
        }
    } else if (firstNumber == 3) {
        switch (myArray.length) {
            case 1:
                numOne = 'three';
                break;
            case 2:
                numOne = 'thirty';
                break;
            default:
                numOne = 'three hundred';
                break;
        }
    } else if (firstNumber == 2) {
        switch (myArray.length) {
            case 1:
                numOne = 'two';
                break;
            case 2:
                numOne = 'twenty';
                break;
            default:
                numOne = 'two hundred';
                break;
        }
    } else if (firstNumber == 1) {
        switch (myArray.length) {
            case 1:
                numOne = 'one';
                break;
            case 2:
                if (secondNumber == 0) {
                    numOne = 'ten';

                }
                if (secondNumber == 1) {
                    numOne = 'eleven';
                }
                if (secondNumber == 2) {
                    numOne = 'twelve';
                }
                if (secondNumber == 3) {
                    numOne = 'thirteen';
                }
                if (secondNumber == 4) {
                    numOne = 'fourteen';
                }
                if (secondNumber == 5) {
                    numOne = 'fifteen';
                }
                if (secondNumber == 6) {
                    numOne = 'sixteen';
                }
                if (secondNumber == 7) {
                    numOne = 'seventeen';
                }
                if (secondNumber == 8) {
                    numOne = 'eighteen';
                }
                if (secondNumber == 9) {
                    numOne = 'nineteen';
                }
                break;
            default:
                numOne = 'one hundred';
                break;
        }

    } else {
        numOne = 'zero';
    }






    if (secondNumber == 9) {

        switch (myArray.length) {
            case 1:
                numTwo = '';
                break;
            case 2:
                if (firstNumber != 1) { numTwo = ' nine'; };

                break;
            default:

                numTwo = ' ninety';


                break;
        }


    } else if (secondNumber == 8) {
        switch (myArray.length) {
            case 1:
                numTwo = '';
                break;
            case 2:
                if (firstNumber != 1) { numTwo = ' eight'; };
                break;
            default:

                numTwo = ' eighty';

        }

    } else if (secondNumber == 7) {
        switch (myArray.length) {
            case 1:
                numTwo = '';
                break;
            case 2:
                if (firstNumber != 1) { numTwo = ' seven'; };
                break;
            default:
                numTwo = ' seventy';
                break;
        }

    } else if (secondNumber == 6) {
        switch (myArray.length) {
            case 1:
                numTwo = '';
                break;
            case 2:

                if (firstNumber != 1) { numTwo = ' six'; };
                break;
            default:

                numTwo = ' sixty';


                break;
        }

    } else if (secondNumber == 5) {
        switch (myArray.length) {
            case 1:
                numTwo = '';
                break;
            case 2:
                if (firstNumber != 1) { numTwo = ' five'; };
                break;
            default:

                numTwo = ' fifty';


                break;
        }
    } else if (secondNumber == 4) {
        switch (myArray.length) {
            case 1:
                numTwo = '';
                break;
            case 2:

                if (firstNumber != 1) { numTwo = ' four'; };
                break;
            default:

                numTwo = ' forty';


                break;
        }
    } else if (secondNumber == 3) {
        switch (myArray.length) {
            case 1:
                numTwo = '';
                break;
            case 2:

                if (firstNumber != 1) { numTwo = ' three'; };
                break;
            default:

                numTwo = ' thirty';


                break;
        }
    } else if (secondNumber == 2) {
        switch (myArray.length) {
            case 1:
                numTwo = '';
                break;
            case 2:

                if (firstNumber != 1) { numTwo = ' two'; };
                break;
            default:

                numTwo = ' twenty';


                break;
        }
    } else if (secondNumber == 1) {
        switch (myArray.length) {
            case 1:
                numTwo = '';
                break;
            case 2:

                if (firstNumber != 1) { numTwo = ' one'; };
                break;
            default:
                if (thirdNumber == 0) {
                    numTwo = ' ten';
                }
                if (thirdNumber == 1) {
                    numTwo = ' eleven';
                }
                if (thirdNumber == 2) {
                    numTwo = ' twelve';
                }
                if (thirdNumber == 3) {
                    numTwo = ' thirteen';
                }
                if (thirdNumber == 4) {
                    numTwo = ' fourteen';
                }
                if (thirdNumber == 5) {
                    numTwo = ' fifteen';
                }
                if (thirdNumber == 6) {
                    numTwo = ' sixteen';
                }
                if (thirdNumber == 7) {
                    numTwo = ' seventeen';
                }
                if (thirdNumber == 8) {
                    numTwo = ' eighteen';
                }
                if (thirdNumber == 9) {
                    numTwo = ' nineteen';
                }

                break;
        }

    } else if (firstNumber == 1) {
        numTwo = '';
    } else {
        numTwo = '';
    }
    if (secondNumber == 1) {
        numThree = '';
    } else if (thirdNumber == 9) {
        numThree = ' nine'
    } else if (thirdNumber == 8) {
        numThree = ' eight';
    } else if (thirdNumber == 7) {
        numThree = ' seven';
    } else if (thirdNumber == 6) {
        numThree = ' six';
    } else if (thirdNumber == 5) {
        numThree = ' five';
    } else if (thirdNumber == 4) {
        numThree = ' four';
    } else if (thirdNumber == 3) {
        numThree = ' three';
    } else if (thirdNumber == 2) {
        numThree = ' two';
    } else if (thirdNumber == 1) {
        numThree = ' one';
    } else {
        numThree = '';
    }

    return numOne + numTwo + numThree;


}
