// =====================
// Part 1: Refactoring Old Code
// =====================

const csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

console.log(csvData);

// Rows
const rows = csvData.split(`\n`);
console.log(rows);

const csvDataArray = [];

for (row of rows) {
  // Splitting each row by their respective cells and storing them into an array
  const rowArray = row.split(`,`);
  // console.log(cell);
  // Pushing Data to csvDataArray
  csvDataArray.push(rowArray);
  // Print Current Row
  console.log(rowArray);
}
// Output 2D format of csvData
console.log(csvDataArray);
// =====================
// Part 2: Expanding Functionality
// =====================
// Splitting the array into number of columns per row

// Concat all the nested arrays into one element of strings for the array
// Not sure why .flat doesn't work here for me for 2D arrays
const csvDataConcat = [].concat(...csvDataArray);
console.log(csvDataConcat);

// Replaces all new line characters globally with commas
// const cleanedString = csvData.replace(/\n+/g, `,`);

// Split string by commas and stored into an array
// const cleanedArray = cleanedString.split(`,`);

// console.log(cleanedArray);

console.log(`Your current Array Length is ${csvDataConcat.length}`);
let numOfCol = parseInt(
  prompt(
    `Enter a number to divide the array by to split up the columns for each row (assuming dividing by the number of columns are divided evenly per row); where "number > 0" && "number <= ${csvDataConcat.length}!"`
  )
);

let isValid = false;
let rowStartSlice = 0;
let rowEndSlice = numOfCol;
const adjustedArray = [];

while (isValid !== true) {
  if (numOfCol > 0 && rowEndSlice === csvDataConcat.length) {
    let currRow = csvDataConcat.slice(rowStartSlice, rowEndSlice);
    adjustedArray.push(currRow);
    // console.log(adjustedArray);
    isValid = true;
  }
  // Updates rowEndSlice === csvDataConcat.length
  else if (numOfCol > 0 && rowEndSlice < csvDataConcat.length) {
    let currRow = csvDataConcat.slice(rowStartSlice, rowEndSlice);
    adjustedArray.push(currRow);
    // console.log(currRow);
    rowStartSlice += numOfCol;
    rowEndSlice += numOfCol;
  } else {
    numOfCol = parseInt(
      prompt(
        `Try Again! Enter a number to divide the array by to split up the columns for each row (assuming dividing by the number of columns are divided evenly per row); where "number > 0" && "number <= ${csvDataConcat.length}"!`
      )
    );
  }
}

console.log(adjustedArray);

// =====================
// Part 3: Transforming Data
// =====================

const csvEmployeeData = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor’s Assistant", "26"],
];
const heading = csvEmployeeData[0].concat();
const employeeData = csvEmployeeData.slice(1, csvEmployeeData.length).concat();
// console.log(heading);
// console.log(employeeData);
const lowercasedHeading = heading.map((head) => head.toLowerCase());
// console.log(lowercasedHeading);
const employeeArray = [];
// Create an employee object template with the lowercased headings as keys
const employeeObject = lowercasedHeading.reduce(
  (acc, curr) => ((acc[curr] = ""), acc),
  {}
);

/* Which should be the same as the 
number of columns / head in 1st row of csvEmployeeData */
for (let index in employeeData) {
  // Update the values of for each key
  employeeObject.id = employeeData[index][0];
  employeeObject.name = employeeData[index][1];
  employeeObject.occupation = employeeData[index][2];
  employeeObject.age = employeeData[index][3];
  // Update the object to the array but as a deep copy
  employeeArray.push(structuredClone(employeeObject));
}

console.log(employeeArray);
// =====================
// Part 4: Sorting and Manipulating Data
// =====================

employeeArray.pop();
console.log(employeeArray);
employeeArray.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(employeeArray);
employeeArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(employeeArray);

// Using a Loop to get avgAge
let totalAge = 0;
for (employee of employeeArray) {
  totalAge += parseInt(employee.age);
}

let avgAge = (totalAge / employeeArray.length).toFixed(2);
console.log(`The average age of employees is: ${avgAge}`);

// Getting avgAge without a loop using .reduce
avgAge = (
  employeeArray.reduce(
    (totalAge, employee) => totalAge + parseInt(employee.age),
    0
  ) / employeeArray.length
).toFixed(2);

// console.log(`The average age of employees is: ${avgAge}`);

// =====================
// Part 5: Full Circle
// =====================
const newEmployeeData = employeeArray.reduce((csv, employee) => {
  // let keys = Object.keys(employee);
  // let values = Object.values(employee);

  // Below let employeeString would out -> `id,42,name:,Bruce,occupation:, Knight,age:,41`
  let employeeString = Object.entries(employee)
    .map(([key, value]) => key + `,` + value)
    .join(`,`);

  // Add a new line aka return key char after each adjusted String
  let adjustedString = employeeString + `\n`;
  // Deep copy adjustedString and concat each version to csv
  csv += structuredClone(adjustedString);
  // console.log(csv);

  return csv;
}, ``);

console.log(newEmployeeData);


