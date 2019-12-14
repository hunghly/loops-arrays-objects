// TODO Answer 1

/*function sum (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum+= numbers[i];
    }
    return sum;
}*/

/*function sum(numbers) {
    let i = 0;
    let sum = 0;
    while (i < numbers.length) {
        sum+= numbers[i];
        i++;
    }
    return sum;
}*/

// TODO Answer 2

/*function noSpace(x){
    let xArray = x.split("");
    let returnArray = [];
    console.log(xArray);
    for (let i = 0; i < xArray.length; i++) {
        // check to see if each index is equal to empty space, if it isn't then we can push to the return array.
        if (xArray[i] !== " ") {
            returnArray.push(xArray[i]);
        }
    }
    return returnArray.join("");
}*/


/*function noSpace(x) {
    return x.split(" ").join("");
}*/


/*function noSpace(x){
    return x.replace(/ /g, '');
}*/

// TODO Answer 3

/*function switcher(x){
    let alphabet = " ?!abcdefghijklmnopqrstuvwxyz ";
    let reverseAlphabetArray = alphabet.split("").reverse();
    let returnString = "";

    // Loop through array. Each argument passed in will be used as 'positionInput' for the reverseAlphabetArray
    x.forEach(function(positionInput) {
        returnString += reverseAlphabetArray[positionInput];
    });
    return returnString;
}*/
