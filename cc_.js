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

accountBalance += 1; // Adds 1 to the accountBalance 
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
console.log(employeeScore1 > employeeScore2);// Greater than
console.log(employeeScore1 < employeeScore2); // Less than
console.log(employeeScore1 >= employeeScore2);//Greater than Equal Or to
console.log(employeeScore1 <= employeeScore2);// Less Than or Equal to
console.log(employeeScore1 === employeeScore2);// Strict Equal
console.log(employeeScore1 !== employeeScore2);// Strict Not Equal
//Task 5: Logical Operators
let hasKeyCard = true;
let hasPermission = true;
console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);
console.log(!hasKeyCard);