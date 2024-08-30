//Task 1 : Variables and Data Types

let employeeName = "Kosi Mensah";
const employeeID = 642;
var isActive = true;
console.log(employeeName,typeof(employeeName));
console.log(employeeID,typeof(employeeID));
console.log(isActive,typeof(isActive));

//Task 2: Compound Data Types

let products = ["brownies","cookies","cakes"];
const productDetails = {
name: "brownies",
price: 540,
inStock: true
}
console.log(products,productDetails);

// Task 3: Assignment Operators
let accountBalance = 50;

accountBalance += 1;
    console.log(accountBalance);
accountBalance -= 30;
    console.log(accountBalance);

accountBalance *= 3;
    console.log(accountBalance);

accountBalance /= 2;
    console.log(accountBalance);

accountBalance %= 2;
    console.log(accountBalance);
// Task 4: Comparison Operators
let employeeScore1 = 100;
let employeeScore2 = 200;
console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);