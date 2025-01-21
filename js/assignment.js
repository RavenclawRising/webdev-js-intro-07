"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

//Return the reaminder
const returnTheRemainder = (a, b) => a % b;


console.log(returnTheRemainder(4, 5));    

//Check if even
const checkIfEven = () => {
    const num = 47;
    if (num % 2 === 0) {
        checkIfEvenElement.textContent = true;
    } else {
        checkIfEvenElement.textContent = false;
    }
};

//The Fourth Element
const getTheFourthElement = arr => arr[3];

console.log(getTheFourthElement(lostNumbers));    // Output: 16

// Event listener for the submission button
submissionBtn.addEventListener("click", () => {
    // Display the remainder
   returnTheRemainder();
    
   // Check if the number is even
    checkIfEven();

    // Display the fourth element of the lostNumbers array
    const fourthElement = getTheFourthElement(lostNumbers);
    lostNumbersElement.textContent = fourthElement;   
});
