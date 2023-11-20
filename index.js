// =====================
// Part 1: Refactoring Old Code
// =====================

const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

console.log(csvData);

// Rows
const rows = csvData.split(`\n`);
console.log(rows);

// Column #1
const cell1 = [];
// Column #2
const cell2 = [];
// Column #3
const cell3 = [];
// Column #4
const cell4 = [];

for (row of rows) {
  // Splitting each row by their respective cells
  const cell = row.split(`,`);
  // console.log(cell);
  // Pushing Data to Each Cell / Column
  cell1.push(cell[0]);
  cell2.push(cell[1]);
  cell3.push(cell[2]);
  cell4.push(cell[3]);
  // Output Values by Row
  console.log(cell[0], cell[1], cell[2], cell[3]);
}
// Output Values into Columns
console.log(cell1, cell2, cell3, cell4);

// =====================
// Part 2: Expanding Functionality
// =====================
// Splitting the array in to cells
console.log(rows);

// Replaces all new line characters globally with commas
const cleanedString = csvData.replace(/\n+/g, `,`);

// Split string by commas and stored into an array
const cleanedArray = cleanedString.split(`,`);

console.log(cleanedArray);

console.log(`Your current Array Length is ${cleanedArray.length}`);
let numOfCol = parseInt(
  prompt(
    `Enter a number to divide the array by to split up the columns for each row (assuming dividing by the number of columns are divided evenly per row); where "number > 0" && "number <= array.length"!`
  )
);

let isValid = false;
let rowStartSlice = 0;
let rowEndSlice = numOfCol;
const adjustedArray = [];

while (isValid !== true) {
  if (numOfCol > 0 && rowEndSlice === cleanedArray.length) {
    adjustedArray.push(cleanedArray);
    console.log(adjustedArray);
    isValid = true;
  } else if (numOfCol > 0 && rowEndSlice === cleanedArray.length - 1) {
    let currRow = cleanedArray.slice(rowStartSlice, rowEndSlice);
    adjustedArray.push(currRow);
    console.log(currRow);
    console.log(adjustedArray);
    isValid = true;
  } else if (numOfCol > 0 && rowEndSlice < cleanedArray.length - 1) {
    let currRow = cleanedArray.slice(rowStartSlice, rowEndSlice);
    adjustedArray.push(currRow);
    console.log(currRow);
    rowStartSlice += numOfCol;
    rowEndSlice += numOfCol;
  } else {
    numOfCol = parseInt(
      prompt(
        `Try Again! Enter a number to divide the array by to split up the columns for each row (assuming dividing by the number of columns are divided evenly per row); where "number > 0" && "number <= array.length"!`
      )
    );
  }
}

console.log(adjustedArray);
